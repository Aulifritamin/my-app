import { useState } from 'react';
import { createUserWithEmailAndPassword, firebaseAuth, signInWithEmailAndPassword, updateProfile } from '../../firebase/firebase';
import  styles  from './login.module.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignIn = () => {
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential: { user: any; }) => {
        // Успешный вход
        const user = userCredential.user;
        console.log('Вход выполнен:', user);
      })
      .catch((error: any) => {
        // Обработка ошибки
        console.error('Ошибка входа:', error);
      });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential: { user: any; }) => {
        // Успешная регистрация
        const user = userCredential.user;
        console.log('Регистрация выполнена:', user);
  
        updateProfile(user, { displayName: name.toUpperCase() })
      })
      .catch((error: any) => {
        // Обработка ошибки
        console.error('Ошибка регистрации:', error);
      });
  };
  
  
  
  
  
  

  return (
    <div className={styles.login_form}>
      <h2>Авторизация</h2>
      <div>
        <input type="text" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignIn}>Войти</button>
        <button onClick={handleSignUp}>Зарегистрироваться</button>
      </div>
    </div>
  );
};

export default Login;