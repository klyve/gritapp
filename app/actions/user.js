import hash from 'hash.js';
import { Actions } from 'react-native-router-flux';
import {
  AsyncStorage,
} from 'react-native';

export function registerUser(data) {
  return function(dispatch) {
    dispatch({type: "USER_REGISTER_START"})
    data.password = hash.sha256().update(data.password).digest('hex');
    fetch('https://dd25c333.ngrok.io/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data
      })
    })
    .then((data) => data.json())
    .then((json) => {
      if(json.status && json.status == 200) {
        dispatch({type: "USER_REGISTER_SUCCESS", payload: json})
      }else {
        dispatch({type: "USER_REGISTER_ERROR", payload: json})
      }
    })

  }
}
export function logoutUser() {

  return function(dispatch) {
    AsyncStorage.removeItem("@accesstoken:key").then(() => {
      console.log("Removed token");
      dispatch({
        type: 'USER_LOGOUT',
        payload: {
          token: false,
        }
      })
    })

  }
}


export function loginUser(username, password) {

  return function(dispatch) {
    dispatch({type: "USER_LOGIN_START"})
    let password = hash.sha256().update(password).digest('hex');
    fetch('https://dd25c333.ngrok.io/api/user/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then((data) => data.json())
    .then((json) => {
      if(json.status && json.status == 200) {
        AsyncStorage.setItem("@accesstoken:key", json.token).then(() => {
          dispatch({type: "USER_LOGIN_SUCCESS", payload: json})
        })
      }else {
        dispatch({type: "USER_LOGIN_ERROR", payload: json})
      }
    })
  }
}
