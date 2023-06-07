import LogoutButton from "components/auth/logoutButton";
import styles from "./Sidebar.module.scss";

interface SidebarProps {}

export const Sidebar = ({}: SidebarProps) => (
  <div className={styles.sidebar}>
    <p>Header LOGO</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
    <LogoutButton/>
  </div>
);
