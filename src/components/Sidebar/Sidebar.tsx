import LogoutButton from "components/Header/UserMenu/logoutButton";
import styles from "./Sidebar.module.scss";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => (
  <div className={styles.sidebar}>
    <p>Header LOGO</p>
    <ul>
      <li>Dashboard</li>
      <li>Registestation</li>
      <li>Login</li>
      <li>setting</li>
    </ul>
    <LogoutButton/>
  </div>
);
