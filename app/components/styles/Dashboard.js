
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
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  group: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  groupImage: {
    marginLeft: DEVICE_HEIGHT / 50,
    width: DEVICE_HEIGHT / 12,
    height: DEVICE_HEIGHT / 12,
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
  },
  unreadDot: {
    position: 'absolute',
    left: DEVICE_HEIGHT / 15,
    top: DEVICE_HEIGHT / 130,
    width: DEVICE_HEIGHT / 24,
    height: DEVICE_HEIGHT / 24,
    backgroundColor: '#ec644b',
    borderRadius: 50,
  },
  noUnreadDot: {
    opacity: 0,
  },
  unreadDotNumber: {
    fontSize: 16,
    color: 'white',
    top: DEVICE_HEIGHT / 270,
    textAlign: 'center',
  },
  groupText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  scrollView: {
    flexDirection: 'column',
    marginTop: DEVICE_HEIGHT / 100,
  },
  button: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    marginLeft: DEVICE_WIDTH - (DEVICE_WIDTH / 1.02),
    marginBottom: DEVICE_HEIGHT / 100,
  },


})
