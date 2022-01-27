import { Button, TextField } from '@mui/material';
import React from 'react';
import styles from './CreatePost.module.scss';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Input = styled('input')({
  display: 'none',
});

const ControlledUsage = () => {
  const [value, setValue] = React.useState("");

  const onChange = (value) => {
    setValue(value);
  };

  return <SimpleMDE value={value} onChange={onChange} />;
};


export const CreatePost = () => {
  const [articleData, setArticleData] = React.useState({
    title: '',
    text: ''
  })
  console.log(articleData);
  
  const navigate = useNavigate();
  const goLogin = () => navigate('/login');

  try {
    axios.post('http://localhost:5656/posts',
    {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })
  } catch {
    goLogin();
  }
 
  return (
    <div className={styles.wrapper}>
      <input 
        type='text' 
        className={styles.mainTitle}
        placeholder='Введите заголовок...' 
        value={articleData.title}
        onChange={(e) => setArticleData({...articleData, title: e.target.value})}
      />
      <TextField
        label='Короткое описание'
        name='description'
        fullWidth
        sx={{ marginBottom: '15px' }}
      />
      <div className={styles.loadWrapper}>
        <TextField
          label='Ссылка на изображение:'

          fullWidth
        />
        <label title='Загрузить изображение' htmlFor='icon-button-file'>
          <Input accept='image/*' id='icon-button-file' type='file' />
          <IconButton color='primary' aria-label='upload picture' component='span'>
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
      <p style={{marginTop: '30px'}}>Полное описание</p>
      <ControlledUsage
        value={articleData.text}
        onChange={(e) => setArticleData({...articleData, text: e.target.value})}
      />
      <Button color='primary' variant='contained'>Опубликовать</Button>
    </div>
  );
};
