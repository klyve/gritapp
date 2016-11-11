
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flexDirection: 'column',
  },
  notifications: {
    backgroundColor: '#26a65b',
    padding: 15,
  },
  notificationsText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})
