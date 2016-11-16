import { Actions } from 'react-native-router-flux';

class Router {

  to(route, props = {}) {
    Actions[route](props);
  }

}

let Route = new Router();

export {
  Route
}
