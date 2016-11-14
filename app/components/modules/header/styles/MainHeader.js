
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import {HEADER_HEIGHT} from '../../../constants'


export default styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    padding: 20,
  },
  large: {
    height: 80,
  },
  iconLarge: {
    marginTop: 15,
  },
  leftAlign: {
    position: 'absolute',
    left: 0,
    padding: 5,
    width: 50,
    height: 50,
  },
  leftAlignText: {
    position: 'absolute',
    left: 0,
    padding: 5,
    paddingLeft: 10,
    width: 100,
    height: 50,
  },
  rightAlignText: {
    position: 'absolute',
    right: 0,
    padding: 5,
    paddingRight: 10,
    width: 100,
    height: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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
