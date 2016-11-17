import {
  AsyncStorage,
} from 'react-native';
const initialState = {
  user: [],
  token: false,
};




export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'USER_CHANGED':
      return {
        ...state,
        ...action.payload
      }
    break;
    case 'USER_LOGIN_START':
      return {
        ...state
      }
    break;
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        token: action.payload.token
      };
    break;

    case 'USER_LOGOUT':
      return {
        ...state,
        user: [],
        token: false
      };
    break;
    default:
      return state;
  }
}
