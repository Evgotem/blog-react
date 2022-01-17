import React from 'react';
import { Button } from '../../../Button/Button';
import styles from './Registration.module.scss';
import { useForm } from 'react-hook-form';
import {
 TextField
} from '@mui/material';


export const Registration = ({ setRegistration }) => {

  const { register, handleSubmit, reset, formState } = useForm();

  const onSubmit = (values) => console.log(values);

  const onClickOverlay = (e) => {
    if (e.currentTarget === e.target) {
      setRegistration(false);
    }
  };
  return (
    <div onMouseDown={(e) => onClickOverlay(e)} className={styles.registration}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.titleWrapper}>
          <h2>Регистрация</h2>
          <img onClick={() => setRegistration(false)} src='/images/close.png' alt='close' />
        </div>

        <TextField
          required
          label='Логин'
          name='login'
          {...register('login', {
            required: 'Это обязательное поле!',
          })}
          helperText={formState.errors.login && formState.errors.login.message}
          error={!!formState.errors.login}
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
      </form>
    </div>
  );
};
