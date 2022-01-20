import React from 'react';
import { Button } from '../../Button/Button';
import styles from './Registration.module.scss';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import axios from 'axios';

export const Registration = ({ setRegistration, setLogin }) => {
  const { register, handleSubmit, reset, formState } = useForm();

  const onSubmit = async (values) => {
    try {
      await axios.post('http://localhost:5656/auth/register', {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      });
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
  
        <div onMouseDown={(e) => onClickOverlay(e)} className={styles.registration}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.titleWrapper}>
              <h2>Регистрация</h2>
              <img onClick={() => setLogin(false)} src='/images/close.png' alt='close' />
            </div>

            <TextField
              required
              label='Логин'
              name='fullName'
              {...register('fullName', {
                required: 'Это обязательное поле!',
              })}
              helperText={formState.errors.fullName && formState.errors.fullName.message}
              error={!!formState.errors.fullName}
              fullWidth
              sx={{ marginBottom: '15px' }}
            />
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

            <Button width={'100%'}>Зарегистрироваться</Button>
            <span onClick={() => setRegistration(false)} className={styles.goToLogin}>
              Войти
            </span>
          </form>
        </div>
   
  );
};
