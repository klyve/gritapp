let whitelist = [
  'loginview',
  'signup',
]
export function redirectAuth({ dispatch, getState }) {
  return (next) => (action) => {
    //console.log('AUTH: will dispatch', action, getState())
    let state = getState();
    let token = state.user.token;
    let current = state.route.route.current;

    if(action.type == "REQUIRE_AUTH") {
      if(whitelist.indexOf(current) < 0 && !token) {
        dispatch({
          type: 'PAGE_CHANGE',
          payload: {
            current: 'loginview',
            props: {type: 'reset'}
          }
        });
      }
    }
    if(action.type == "PAGE_CHANGE") {
      if(whitelist.indexOf(action.payload.current) < 0 && !token) {
        action.payload.current = "loginview";
      }
    }
    if(action.type == "USER_LOGIN_SUCCESS" || action.type == "PAGE_CHANGE_LOGGEDIN" || action.type == "USER_CHANGED") {
      console.log(action.payload.current, current, token);
      if(current == "loading" && token) {
        dispatch({
          type: 'PAGE_CHANGE',
          payload: {
            current: 'swipeview',
            props: {type: 'reset'}
          }
        })
      }else if(whitelist.indexOf(action.payload.current) >= 0 && token) {
        action.payload.current = "swipeview";
      }else if(whitelist.indexOf(current) >= 0 && token) {
        dispatch({
          type: 'PAGE_CHANGE',
          payload: {
            current: 'swipeview',
            props: {type: 'reset'}
          }
        })
      }
    }
    if(action.type == "USER_LOGOUT") {
      dispatch({
        type: 'PAGE_CHANGE',
        payload: {
          current: 'loginview',
          props: {type: 'reset'}
        }
      });
    }

    return next(action)
  }
}
