import hash from 'hash.js';
import { Actions } from 'react-native-router-flux';
import React from 'react';
import { SERVER } from '../components/constants';
import {
  AsyncStorage,
  NativeModules,
  ReadImageData
} from 'react-native';

export function registerUser(data) {
  return function(dispatch) {
    dispatch({type: "USER_REGISTER_START"})
    data.password = hash.sha256().update(data.password).digest('hex');
    console.log("REgister user:",data);
    fetch(SERVER+'/user', {

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
        AsyncStorage.setItem("@accesstoken:key", json.token).then(() => {
          dispatch({type: "USER_CHANGED", payload: json})
        })
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
    fetch(SERVER+'/user/auth', {
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

        })
      }else {
        dispatch({type: "USER_LOGIN_ERROR", payload: json})
      }
    })
  }
}

export function getUserData() {
  return function(dispatch) {
    dispatch({type: "USER_DATA_GETSTART"})

    AsyncStorage.getItem("@accesstoken:key").then((token) => {

    fetch(SERVER+'/user/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      })
    })
    .then((data) => data.json())
    .then((json) => {
      if (json.groups.length > 0){
        dispatch({type: "FETCH_USERGROUPS_FULLFILLED", payload: json.groups})
      }
      dispatch({type: "USER_DATA_CHANGED", payload: json})
    })
    .catch(err => {
      AsyncStorage.removeItem("@accesstoken:key").then(() => {

        dispatch({
          type: 'USER_LOGOUT',
          payload: {
            token: false,
          }
        })
      })
    })
    })
  }
}

export function hideNotification(notification) {
  return function(dispatch) {

    fetch(SERVER+'/user/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        _id: notification._id
      })
    })
    .then((data) => data.json())
    .then((json) => {

    })
  }
}

export function uploadPicture(file) {
  return function(dispatch) {

    AsyncStorage.getItem("@accesstoken:key").then((token) => {
    // let data = new FormData()
    // data.append('image', {uri: fileURL, name: 'image.jpg', type: 'file'})
    // data.append('token', token)
    // console.log(data);

    fetch(SERVER+'/user/picture', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        imageData: image,
      }),

    })
    .then((data) => data.json())
    .then((json) => {
      if (json.groups.length > 0){
        dispatch({type: "UPLOAD_PICTURE_FULLFILLED", payload: json.groups})
      }
      dispatch({type: "USER_DATA_CHANGED", payload: json})
    })
    .catch(err => {
      console.log(err);
    })
    })
  }
}

export function updateUserSettings(data) {
  return function (dispatch) {
    dispatch({type: "USER_UPDATE", payload: data})
    AsyncStorage.getItem("@accesstoken:key").then((token) => {
      fetch(SERVER+'/user/update', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          data
        })
      })
      .then((data) => data.json())
      .then((json) => {
        dispatch({type: "USER_UPDATE", payload: data})
      })
    })
  }
}

export function findUser(search) {
  return function (dispatch) {
    fetch(SERVER+'/user/find', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        search,
      })
    })
    .then((data) => data.json())
    .then((json) => {
      dispatch({type: "USER_FIND", payload: json})
    })
  }
}

export function getNotifications() {
  return function(dispatch) {
    dispatch({type: "USER_GET_NOTIFICATIONS_START"})
      AsyncStorage.getItem("@accesstoken:key").then((token) => {

      fetch(SERVER+'/user/notifications', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        })
      })
      .then((data) => data.json())
      .then((json) => {
        dispatch({type: "USER_NOTIFICATIONS_CHANGED", payload: json})
      })
    })
  }

}
