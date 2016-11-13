
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'

import {
  MARGIN
} from '../../constants';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreen: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    opacity: 0.5,
    resizeMode: 'cover', // or 'stretch'
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: "stretch"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})
