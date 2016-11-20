
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import {HEADER_HEIGHT, HEADER_PADDING, MARGIN} from '../../../constants'


export default styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    padding: HEADER_PADDING,
  },
  large: {
    height: 80,
  },
  iconLarge: {
    marginTop: 15,
  },
  leftAlign: {
    position: 'absolute',
    left: 18,
    padding: MARGIN / 2,
    width: 50,
    height: 50,
  },
  rightAlign: {
    position: 'absolute',
    right: 18,
    padding: MARGIN / 2,
    width: 50,
    height: 50,
  },
  leftAlignText: {
    position: 'absolute',
    left: 0,
    padding: MARGIN / 2,
    paddingLeft: 10,
    width: 100,
    height: 50,
  },
  rightAlignText: {
    position: 'absolute',
    right: 0,
    padding: MARGIN / 2,
    paddingRight: 10,
    width: 100,
    height: 50,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  titleContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    flex: 1,
    padding: MARGIN / 2,
    alignItems: 'center',
  },
  titleLogoContainer: {
    position: 'absolute',
    right: 0,
    bottom: 8,
    left: 0,
    flex: 1,
    padding: MARGIN / 2,
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
  blue: {
    backgroundColor: '#2574a9',
  },
  orange: {
    backgroundColor: 'orange'
  }
})
