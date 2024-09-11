import React, { useState, useEffect } from 'react';
import styles from "../style/header.module.css";
import { IoIosNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Header = ({ children }) => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`${styles.HeaderContainer} ${!isTop ? styles.scrolled : ''}`}>
        <div className={styles.inputContainer}>
          <input type="text" className={styles.search} />
        </div>
        <div className={styles.iconContainer}>
          <IoIosNotifications className={styles.notifications} />
          <div className={styles.profile}></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;