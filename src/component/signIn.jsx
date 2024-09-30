import styles from "../style/signIn.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/actions/authActions';
import { signUp } from '../redux/actions/authActions';
import { useState, useEffet } from "react";

const SignIn = () => {
  const [signIn1, setSignIn1] = useState(true);
  const [signUp1, setSignUp1] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [signPassword, setSignPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signEmail, setSignEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector((state) => state.auth);

  const handleSignIn = () => {
    dispatch(signIn(email, password));
  };

  const handleSignUp = () => {
    dispatch(signUp(username, signPassword, confirmPassword, signEmail, nickname));
  };

  const register = () => {
    setSignIn1(false);
    setSignUp1(true)
  }

  return(
    <>
      {signIn1 && (
        <div className={styles.signInContainer}>
        <div className={styles.logInText}>로그인</div>
        <div className={styles.inputContainer}>
          <div className={styles.inputText}>아이디</div>
          <input type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input}>
          </input>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputText}>비밀번호</div>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}>
          </input>
        </div>
        <div>
        <div className={styles.checkContainer}>
          <input type="checkbox" className={styles.checkbox}></input>
          <div className={styles.StayLoggedIn}>로그인 유지</div>
          <div className={styles.registerStart} onClick={() => {register()}}>계정이 없다면?</div>
        </div>
        </div>
        <div className={styles.buttonContiner}>
          <button onClick={handleSignIn} disabled={loading} className={styles.submit}>
          {loading ? '로그인 중...' : '로그인'}
        </button>
        {isAuthenticated && <p>로그인되었습니다.</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className={styles.sns}>소셜 로그인</div>
        </div>
      </div>
      )}
      {signUp1 && (
        <div className={styles.SignUpContainer}>
            <div className={styles.signUpText}>회원가입</div>
            <div className={styles.inputContainer}>
              <div className={styles.inputText}>닉네임</div>
              <input type="text"
                placeholder="용감한 물개86"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className={styles.input}>
              </input>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.inputText}>아이디</div>
              <input type="text"
                placeholder="최소 3자에서 최대 30자"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}>
              </input>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.inputText}>비밀번호</div>
              <input type="password"
                placeholder="8자리 이상 입력해주세요"
                value={signPassword}
                onChange={(e) => setSignPassword(e.target.value)}
                className={styles.input}>
              </input>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.inputText}>비밀번호 확인</div>
              <input type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}>
              </input>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.inputText}>이메일</div>
              <input type="text"
                placeholder="example@xxxx.com"
                value={signEmail}
                onChange={(e) => setSignEmail(e.target.value)} 
                className={styles.input}>
              </input>
            </div>
            <div className={styles.buttonContiner}>
            <button onClick={handleSignUp} disabled={loading} className={styles.submit}>
              {loading ? '회원가입 중...' : '회원가입'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {isAuthenticated && <p>회원가입이 완료되었습니다!</p>}
            </div>
        </div>
      )}
    </>
  )
}

export default SignIn;