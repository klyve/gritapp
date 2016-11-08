import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';

// Dive width and height
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class social extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.body}></View>

        <View style = {styles.navbar}>
          <TouchableHighlight
          style = {styles.buttonSkip}
          onPress={() => {}}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

            <Text style = {styles.navText}>Skip</Text>
          </TouchableHighlight>

          <TouchableHighlight
          style = {styles.buttonNext}
          onPress={() => {}}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

            <Text style = {styles.navText}>Next</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container : {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: '#3498db',
  },
  navbar: {
    marginTop: 20,
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
    backgroundColor: '#3498db',
    alignItems: 'center',
    flexDirection: 'row',
  },
  navText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  buttonNext: {
    marginLeft: 185,
  },
  buttonSkip: {
    marginLeft: 40,
  },
  body: {
    width: DEVICE_WIDTH / 1.2,
    height: DEVICE_HEIGHT / 1.3,
    backgroundColor: 'white',
    marginTop: DEVICE_HEIGHT / 12,
    marginLeft: 30,
  }
});

AppRegistry.registerComponent('social', () => social);
