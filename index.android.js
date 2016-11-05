import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class social extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}></View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('social', () => social);
