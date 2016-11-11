import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Blocks,
  BlockFifty,
  MainHeader
} from '../modules';
import styles from './styles/loginview';

export default class LoginView extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.bgImageWrapper}>
          <Image source={{uri: 'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='}} style={styles.backgroundImage} />
        </View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
      </View>
    );
  }
}
