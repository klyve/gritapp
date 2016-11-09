// Social app for assignment 3
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native'

import styles from './styles/Blocks';



export default class Blocks extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }

}
