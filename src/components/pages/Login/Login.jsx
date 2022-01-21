import React from 'react';
import { Button } from '../../Button/Button';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import axios from 'axios';
import { Registration } from '../Registration/Registration';

export const Login = ({ setLogin }) => {
  const [registration, setRegistration] = React.useState(false);

  const { register, handleSubmit, reset, formState } = useForm();

  const onSubmit = async (values) => {
    try {
      await axios.post('http://localhost:5656/auth/login', { 
        "email": values.email,
        "password": values.password
      }).then(({data}) => console.log(data.token))
    } catch (e) {
      console.log(e);
    }
    
    console.log(values);
  };

  const onClickOverlay = (e) => {
    if (e.currentTarget === e.target) {
      setLogin(false);
    }
  };


  return (
    
    <>
    {
      registration ?
      <Registration setLogin={setLogin} setRegistration={setRegistration} />
      :
      <div onMouseDown={(e) => onClickOverlay(e)} className={styles.registration}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.titleWrapper}>
            <h2>Войти</h2>
            <img onClick={() => setLogin(false)} src='/images/close.png' alt='close' />
          </div>
  
          <TextField
            required
            label='Email'
            name='email'
            {...register('email', {
              required: 'Это обязательное поле!',
              pattern: {
                value:
                  /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
                message: 'Введен некорректный email',
              },
            })}
            helperText={formState.errors.email && formState.errors.email.message}
            error={!!formState.errors.email}
            fullWidth
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            required
            name='password'
            label='Пароль'
            type='password'
            {...register('password', {
              required: 'Это обязательное поле!',
            })}
            helperText={formState.errors.password && formState.errors.password.message}
            error={!!formState.errors.password}
            fullWidth
            sx={{ marginBottom: '20px' }}
          />
  
          <Button width={'100%'}>Войти</Button>
          <span onClick={() => setRegistration(true)} className={styles.goToRegistration}>Зарегистрироваться</span>
        </form>
      </div>
    }
    </>
  );
};
