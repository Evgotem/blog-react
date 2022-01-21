import { TextField } from '@mui/material';
import React from 'react';
import styles from './CreatePost.module.scss';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const Input = styled('input')({
  display: 'none',
});

const ControlledUsage = () => {
  const [value, setValue] = React.useState("");

  const onChange = (value: string) => {
    setValue(value);
  };

  return <SimpleMDE value={value} onChange={onChange} />;
};

export const CreatePost = () => {
  return (
    <div>
      <input type='text' className={styles.mainTitle} placeholder='Введите заголовок...' />
      <TextField
        label='Короткое описание'
        name='description'
        fullWidth
        sx={{ marginBottom: '15px' }}
      />
      <div>
        <TextField
          label='Ссылка на изображение:'
          name='imageURL'
          fullWidth
          sx={{ marginBottom: '15px' }}
        />
        <label htmlFor='icon-button-file'>
          <Input accept='image/*' id='icon-button-file' type='file' />
          <IconButton color='primary' aria-label='upload picture' component='span'>
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
      <p>Полное описание</p>
      <ControlledUsage />
    </div>
  );
};
