import * as Route from './route';
import { Actions } from 'react-native-router-flux';
import { SERVER } from '../components/constants';

import { AsyncStorage } from 'react-native';

export function add(friend) {
  return function(dispatch) {

    AsyncStorage.getItem("@accesstoken:key").then((token) => {

      fetch(SERVER+'/user/addfriend', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          _id: friend._id
        })
      })
    })
  }
}

export function remove(friend) {
  return function(dispatch) {

    AsyncStorage.getItem("@accesstoken:key").then((token) => {

      fetch(SERVER+'/user/removefriend', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          _id: friend._id
        })
      })
    })
  }
}

export function showFriends(){
  return function(dispatch) {

    fetch(SERVER+'/user')
      .then(request => request.json())
      .then(json => {

        dispatch({type: "SHOW_FRIENDS", payload: json.friends})
    })
  }
}
