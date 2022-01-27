import { Button, TextField } from '@mui/material';
import React from 'react';
import styles from './Login.module.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true);
  const navigate = useNavigate();
  const goProfile = () => navigate('/', { replace: true });

  const { handleSubmit, register, formState } = useForm();
  const onSubmit = async (values) => {
    if (isRegistered) {
      // Авторизация
      try {
        await axios
          .post('http://localhost:5656/auth/login', {
            email: values.email,
            password: values.password,
          })
          .then(({ data }) => localStorage.setItem('token', data.token));
          goProfile();
      } catch (e) {
        console.log(e);
      }
      console.log(values);
    } else {
      // Регистрация
      try {
        await axios
          .post('http://localhost:5656/auth/register', {
            fullName: values.fullName,
            email: values.email,
            password: values.password,
          })
          .then(({ data }) => localStorage.setItem('token', data.token));
          goProfile();
      } catch (e) {
        console.log('ОШИБКА!!!', e);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{isRegistered ? 'Войти' : 'Регистрация'}</h1>
        {!isRegistered && (
          <TextField
            label='Имя'
            fullWidth
            margin='dense'
            {...register('fullName', {
              required: 'Это обязательное поле!',
            })}
          />
        )}

        <TextField
          label='Email'
          fullWidth
          margin='dense'
          {...register('email', {
            required: 'Это обязательное поле!',
            pattern: {
              value:
                /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
              message: 'Введен некорректный email',
            },
          })}
          error={!!formState.errors.email}
          helperText={formState.errors.email && formState.errors.email.message}
        />
        <TextField
          label='Пароль'
          fullWidth
          margin='dense'
          type='password'
          {...register('password', {
            required: 'Это обязательное поле!',
          })}
          error={!!formState.errors.password}
          helperText={formState.errors.password && formState.errors.password.message}
        />
        <Button onClick={handleSubmit(onSubmit)} variant='contained' color='primary' fullWidth>
          {isRegistered ? 'Войти' : 'Зарегистрироваться'}
        </Button>
        <p className={styles.isRegistered} onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? 'Регистрация' : 'Уже есть аккаунт?'}
        </p>
      </form>
    </div>
  );
};
