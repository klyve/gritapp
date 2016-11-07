// Social app for assignment 3
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableHighlight
} from 'react-native'

import styles from './styles/MainHeader';



export default class MainHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerWrapper}>
        <Text>Header!</Text>
      </View>
    )
  }

}
