const initialState = {
  count: 0
};

export default function friends(state = initialState, action = {}) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        count: state.count + 1
      };
    break;

    case 'REMOVE_FRIEND':
      return {
        ...state,
        count: state.count - 1
      };
    break;

    case 'SHOW_FRIENDS':
      return{
        ...action.payload
      }
    break;


    default:
      return state;
  }
}
