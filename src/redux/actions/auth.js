export const setUserData = data => ({
  type: 'SET_USER_DATA',
  payload: {
    "fullName": data.fullName,
    "email": data.email,
    "password": data.password,
  }
})