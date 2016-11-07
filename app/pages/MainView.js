import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import SwipeView from '../components/SwipeView';
import { connect } from 'react-redux';

import * as friendActions from '../actions/friends';



class MainView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    console.log("======")
    console.log(this.props)
    console.log("======")
    return (
      <SwipeView
        state={state}
        {...actions} />
    );
  }
}


export default connect(state => ({
    state
  }),
  (dispatch) => ({
    actions: bindActionCreators(friendActions, dispatch)
  })
)(MainView);
