import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Dimensions,
} from 'react-native';


//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class social extends Component {
  render() {
    return (
      <View style = {styles.container}>

        <View style = {styles.navbar}></View>

        <View style = {styles.body}>
          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}
          style = {styles.button}
          >
              <Text style = {styles.buttonText}>Private Group</Text>
          </TouchableHighlight>

          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}
          style = {styles.button}
          >
              <Text style = {styles.buttonText}>Public Group</Text>
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT,
    backgroundColor: '#F5FCFF',
  },
  body: {
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: '#2ecc71',
    opacity: 0.88,
    height: DEVICE_HEIGHT / 8.2,
    width: DEVICE_WIDTH,
  },
  button: {
    backgroundColor: 'white',
    height: DEVICE_WIDTH / 1.28,
    width: DEVICE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  buttonText: {
    color: '#2ecc71',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
AppRegistry.registerComponent('social', () => social);
