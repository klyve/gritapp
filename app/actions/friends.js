export function addFriend(friend) {
  return function(dispatch) {

    fetch('https://dd25c333.ngrok.io/api/user/addFriend', {

      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: friend._id
      })
    })
  };
}

export function removeFriend(friend) {
  return {
    return function(dispatch) {

      fetch('https://dd25c333.ngrok.io/api/user/removeFriend', {

        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: friend._id
        })
      })
    };
  };
}

export function showFriends(){
  return function(dispatch) {

    fetch('https://dd25c333.ngrok.io/api/user')
      .then(request => request.json())
      .then(json => {

        dispatch({type: "SHOW_FRIENDS", payload: json.friends})
    }
  }
}
