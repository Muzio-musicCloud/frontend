//더미 코드

// 사용자 정보를 로컬 스토리지에 저장
export const saveUserToLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

// 로컬 스토리지에서 사용자 정보 가져오기
export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// 로컬 스토리지에서 사용자 정보 삭제
export const removeUserFromLocal = () => {
  localStorage.removeItem('user');
};

// 로그인 함수 (API 호출을 가정)
export const login = async (credentials) => {
  try {
      const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
      });

      if (!response.ok) {
          throw new Error('로그인 실패');
      }

      const userData = await response.json();
      saveUserToLocal(userData);
      return userData;
  } catch (error) {
      throw new Error(error.message);
  }
};

// 로그아웃 함수
export const logout = () => {
  removeUserFromLocal();
};