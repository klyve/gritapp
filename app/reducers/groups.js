const initialState = {
  groups: [],
  loading: true
};

export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_USERGROUPS_FULLFILLED':
      let loading = false;
      if(state.groups.length == 0 &&
        action.payload.groups.length == 0
      ) {
        loading = true
      }

      return {
        ...state,
        groups: action.payload.groups,
        loading,
      };
    break;
    default:
      return state;
  }
}
