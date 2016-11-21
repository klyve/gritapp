import * as Route from './route';
import { Actions } from 'react-native-router-flux';
import { SERVER } from '../components/constants';


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
    fetch(SERVER+'/groups/find', {
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
      dispatch({type: "GROUP_FIND", payload: json})
    })
  }
}
