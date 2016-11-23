import * as Route from './route';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import { SERVER } from '../components/constants';


export function leaveGroup(data) {
  return function(dispatch) {
    AsyncStorage.getItem("@accesstoken:key").then((token) => {

      fetch(SERVER+'/groups/leave', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          token
        })
      })
      .then(data => data.json())
      .then(json => {
        console.log(json);
      })

    })
  }
}
export function uploadChallengePicture(groupid, file) {
  return function(dispatch) {

    AsyncStorage.getItem("@accesstoken:key").then((token) => {


    fetch(SERVER+'/groups/challengepicture', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        groupid: id,
        token,
        imageData: image,
      }),

    })
    .then((data) => data.json())
    .then((json) => {
      console.log("REQUEST FULLFILLED");
      if (json.groups.length > 0){
        //dispatch({type: "UPLOAD_PICTURE_FULLFILLED", payload: json.groups})
      }
      //dispatch({type: "USER_DATA_CHANGED", payload: json})
    })
    .catch(err => {
      console.log(err);
    })
    })
  }
}

export function createChallenge(data) {
  return function(dispatch) {
    dispatch({type: "CREATE_GROUP_CHALLENGE_STARTED"})

    AsyncStorage.getItem("@accesstoken:key").then((token) => {
      fetch(SERVER+'/groups/challenge', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          token
        })
      })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch({type: "CHALLENGE_CREATED", payload: json})
      })
    })
  }
}

export function getUserGroups() {
  return function(dispatch) {
    dispatch({type: "FETCH_USERGROUPS_STARTED"})

    fetch(SERVER+'/groups')
      .then(request => request.json())
      .then(json => {

        dispatch({type: "FETCH_USERGROUPS_FULLFILLED", payload: json})
      })
      .catch((error) => console.warn("fetch error:", error))
  }
}

export function createGroup(data) {
  return function(dispatch) {
    dispatch({type: "CREATE_GROUP_START"})
    console.log("Creating group")
    fetch(SERVER+'/groups', {

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
        dispatch(Route.to("groupdashboard", json.group));
        dispatch({type: "CREATE_GROUP_SUCCESS", payload: json})
      }else {
        dispatch({type: "USER_REGISTER_ERROR", payload: json})
      }
    })

  }
}

export function findGroup(search) {
  return function (dispatch) {
    fetch(SERVER+'/groups/search', {
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
      console.log(json)
      dispatch({type: "GROUP_FIND", payload: json})
    })
  }
}

export function joinGroup(group) {
  return function(dispatch) {

    AsyncStorage.getItem("@accesstoken:key").then((token) => {

    fetch(SERVER+'/groups/join', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
        _id: group._id
      })
    })
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
      dispatch({type: "JOIN_GROUP", payload: json})
    })
    })
  }
}

export function getGroupData(group) {
  return function (dispatch) {
    fetch(SERVER+'/groups/getData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: group._id
      })
    })
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
      dispatch({type: "GROUP_DATA_CHANGED", payload: json})
    })
  }
}
