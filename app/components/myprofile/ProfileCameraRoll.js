import React, { Component } from 'react';
import {
  CameraRoll,
  CameraRollView,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
  ScrollView,
  Switch,
  Alert,
  AsyncStorage,
} from 'react-native';
//import * as Route from '../../actions/route';
import * as User from '../../actions/user';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';


import {
  Blocks,
  FriendBlock,
  MainHeader,
} from '../modules';

import styles from './styles/ProfileCameraRoll';

export default class ProfileCameraRoll extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainHeader
          title = "Library"
          color="green"
          rightBtn = "check"
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
          right={() => { Actions.pop() }}
         />
        <View style={styles.body}>
          <CameraRollPicker
            callback={(images) => this.getSelectedImages(images)}
            maximum={1}
            />
        </View>
      </View>
    );
  }
}
