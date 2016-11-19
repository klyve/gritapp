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
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  bottomBar: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.4,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingBottom: 20,
  }
})
