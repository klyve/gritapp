
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
  },
  button: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    marginBottom: 5,
  },


})
