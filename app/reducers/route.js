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
      let route = action.payload.current;
      //Actions.swipeview();
      console.log(route);
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
