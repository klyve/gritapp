import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  MARGIN,
  HEADER_HEIGHT,
  HEADER_PADDING
} from '../../constants';


export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  body: {
    marginTop: HEADER_HEIGHT,
    flex: .9,
  },
})
