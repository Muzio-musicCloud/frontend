import axios from 'axios';

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

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