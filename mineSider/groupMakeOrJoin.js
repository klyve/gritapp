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
const MARGIN = 10;

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
          style = {styles.buttonCreate}>
              <Text style = {styles.buttonText}>Create</Text>
          </TouchableHighlight>

          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}
          style = {styles.buttonJoin}>
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
  },
  navbar: {
    flex: 1,
    backgroundColor: '#2ecc71',
    width: DEVICE_WIDTH,
  },
  buttonCreate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MARGIN,
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    backgroundColor: '#ffffff'
  },
  buttonJoin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MARGIN / 2,
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    color: '#2ecc71',
    fontSize: 28,
    fontWeight: 'bold',
  },
});
AppRegistry.registerComponent('social', () => social);
