import { useEffect, useRef, useState } from 'react';
import styles from './UserMenu.module.scss';
import LogoutButton from './logoutButton';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<number | null>(null);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleMouseEnter = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  
    const handleMouseLeave = () => {
      timerRef.current = window.setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    };
  
    useEffect(() => {
      return () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      };
    }, []);

  return (
    <div className={styles.user_container} onClick={toggleMenu}>
      <div className={styles.user}></div>
      <div 
            ref={menuRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}className={`${styles.menu} ${isOpen ? `${styles.open}` : ''}`}>
        <ul>
          <li>Настройки</li>
          <li>Что-то еще</li>
          <LogoutButton/>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
