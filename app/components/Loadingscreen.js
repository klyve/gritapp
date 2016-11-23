import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import * as Route from '../actions/route';
import * as User from '../actions/user';



export default class Loadingscreen extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ecc71',
      }}>
        <Image
        source={require('../../images/loading.gif')}
        style = {{height: 360, width: 360}}
        resizeMode={Image.resizeMode.contain}
        />
      </View>
    );
  }
};
