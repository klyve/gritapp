import {
  AsyncStorage,
} from 'react-native';
const initialState = {
  user: [],
  token: false,
  notifications: [],
};




export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case 'USER_CHANGED':
      return {
        ...state,
        ...action.payload
      }
    case 'USER_FIND':
      return {
        ...state,
        ...action.payload
      }
    break;
    case 'USER_DATA_CHANGED':
      return {
        ...state,
        ...action.payload
      }
    break;
    case 'USER_NOTIFICATIONS_CHANGED':
      return {
        ...state,
        notifications: action.payload.notifications
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
