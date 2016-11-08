
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
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    backgroundColor: '#f0f0f0',
  },
  isPublic: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498db',
  },
  isPrivate: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c0392b',
  },
  groupImage: {
    marginLeft: DEVICE_HEIGHT / 50,
    width: DEVICE_HEIGHT / 12,
    height: DEVICE_HEIGHT / 12,
    borderRadius: 15,
  },
  unreadDot: {
    position: 'absolute',
    right: DEVICE_HEIGHT / 48,
    top: ((DEVICE_HEIGHT / 8) - (DEVICE_HEIGHT / 24)) / 2,
    width: DEVICE_HEIGHT / 24,
    height: DEVICE_HEIGHT / 24,
    backgroundColor: '#ec644b',
    borderRadius: (DEVICE_HEIGHT / 24) / 2,
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
  },
  button: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    marginLeft: DEVICE_WIDTH - (DEVICE_WIDTH / 1.02),
    marginTop: DEVICE_WIDTH - (DEVICE_WIDTH / 1.02),
  },


})
