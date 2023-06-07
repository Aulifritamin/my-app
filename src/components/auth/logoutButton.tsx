import { firebaseAuth } from "../../firebase/firebase";

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
    <button onClick={handleLogout}>
      Выйти
    </button>
  );
};

export default LogoutButton;