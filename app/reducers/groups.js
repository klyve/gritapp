const initialState = {
  groups: []
};

export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_USERGROUPS_FULLFILLED':
      console.log("Fetched usergorups")
      return {
        ...state,
        groups: action.payload
      };
    break;
    default:
      return state;
  }
}
