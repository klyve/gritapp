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
    backgroundColor: '#ffffff',
  },
  navBar: {
    flex: 1/7,
    backgroundColor: '#3fc380',
  },
  body: {
    flex: 1/3,
    alignItems: 'center',
  },
  groupImageView: {
    alignItems: 'center',
  },
  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    top: -60,
  },
  headerText: {
    marginTop: -50,
    fontSize: 30,
    color: '#3fc380',
  },
  settingsContainer: {
    backgroundColor: 'white',
    flex: 1/1.5,
  },
  setting: {
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 50,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  settingsTextLeft: {
    color: 'grey',
    fontSize: 18,
    width: 200,
  },
  settingsTextRight: {
    color: 'grey',
    fontSize: 18,
    width: 135,
  },
  settingsButton: {
    width: 20,
    height: 20,
  },
  switch: {
    marginLeft: 100,
  },
})
