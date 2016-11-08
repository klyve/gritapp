import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

// Dive width and height
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;


export default class social extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.navbar}></View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
});
AppRegistry.registerComponent('social', () => social);
