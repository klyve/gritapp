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
          style = {styles.button}>
              <Text style = {styles.buttonText}>Create</Text>
          </TouchableHighlight>

          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}
          style = {styles.button}>
              <Text style = {styles.buttonText}>Join</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  body: {
    flex: 7,
    alignItems: 'center',
    paddingBottom: DEVICE_WIDTH / 50,
  },
  navbar: {
    flex: 1,
    backgroundColor: '#2ecc71',
    width: DEVICE_WIDTH,
  },
  button: {
    flex: 1,
    width: DEVICE_WIDTH / 1.04,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DEVICE_WIDTH / 50,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    color: '#2ecc71',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
AppRegistry.registerComponent('social', () => social);
