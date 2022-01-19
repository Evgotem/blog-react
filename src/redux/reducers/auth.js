const initialState = {
  "fullName": null,
  "email": null,
  "password": null,
  "isFetching": false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data
      }
    
    default:
      return state;
  }
}