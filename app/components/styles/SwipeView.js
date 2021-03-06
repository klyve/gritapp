
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import {HEADER_HEIGHT, MARGIN} from '../constants';


export default styles = StyleSheet.create({
  contentView: {
    marginTop: HEADER_HEIGHT,
    flex: 1,
    padding: MARGIN,
    backgroundColor: '#f0f0f0',
  },
  noPadding: {
    padding: 0,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    backgroundColor: '#92BBD9',
  },
})
