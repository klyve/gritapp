import { Route } from '../actions/Router';

export function redirectAuth({ getState }) {
  return (next) => (action) => {
    //console.log('AUTH: will dispatch', action, getState())

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)
    
    //console.log('AUTH: state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}
