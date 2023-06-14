import { firebaseAuth } from "../../../firebase/firebase";
import styles from './logoutButton.module.scss'

const LogoutButton = () => {
  const handleLogout = () => {
    firebaseAuth.signOut()
      .then(() => {
        console.log('Выход выполнен');
      })
      .catch((error) => {
        console.error('Ошибка выхода:', error);
      });
  };

  return (
    <button className={styles.button_logout} onClick={handleLogout}>
      Выйти
    </button>
  );
};

export default LogoutButton;