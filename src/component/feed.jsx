import styles from "../style/feed.module.css";
import { LiaCommentSolid } from "react-icons/lia";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Feed = () => {
  return(
    <>
      <div className={styles.feedContainer}>
        <div className={styles.feed1}>
          <div className={styles.feedTitleContainer}>
            <div className={styles.profile}></div>
            <div className={styles.titleContainer}>
              <div className={styles.title}>test</div>
              <div className={styles.subtitle}>테스트 중 서브 타이틀</div>
              <div className={styles.body}>본문 테스트 중 문 테스트 중 본문 테스트 중 본문 테스트 중<p></p><br></br>본문 테스트 중</div>
            </div>
          </div>
          <div className={styles.iconContainer}> <FaHeart /> <FaRegHeart /> <FaRegShareFromSquare /> <LiaCommentSolid /></div>
        </div>
      </div>
    </>
  )
}

export default Feed;