
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
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
      flex: .2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    inputs: {
      flex: .24,
      marginTop: 10,
      marginBottom: 10,
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
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    },
    warningContainer: {
      padding: 10,
    },
    warning: {
      fontSize: 12,
      padding: 10,
    }
})
