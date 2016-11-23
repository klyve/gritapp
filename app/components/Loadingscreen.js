import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import * as Route from '../actions/route';
import * as User from '../actions/user';


class Loadingscreen extends Component {
  componentWillMount() {
    setTimeout(() => {
      this.props.dispatch(User.getToken())
    }, 100)
    //this.props.dispatch(Route.to("swipeview"));
  }

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

export default connect(state => ({
    state
  })
)(Loadingscreen);
