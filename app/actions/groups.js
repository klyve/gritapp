export function getUserGroups() {
  return function(dispatch) {
    dispatch({type: "FETCH_USERGROUPS_STARTED"})
    setTimeout(() => {
      dispatch({type: "FETCH_USERGROUPS_FULLFILLED", payload: [1,2,3]})
    }, 1000)
  }
}
