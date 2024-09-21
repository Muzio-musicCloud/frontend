import React, { useState } from 'react';
import styles from "../style/artist.module.css";
import { FaUserCheck } from "react-icons/fa";

const Artist = () => {
  const [activeCategory, setActiveCategory] = useState('Tracks');
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className={styles.artistContainer}>
      <div className={styles.profileContainer}> 
        <div className={styles.profileImg}>
          <div className={styles.photo}></div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.NameContainer}>
            <div className={styles.nickName}>분탕충</div>
            <div className={styles.follow}>Follow</div>
          </div>
          <div className={styles.iconContainer}>
              <FaUserCheck className={styles.userIcon}/>
              <div className={styles.followNum}>22</div>
          </div>
          <div className={styles.category}>
            <div
              className={`${styles.Tracks} ${activeCategory === 'Tracks' ? styles.active : ''}`}
              onClick={() => handleCategoryClick('Tracks')}
            >
              Tracks
            </div>
            <div
              className={`${styles.popularTracks} ${activeCategory === 'Popular Tracks' ? styles.active : ''}`}
              onClick={() => handleCategoryClick('Popular Tracks')}
            >
              Popular Tracks
            </div>
            <div
              className={`${styles.Playlists} ${activeCategory === 'Playlists' ? styles.active : ''}`}
              onClick={() => handleCategoryClick('Playlists')}
            >
              Playlists
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div>
          <div className={styles.trash}></div>
          <div className={styles.songsContainer}>

          </div>
        </div>
        <div className={styles.ffContainer}>
          <div className={styles.allNumContainer}></div>
          <div className={styles.followContainer}></div>
          <div className={styles.followingContainer}></div>
        </div>
      </div>
    </div>
  )
}

export default Artist;
