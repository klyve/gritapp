
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
})
