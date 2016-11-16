const initialState = {
  route: {
    current: 'loading'
  }
};

export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'PAGE_CHANGE':
      return {
        ...state,
        route: action.payload
      };
    break;
    default:
      return state;
  }
}
