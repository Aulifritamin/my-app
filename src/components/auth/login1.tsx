import React, { ReactEventHandler, useState } from 'react';
import styles from './LoginForm.module.scss';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../firebase/firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn: ReactEventHandler<HTMLElement> = (e) => {
    e.preventDefault()
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

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.title}>Login form</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignIn} type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
