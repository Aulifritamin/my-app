import React, { ReactEventHandler, useState } from 'react';
import styles from './RegistrationForm.module.scss';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { firebaseAuth } from '../../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp: ReactEventHandler<HTMLElement> = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential: { user: any; }) => {
        // Успешная регистрация
        const user = userCredential.user;
        console.log('Регистрация выполнена:', user);
  
        updateProfile(user, { displayName: name.toUpperCase() })
        navigate('/dashboard')
      })
      .catch((error: any) => {
        // Обработка ошибки
        console.error('Ошибка регистрации:', error);
      });
  };

  return (
    <div className={styles.registrationForm}>
      <h2 className={styles.title}>Registration new user</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Full name
          </label>
          <input
            type="text"
            id="username"
            className={styles.input}
            value={name}
            placeholder='Alex Meldvov'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.input}
            value={email}
            placeholder='envkt@example.com'
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
        <button onClick={handleSignUp} type="submit" className={styles.button}>
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
