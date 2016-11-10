
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
  friendText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },

  unreadDot: {
    position: 'absolute',
    backgroundColor: '#ec644b',
    right: 10,
    top: 25,
    width: 30,
    height: 30,
    borderRadius: 30,
    overflow: 'hidden',
  },
  unreadDotNumber: {
    marginTop: 5,
    fontSize: 16,
    borderRadius: 50,
    color: 'white',
    textAlign: 'center',
  },
})
