import React, { useState, useEffect } from 'react';
import styles from "../style/sideBar.module.css";
import { IoHomeSharp } from "react-icons/io5";
import { MdFeed, MdLibraryBooks } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const SideBar = ({ children }) => {
  const [isTop, setIsTop] = useState(true);
  const [sideBar, setSideBar] = useState(false);

  const navigate = useNavigate();

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

  const viewContaier = () => {
    setSideBar(prevSideBar => !prevSideBar);
  };

  const feed = () => {
    navigate("/feed");
  }

  const home = () => {
    navigate("/");
  }

  return (
    <div className={styles.headerContainer}>
      <IoMenu className={styles.veiwIcon} onClick={viewContaier} />
      <div className={styles.container}>
        <div
          className={`${styles.title} ${!isTop ? styles.scrolled : ''}`}
        >
          Muzio
        </div>
        <div className={styles.subContainer}>
          <div className={styles.menuContainer}>
            <div className={styles.home} onClick={() => {home()}}>
              <IoHomeSharp className={styles.icon} />
              <div className={styles.menu}>홈</div>
            </div>
            <div className={styles.feed} onClick={() => {feed()}}>
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
      <div className={`${styles.HiddenContainer} ${sideBar ? styles.show : ''}`}>
        <div
          className={`${styles.title} ${!isTop ? styles.scrolled : ''}`}
        >
          Muzio
        </div>
        <div className={styles.subContainer}>
          <div className={styles.menuContainer}>
            <div className={styles.home} onClick={() => {home()}}>
              <IoHomeSharp className={styles.icon} />
              <div className={styles.menu}>홈</div>
            </div>
            <div className={styles.feed} onClick={() => {feed()}}>
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
