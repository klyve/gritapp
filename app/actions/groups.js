export function getUserGroups() {
  return function(dispatch) {
    dispatch({type: "FETCH_USERGROUPS_STARTED"})
    fetch('https://dd25c333.ngrok.io/api/groups')
      .then(request => request.json())
      .then(json => {
        dispatch({type: "FETCH_USERGROUPS_FULLFILLED", payload: json})
      })
  }
}
