// localStorageUtils.ts

export const storeUserInfo = (token) => {
    localStorage.setItem('accessToken', JSON.stringify(token));
  };
  
  
//   export const getUserInfo = () => {
//     const userInfo = localStorage.getItem('userInfo');
//     return userInfo ? JSON.parse(userInfo) : null;
//   };
  

export const getUserInfo = () => {
  if (typeof window !== 'undefined') {
    const userInfoString = localStorage.getItem('userInfo');
    console.log('userInfoString:', userInfoString); // Log the retrieved data before parsing
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    console.log('userInfo:', userInfo); // Log the parsed userInfo
    return userInfo;
  }
  return null;
};

  