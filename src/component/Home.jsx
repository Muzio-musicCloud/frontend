import styles from "../style/home.module.css";

const Home = () => {
  return(
    <div>
        <div className={styles.popularTrackContainer}>
          <div className={styles.texts}>
            <div className={styles.popularTrack}>최근 인기곡</div>
            <div className={styles.all}>모두보기</div>
          </div>
          <div className={styles.borderContainer}>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>좋은 하루 보내세용</div>
                <div className={styles.artist}>가수</div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>누구세요</div>
                <div className={styles.artist}>그러게요</div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>ㅏㅡㅑ</div>
                <div className={styles.artist}>승상싱</div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>이궈궈던</div>
                <div className={styles.artist}>세글자</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.popularArtistContainer}>
          <div className={styles.texts}>
            <div className={styles.popularTrack}>인기있는 아티스트</div>
          </div>
          <div className={styles.borderContainer}>
            <div className={styles.profileContainer}>
              <div className={styles.profile}></div>
              <div className={styles.name}>샤라웃</div>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profile}></div>
              <div className={styles.name}>샤라웃</div>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profile}></div>
              <div className={styles.name}>샤라웃</div>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profile}></div>
              <div className={styles.name}>샤라웃</div>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profile}></div>
              <div className={styles.name}>샤라웃</div>
            </div>
            <div className={styles.profileContainer}>
              <div className={styles.profile}></div>
              <div className={styles.name}>샤라웃</div>
            </div>
          </div>
        </div>

        <div className={styles.replay}>
          <div className={styles.texts}>
            <div className={styles.popularTrack}>다시 듣기</div>
            <div className={styles.all}>모두보기</div>
          </div>
          <div className={styles.borderContainer}>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>좋은 하루 보내세용</div>
                <div className={styles.artist}>가수</div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>누구세요</div>
                <div className={styles.artist}>그러게요</div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>ㅏㅡㅑ</div>
                <div className={styles.artist}>승상싱</div>
              </div>
            </div>
            <div className={styles.border}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>이궈궈던</div>
                <div className={styles.artist}>세글자</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Home;