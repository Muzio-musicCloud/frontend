import styles from "../style/playBar.module.css";
import { FaMinus } from "react-icons/fa";
import { PiWaveform } from "react-icons/pi";
import { LiaRandomSolid } from "react-icons/lia";
import { FaBackward } from "react-icons/fa6";
import { FaForward } from "react-icons/fa6";
import { FaCirclePlay } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";

const PlayBar = () => {
  const [play, setPlay] = useState(true);

  const Hideplaybar = () => {
    setPlay(false);
  }

  const viewPlayer = () => {
    setPlay(true);
  }

  return(
    <>
    <CiCirclePlus className={styles.plus} onClick={() => {viewPlayer()}}/>
      {play && (
        <div className={styles.playContainer}>
        <div className={styles.playHeader}>
          <PiWaveform className={styles.wave}/>
          <div className={styles.playing}>노래를 기다리는 중...</div>
          <div className={styles.minus} onClick={() => {Hideplaybar()}}><FaMinus/></div>
        </div>
        <div className={styles.img}></div>
        <div className={styles.title}>아이스크림 마시따</div>
        <div className={styles.artist}>ice - cream</div>
        <div className={styles.playIconsContainer}>
          <LiaRandomSolid className={styles.playIcons}/>
          <FaBackward className={styles.playIcons}/>
          <FaCirclePlay className={styles.play}/>
          <FaForward className={styles.playIcons}/>
          <FiRepeat className={styles.playIcons}/>
        </div>
        <div className={styles.playBarContainer}>
          <div className={styles.startTime}>0:00</div>
          <div className={styles.playBar}>
            <div className={styles.playTime}></div>
          </div>
          <div className={styles.endTime}>0:00</div>
        </div>
        <div className={styles.bottomLine}></div>
        <div className={styles.nextPlay}>다음 재생</div>
        <div className={styles.none}>재생할 노래가 없습니다.</div>
      </div>
      )}
    </>
  )
}

export default PlayBar