import React, { useState } from 'react';
import styles from "../style/artist.module.css";
import { FaUserCheck } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { FaCommentAlt } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const Artist = () => {
  const [activeCategory, setActiveCategory] = useState('Tracks');
  const [view, setView] = useState(false);
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const viewContaier = () => {
    setView(prevView => !prevView);
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
            <div className={styles.songs}>
              <div className={styles.cover}></div>
              <div className={styles.contaienr}>
                <div className={styles.playContiner}>
                  <FaCirclePlay className={styles.playIcon}/>
                  <div className={styles.texts}>
                    <div className={styles.artist}>김성훈</div>
                    <div className={styles.title}>나는 코딩이 싫어</div>
                  </div>
                  <div className={styles.day}>2024.09.23</div>
                </div>
                <div className={styles.playBarContainer}>
                  <div className={styles.startTime}>0:00</div>
                    <div className={styles.playBar}>
                      <div className={styles.playTime}></div>
                    </div>
                    <div className={styles.endTime}>3:53</div>
                  </div>
                <div className={styles.commentsContainer}>
                  <div className={styles.commentsProfile}></div>
                  <input type='text' className={styles.commentsInput} placeholder='메세지를 입력하세요  '></input>
                  <div className={styles.sendButton}><FiSend className={styles.send}/></div>
                  <div className={styles.comments}><FaCommentAlt className={styles.commentsIcon} onClick={() => {viewContaier()}}/> 22</div>
                </div>
              </div>
            </div>
            {view && (
                <div className={styles.hiddenContainer}>
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              )}
              <div className={styles.songs}>
              <div className={styles.cover}></div>
              <div className={styles.contaienr}>
                <div className={styles.playContiner}>
                  <FaCirclePlay className={styles.playIcon}/>
                  <div className={styles.texts}>
                    <div className={styles.artist}>김성훈</div>
                    <div className={styles.title}>나는 코딩이 싫어</div>
                  </div>
                  <div className={styles.day}>2024.09.23</div>
                </div>
                <div className={styles.playBarContainer}>
                  <div className={styles.startTime}>0:00</div>
                    <div className={styles.playBar}>
                      <div className={styles.playTime}></div>
                    </div>
                    <div className={styles.endTime}>3:53</div>
                  </div>
                <div className={styles.commentsContainer}>
                  <div className={styles.commentsProfile}></div>
                  <input type='text' className={styles.commentsInput} placeholder='메세지를 입력하세요  '></input>
                  <div className={styles.sendButton}><FiSend className={styles.send}/></div>
                  <div className={styles.comments}><FaCommentAlt className={styles.commentsIcon} onClick={() => {viewContaier()}}/> 22</div>
                </div>
              </div>
            </div>
            
              <div className={styles.songs}>
              <div className={styles.cover}></div>
              <div className={styles.contaienr}>
                <div className={styles.playContiner}>
                  <FaCirclePlay className={styles.playIcon}/>
                  <div className={styles.texts}>
                    <div className={styles.artist}>김성훈</div>
                    <div className={styles.title}>나는 코딩이 싫어</div>
                  </div>
                  <div className={styles.day}>2024.09.23</div>
                </div>
                <div className={styles.playBarContainer}>
                  <div className={styles.startTime}>0:00</div>
                    <div className={styles.playBar}>
                      <div className={styles.playTime}></div>
                    </div>
                    <div className={styles.endTime}>3:53</div>
                  </div>
                <div className={styles.commentsContainer}>
                  <div className={styles.commentsProfile}></div>
                  <input type='text' className={styles.commentsInput} placeholder='메세지를 입력하세요  '></input>
                  <div className={styles.sendButton}><FiSend className={styles.send}/></div>
                  <div className={styles.comments}><FaCommentAlt className={styles.commentsIcon} onClick={() => {viewContaier()}}/> 22</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className={styles.ffContainer}>
          <div className={styles.allNumContainer}>
            <div className={styles.numContainer}>
              <div className={styles.FollowersContainer}>
                <div className={styles.Followers}>Followers</div>
                <div className={styles.FollowersNum}>4,689</div>
              </div>
              <div className={styles.FollowersContainer}>
                <div className={styles.Followers}>Following</div>
                <div className={styles.FollowersNum}>44</div>
              </div>
              <div className={styles.FollowersContainer}>
                <div className={styles.Followers}>Tracks</div>
                <div className={styles.FollowersNum}>22</div>
              </div>
            </div>
            <div className={styles.Introduction}>다시 태어나자</div>
            <div className={styles.FollowersNumberContainer}>
              <FaUserCheck className={styles.FollowersIcon}/>
              <div className={styles.FollowersNumber}>4,689 followers</div>
              <div className={styles.all}>모두보기</div>
            </div>
          </div>
          <div className={styles.followContainer}>
            <div className={styles.Vowels}>
              <div className={styles.FollowersProfile}>
                <div className={styles.FollowersprofileImg}></div>
              </div>
              <div className={styles.FollowersProfile}>
                <div className={styles.FollowersprofileImg}></div>
              </div>
              <div className={styles.FollowersProfile}>
                <div className={styles.FollowersprofileImg}></div>
              </div>
              <div className={styles.FollowersProfile}>
                <div className={styles.FollowersprofileImg}></div>
              </div>
              <div className={styles.FollowersProfile}>
                <div className={styles.FollowersprofileImg}></div>
              </div>
              <div className={styles.FollowersProfile}>
                <div className={styles.FollowersprofileImg}></div>
              </div>
              <div className={styles.FollowersProfile}>
                <div className={styles.FollowersprofileImg}></div>
              </div>
            </div>
            <div className={styles.FollowersNumberContainer}>
              <FaUserGroup className={styles.FollowersIcon}/>
              <div className={styles.FollowersNumber}>44 following</div>
              <div className={styles.all}>모두보기</div>
            </div>
          </div>
          <div className={styles.followingContainer}>
            <div className={styles.followingTextContainer}>
              <div className={styles.followingProfile}></div>
              <div className={styles.followTextContainer}>
                <div className={styles.followingName}>HLE</div>
                <div className={styles.followingFollowers}>
                  <FaUserGroup className={styles.FaUserGroup}/>
                  22
                </div>
              </div>
              <div className={styles.FollowButton}>Follow</div>
            </div>
            <div className={styles.followingTextContainer}>
              <div className={styles.followingProfile}></div>
              <div className={styles.followTextContainer}>
                <div className={styles.followingName}>HLE</div>
                <div className={styles.followingFollowers}>
                  <FaUserGroup className={styles.FaUserGroup}/>
                  22
                </div>
              </div>
              <div className={styles.FollowButton}>Follow</div>
            </div>
            <div className={styles.followingTextContainer}>
              <div className={styles.followingProfile}></div>
              <div className={styles.followTextContainer}>
                <div className={styles.followingName}>HLE</div>
                <div className={styles.followingFollowers}>
                  <FaUserGroup className={styles.FaUserGroup}/>
                  22
                </div>
              </div>
              <div className={styles.FollowButton}>Follow</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist;
