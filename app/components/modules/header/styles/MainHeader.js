
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'


export default styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    padding: 20,
  },
  leftAlign: {
    position: 'absolute',
    left: 0,
    padding: 5,
    width: 50,
    height: 50,
  },

  rightAlign: {
    position: 'absolute',
    right: 0,
    padding: 5,
    width: 50,
    height: 50,
  },
  titleContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 20,
  },

  green: {
    backgroundColor: '#2ecc71',
  },
  red: {
    backgroundColor: '#c0392b',
  },
  orange: {
    backgroundColor: 'orange'
  }
})
