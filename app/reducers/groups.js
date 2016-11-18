const initialState = {
  groups: []
};

export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'FETCH_USERGROUPS_FULLFILLED':
      return {
        ...state,
        groups: action.payload.groups
      };
    break;
    default:
      return state;
  }
}
