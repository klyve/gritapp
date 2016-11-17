import React, { Component } from 'react';
import {View } from 'react-native';
import { connect } from 'react-redux';
import * as Route from '../actions/route';
import * as User from '../actions/user';


class Loadingscreen extends Component {
  componentWillMount() {
    this.props.dispatch(User.getToken());
    //this.props.dispatch(Route.to("swipeview"));
  }
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

export default connect(state => ({
    state
  })
)(Loadingscreen);
