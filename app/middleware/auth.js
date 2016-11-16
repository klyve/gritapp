let whitelist = [
  'loginview',
  'signup'
]
export function redirectAuth({ getState }) {
  return (next) => (action) => {
    //console.log('AUTH: will dispatch', action, getState())
    let state = getState();
    console.log(state);
    if(action.type == "PAGE_CHANGE") {
      if(whitelist.indexOf(action.payload.current) < 0) {
        action.payload.current = "loginview";
      }
    }

    return next(action)
  }
}
