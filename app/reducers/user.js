const initialState = {
  user: []
};

export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'USER_LOGIN_START':
    console.log("User login start");
      return {
        ...state
      }
    break;
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload
      };
    break;
    default:
      return state;
  }
}
