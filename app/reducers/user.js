import {
  AsyncStorage,
} from 'react-native';
const initialState = {
  user: [],
  token: false,
};


async function storeToken(token) {
  try {
    await AsyncStorage.setItem("@accesstoken:key", token);
  }catch(error) {
    console.log(error);
  }
}
async function deleteToken() {
  try {
    await AsyncStorage.removeItem("@accesstoken:key");
  }catch(error) {
    console.log(error);
  }
}

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
      storeToken(action.payload.token);
      return {
        ...state,
        user: action.payload,
        token: action.payload.token
      };
    break;

    case 'USER_LOGOUT':
      deleteToken(action.payload.token);
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
