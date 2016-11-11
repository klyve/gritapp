import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'

import {
  MARGIN
} from '../../constants';

export default styles = StyleSheet.create({
  publicgroup: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3498db',
  },
  privategroup: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#c0392b',
  },
  textInput: {
      flex: 1,
      flexDirection: 'row',
      fontSize: 30,
      color: "#eeeeee",
      textAlign: 'center',
      margin: 10,
      height: 60,
      paddingLeft: 20,
      textAlign: 'left',
      alignItems: 'center',
    },
    explanationText: {
      paddingLeft: 30,
      color: "#eeeeee",

    },
    confirm: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 10,
    },
    previous: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
    },
    bottomText: {
      textAlign: 'left',
      color: "#eeeeee",
    },
    bottomTextView: {
      position: 'absolute',
      bottom: 0,
      padding: 10,
    },
});
