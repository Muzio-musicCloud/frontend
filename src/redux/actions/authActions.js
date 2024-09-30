import axios from 'axios';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const validateUsername = (username) => {
  return username.length >= 4 && username.length < 30;
};

const validateNickname = (nickname) => {
  return nickname.length <= 40; 
};

export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: SIGN_IN_REQUEST });

  try {
    const response = await axios.post('/api/signin', { email, password });
    
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILURE,
      error: error.message || '로그인 실패',
    });
  }
};

export const signUp = (username, password, confirmPassword, email, nickname) => async (dispatch) => {
  dispatch({ type: SIGN_UP_REQUEST });

  if (!validateNickname(nickname)) {
    return dispatch({
      type: SIGN_UP_FAILURE,
      error: '닉네임은 최대 40자까지 가능합니다.'
    });
  }

  if (password !== confirmPassword) {
    return dispatch({
      type: SIGN_UP_FAILURE,
      error: '비밀번호가 일치하지 않습니다.'
    });
  }

  if (!validateUsername(username)) {
    return dispatch({
      type: SIGN_UP_FAILURE,
      error: '아이디는 4자 이상 30자 미만이어야 합니다.'
    });
  }

  try {
    const response = await axios.post('/api/signup', { username, password, email, nickname });
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAILURE,
      error: error.response?.data?.message || '회원가입 실패',
    });
  }
};