import styles from "./Header.module.scss";
import UserMenu from "./UserMenu/UserMenu";


export const Header = () => (
  <div className={styles.header}>
    <p>my wallet</p>
    <UserMenu/>
  </div>
);
