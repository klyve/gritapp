export function getUserGroups() {
  return function(dispatch) {
    dispatch({type: "FETCH_USERGROUPS_STARTED"})
    fetch('https://bbed6252.ngrok.io/groups')
      .then(request => request.json())
      .then(json => {
        dispatch({type: "FETCH_USERGROUPS_FULLFILLED", payload: json})
      })
  }
}
