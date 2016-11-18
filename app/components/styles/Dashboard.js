
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import { MARGIN } from '../constants';


export default styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  notifications: {
    backgroundColor: '#26a65b',
    padding: MARGIN * 1.5,
  },
  notificationsText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})
