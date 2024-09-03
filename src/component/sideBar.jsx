import styles from "../style/sideBar.module.css";

const SideBar = ({children}) => {
  return(
    <div className={styles.headerContainer}>
      <div className={styles.container}>
        <div className={styles.menuContainer}>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default SideBar;