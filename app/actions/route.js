import { Actions } from 'react-native-router-flux';

export function to(route, props = {}) {
  console.log("Route to ", route);
  return function(dispatch) {

    dispatch({
      type: 'PAGE_CHANGE',
      payload: {
        current: route,
        props
      }
    })

  }
}

export function ifSignedIn() {
  console.log("Route if signed in");
  return function(dispatch) {
    dispatch({
      type: 'PAGE_CHANGE',
      payload: {
        current: 'SwipeView',
        props: {},
      }
    })
  }
}
