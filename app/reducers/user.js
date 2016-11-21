import {
  AsyncStorage,
} from 'react-native';
const initialState = {
  user: [],
  groups: [],
  token: false,
  notifications: [],
  options: {
    pushNotifications: true,
    groupRequest: true,
    friendRequest: true
  }
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
    case 'USER_UPDATE':
      state.options[action.payload.type] = action.payload.value;
      console.log("USER CHANGE: ",state)
      let obj = {};
      //obj[actions.payload.type] = actions.payload.value;

      return {
        ...state,
      }
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
