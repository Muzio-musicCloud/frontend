import styles from "../style/header.module.css"
import { IoIosNotifications } from "react-icons/io";

const Header = ({children}) => {
  return(
    <>
      <div className={styles.HeaderContainer}>
        <div className={styles.title}>Muzio</div>
        <input type="text" className={styles.search}></input>
        <IoIosNotifications className={styles.notifications}/>
        <div className={styles.profile}></div>
      </div>
    </>
  )
}

export default Header;