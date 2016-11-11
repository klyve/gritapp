// Social app for assignment 3

// Development prop
console.disableYellowBox = true;

import React, { Component } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './reducers';
import MainView from './pages/MainView'

// Create store with middleware function with thunk
const createStoreWithMiddleware = applyMiddleware(thunk, logger())(createStore);
const reducer = combineReducers(reducers); // Register all reducers
const store = createStoreWithMiddleware(reducer); // Create the store middleware


export default class Main extends Component {

  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}
