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
  container: {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: '#f0f0f0',
  },
  body: {
    alignItems: 'center',
  },
  navbar: {
    backgroundColor: '#2ecc71',
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH,
  },
  button: {
    backgroundColor: '#ffffff',
    height: (DEVICE_HEIGHT - (DEVICE_HEIGHT / 8)) / 2.18,
    width: DEVICE_WIDTH / 1.04,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DEVICE_WIDTH / 50,
  },
  buttonText: {
    color: '#2ecc71',
    fontSize: 28,
    fontWeight: 'bold',
  },
})
