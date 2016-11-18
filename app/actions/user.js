import hash from 'hash.js';
import { Actions } from 'react-native-router-flux';
import {
  AsyncStorage,
} from 'react-native';

export function registerUser(data) {
  return function(dispatch) {
    dispatch({type: "USER_REGISTER_START"})
    data.password = hash.sha256().update(data.password).digest('hex');
    console.log("REgister user:",data);
    fetch('https://dd25c333.ngrok.io/api/user', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data
      })
    })
    .then((data) => data.json())
    .then((json) => {
      if(json.status && json.status == 200) {
        dispatch({type: "USER_REGISTER_SUCCESS", payload: json})
        dispatch({type: "USER_CHANGED", payload: json})
      }else {
        console.log(json)
        dispatch({type: "USER_REGISTER_ERROR", payload: json})
      }
    })

  }
}

export function getToken() {
  return function(dispatch) {
    AsyncStorage.getItem("@accesstoken:key").then((token) => {
      dispatch({
        type: 'USER_CHANGED',
        payload: {
          token: ((token == null)?false:token),
        }
      })

    })
  }
}

export function logoutUser() {

  return function(dispatch) {
    AsyncStorage.removeItem("@accesstoken:key").then(() => {

      dispatch({
        type: 'USER_LOGOUT',
        payload: {
          token: false,
        }
      })
    })

  }
}


export function loginUser(username, pwd) {
  return function(dispatch) {
    dispatch({type: "USER_LOGIN_START"})
    console.log(username, pwd)
    let password = hash.sha256().update(pwd).digest('hex');
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
          dispatch({type: "USER_CHANGED", payload: json})
          // dispatch({
          //   type: 'PAGE_CHANGE',
          //   payload: {
          //     current: 'swipeview',
          //     props: {type: 'reset'}
          //   }
          // })
        })
      }else {
        dispatch({type: "USER_LOGIN_ERROR", payload: json})
      }
    })
  }
}
