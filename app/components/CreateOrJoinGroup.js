import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import styles from './styles/CreateOrJoinGroup';

export default class CreateOrJoinGroup extends Component {
  render() {
    return (
      <View style = {styles.container}>

        <View style = {styles.body}>
          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}
          style = {styles.button}
          >
              <Text style = {styles.buttonText}>Create</Text>
          </TouchableHighlight>

          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}
          style = {styles.button}
          >
              <Text style = {styles.buttonText}>Join</Text>
          </TouchableHighlight>

        </View>

      </View>
    );
  }
}
