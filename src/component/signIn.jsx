import styles from "../style/signIn.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/actions/authActions';
import { useState, useEffet } from "react";

const SignIn = () => {
  const [signIn1, setSignIn1] = useState(true);
  const [signUp, setSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { loading, isAuthenticated, error } = useSelector((state) => state.auth);

  const handleSignIn = () => {
    dispatch(signIn(email, password));
  };

  return(
    <>
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
          <div className={styles.registerStart}>계정이 없다면?</div>
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
    </>
  )
}

export default SignIn;