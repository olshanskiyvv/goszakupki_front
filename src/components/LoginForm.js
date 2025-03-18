import '../css/LoginForm.css'

import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

import client from '../utils/client';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    client.post('user/sign/in', {email: email, password: password})
        .then(({data}) => {
          localStorage.setItem('user', JSON.stringify(data));
          setLoggedIn(true);
        })
        .catch((e) => {
          alert('Неверные учетные данные');
          console.log(e);
        })
  };
  if (isLoggedIn) {
    return <Navigate to = '/docpages' replace />
  }
  return (
    <>
      {isLoggedIn ? (
        <h1>Вы вошли в систему!</h1>
      ) : (
        <div class="login">
          <div class="box">
            <h1 className="header">ГосЗакупки РФ</h1>
          <div class='cont'>
          <h2 class='auth'>АВТОРИЗАЦИЯ</h2>
          <div class="input-container">
              <input type="text" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Почта</label>
            </div>
            <div class='input-container'>
            <input type='password' placeholder='' value={password} onChange={(e) => setPassword(e.target.value)} />
            <label>Пароль</label>
            </div>
            <button class="button-30" onClick={handleLogin}>Войти</button>
            <a href='/sing-up'><button class='button-48'>У вас нет аккаунта?</button></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
