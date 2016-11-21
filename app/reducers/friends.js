const initialState = {

};

export default function friends(state = initialState, action = {}) {
  switch (action.type) {
    case 'SHOW_FRIENDS':
      return{
        ...action.payload
      }
    break;


    default:
      return state;
  }
}
