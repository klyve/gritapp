import { Actions } from 'react-native-router-flux';

const initialState = {
  route: {
    current: 'loading',
    props: {},
  }
};

export default function groups(state = initialState, action = {}) {
  switch (action.type) {
    case 'PAGE_CHANGE':
      console.log(action.payload.current)
      let route = action.payload.current;
      if(typeof Actions[route] == 'function') {
        Actions[route](action.payload.props);
      }else {
        console.log("Not a function");
      }
      return {
        ...state,
        current: action.payload.current,
        props: action.payload.props
      };
    break;
    default:
      return state;
  }
}
