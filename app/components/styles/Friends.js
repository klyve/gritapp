
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
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },


  meButton: {
    height: DEVICE_HEIGHT / 6,
    width: DEVICE_WIDTH,
  },
  addButton: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
  },
  friendButton: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    marginLeft: DEVICE_WIDTH - (DEVICE_WIDTH / 1.02),
    marginBottom: DEVICE_HEIGHT / 200,
  },
  settingsButton: {
    height: DEVICE_HEIGHT / 25,
    width: DEVICE_HEIGHT / 25,
    position: 'absolute',
    top: DEVICE_HEIGHT / 15,
    right: DEVICE_HEIGHT / 25,
  },


  me: {
    height: DEVICE_HEIGHT / 6,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  add: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  friends: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },


  myImage: {
    marginLeft: DEVICE_HEIGHT / 50,
    width: DEVICE_HEIGHT / 8,
    height: DEVICE_HEIGHT / 8,
    borderRadius: 20,
  },
  friendImage: {
    marginLeft: DEVICE_HEIGHT / 50,
    width: DEVICE_HEIGHT / 12,
    height: DEVICE_HEIGHT / 12,
    borderRadius: 15,
  },


  meText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 25,
  },
  friendText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  addText: {
    paddingTop: DEVICE_HEIGHT / 30,
    fontSize: 20,
    textAlign: 'center',
  },
})
