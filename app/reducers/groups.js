const initialState = {
  groups: [],
  searchResults : [],
  loading: false,
  message: false,
  initialFetch: false,
};

export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_USERGROUPS_STARTED':

      if(!(state.groups.length > 0) && !state.initialFetch) {
        state.loading = true
      }

      return {
        ...state,
      }
    break;

    case 'FETCH_USERGROUPS_FULLFILLED':
      state.loading = false;
      state.message = false;

      if (!state.initialFetch)
        state.initialFetch = true;

      if (!(state.groups.length > 0) && !(action.payload.groups.length > 0))
        state.message = 'No groups to show 😶 \n Want to join one? Swipe left ➡️'

      return {
        ...state,
        groups: action.payload.groups,
      };
    break;

    case 'GROUP_FIND':
      return {
        ...state,
        ...action.payload,
      }
    break;

    case 'JOIN_GROUP':
      return {
        ...state,
      }
    break;

    default:
      return state;
  }
}
