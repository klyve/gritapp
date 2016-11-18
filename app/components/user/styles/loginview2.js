
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
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'transparent'
    },
    bg: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: windowSize.width,
      height: windowSize.height
    },
    header: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .7,
      backgroundColor: 'transparent'
    },
    mark: {
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
      flex: .4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputs: {
      marginTop: 10,
      marginBottom: 10,
      flex: .25
    },
    inputPassword: {
      marginLeft: 15,
      width: 20,
      height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
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
      padding: 0,
      fontSize: 17
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})
