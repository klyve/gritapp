import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  HEADER_HEIGHT,
  MARGIN,
} from '../../constants'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: .9,
    marginTop: HEADER_HEIGHT,
  },
  name: {
    padding: MARGIN,
    flex: .1,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  description: {
    padding: MARGIN,
    flex: .4,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  time: {
    padding: MARGIN,
    flex: .2,
  },
  headerText: {
    fontSize: 24,
    color: 'black',
  },
  smallTextInput: {
    fontSize: 14,
    height: 40,
    width: 380,
  },
  largeTextInput: {
    fontSize: 14,
    height: 400,
    width: 380,
  },
  timeLimitText: {
    backgroundColor: 'lightgrey',
    height: 40,
    width: 350,
    fontSize: 22,
    padding: MARGIN,
  },
  createButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: 'blue',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
  },
})
