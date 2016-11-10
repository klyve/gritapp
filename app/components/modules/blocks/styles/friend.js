
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'

import {
  MARGIN
} from '../../../constants';


export default styles = StyleSheet.create({
  friends: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },
  friendImage: {
    marginLeft: MARGIN,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  friendImageSmall: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  friendText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },

  numberContainer: {
    flex: 1,
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadDot: {
    backgroundColor: '#ec644b',
    width: 30,
    height: 30,
    borderRadius: 30,
    overflow: 'hidden',
  },
  numberItem: {
    width: 50,
    height: 30,
  },
  number: {
    color: '#333',
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  unreadDotNumber: {
    marginTop: 5,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
})
