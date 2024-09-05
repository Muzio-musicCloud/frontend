import React, { useState, useEffect } from 'react';
import styles from "../style/sideBar.module.css";
import { IoHomeSharp } from "react-icons/io5";
import { MdFeed, MdLibraryBooks } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";

const SideBar = ({ children }) => {
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
    <div className={styles.headerContainer}>
      <div className={styles.container}>
        <div
          className={`${styles.title} ${!isTop ? styles.scrolled : ''}`}
        >
          Muzio
        </div>
        <div className={styles.subContaienr}>
          <div className={styles.menuContainer}>
            <div className={styles.home}>
              <IoHomeSharp className={styles.icon} />
              <div className={styles.menu}>홈</div>
            </div>
            <div className={styles.feed}>
              <MdFeed className={styles.icon} />
              <div className={styles.menu}>피드</div>
            </div>
            <div className={styles.Library}>
              <MdLibraryBooks className={styles.icon} />
              <div className={styles.menu}>라이브러리</div>
            </div>
            <div className={styles.song}>
              <IoMusicalNotes className={styles.icon} />
              <div className={styles.menu}>노래</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.menuContainer}></div>
      </div>
      {children}
    </div>
  );
};

export default SideBar;