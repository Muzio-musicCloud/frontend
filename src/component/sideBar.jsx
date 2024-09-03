import styles from "../style/sideBar.module.css";
import { IoHomeSharp } from "react-icons/io5";
import { MdFeed } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";

const SideBar = ({children}) => {
  return(
    <div className={styles.headerContainer}>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <div className={styles.home}>
            <IoHomeSharp className={styles.icon}/>
            <div className={styles.menu}>홈</div>
          </div>
          <div className={styles.feed}>
            <MdFeed className={styles.icon}/>
            <div className={styles.menu}>피드</div>
          </div>
          <div className={styles.Library}>
            <MdLibraryBooks className={styles.icon}/>
            <div className={styles.menu}>라이브러리</div>
          </div>
          <div className={styles.song}>
            <IoMusicalNotes className={styles.icon}/> 
            <div className={styles.menu}>노래</div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default SideBar;