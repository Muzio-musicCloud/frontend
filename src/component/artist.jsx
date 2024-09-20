import styles from "../style/artist.module.css";
import { FaUserCheck } from "react-icons/fa";

const Artist = () => {
  return(
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
            <div className={styles.Tracks}>Tracks</div>
            <div className={styles.popularTracks}>Popular Tracks</div>
            <div className={styles.Playlists}>Playlists</div>
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}></div>
    </div>
  )
}

export default Artist;