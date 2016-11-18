
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native'

import {
  MARGIN
} from '../../constants';

var windowSize = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bg: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: windowSize.width,
    height: windowSize.height
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 7,
  },
  logo: {
    width: 150,
    height: 150
  },
  signin: {
    width: 300,
    backgroundColor: '#2ecc71',
    padding: 15,
    margin: 10,
    alignItems: 'center'
  },
  signup: {
    borderWidth: 2,
    borderColor: 'white',
    width: 300,
    backgroundColor: 'transparent',
    padding: 15,
    margin: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    paddingRight: MARGIN * 4,
    paddingLeft: MARGIN * 4,

    borderColor: 'rgba(0,0,0,0)',
    borderBottomColor: '#CCC',
    borderWidth: 1,
  },
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: '#CCC',
    borderColor: 'transparent'
  },
  inputContent: {
    position: 'absolute',
    left: 61,
    right: 0,
    ...Platform.select({
      android: {
        top: 8,
        height: 40,
      },
      ios: {
        height: 20,
        top: 15,
        backgroundColor: 'red',
      },
    }),
},
  input: {
    flex: 1,
    marginLeft: MARGIN * 2,
    fontSize: 20,
    color: '#fff'
  },
  forgotContainer: {
    flex: 1,
    alignItems: 'flex-end',
    padding: MARGIN * 1.5,
  },
  greyFont: {
    color: '#D8D8D8'
  },
  whiteFont: {
    color: '#FFF'
  }
})
