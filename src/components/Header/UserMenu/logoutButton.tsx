import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../../firebase/firebase";
import styles from './logoutButton.module.scss'

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    firebaseAuth.signOut()
      .then(() => {
        console.log('Выход выполнен');
        navigate('/')
      })
      .catch((error) => {
        console.error('Ошибка выхода:', error);
      });
  };

  return (
    <button className={styles.button_logout} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;