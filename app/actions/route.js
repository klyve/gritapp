import { Actions } from 'react-native-router-flux';
import {
  AsyncStorage,
} from 'react-native';

async function getToken() {
  try {
    let token = await AsyncStorage.getItem("@accesstoken:key")
    if (token == null){
      return false;
    }else {
      return token;
    }

  }catch(error) {
    return false;
  }
}


export function to(route, props = {}) {
  console.log("Route to ", route);
  return function(dispatch) {

    if(typeof Actions[route] == 'function') {
      
      Actions[route](props);
    }else {
      console.log("Not a function: ", route);
    }
    dispatch({
      type: 'PAGE_CHANGE',
      payload: {
        current: route,
        props
      }
    })

  }
}
export function signedIn() {
  return function(dispatch) {
    dispatch({
      type: 'REQUIRE_AUTH'
    })
  }
}
export function ifSignedIn() {
  return function(dispatch) {

      AsyncStorage.getItem("@accesstoken:key").then((token) => {
        console.log("DISPATCHED: ", token);
        if(token != null) {
          // dispatch({
          //   type: 'USER_CHANGED',
          //   payload:{
          //     token,
          //   }
          // })
          dispatch({
            type: 'PAGE_CHANGE_LOGGEDIN',
            payload: {
              current: 'SwipeView',
              props: {},
            }
          })

        }

      })

  }
}
