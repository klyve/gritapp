import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  MARGIN,
  HEADER_HEIGHT,
  HEADER_PADDING
} from '../../../constants';


//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  body: {
    marginTop: MARGIN * 6,
    flex: .9,
  },
  header: {
    marginTop: MARGIN * 3,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  textInput: {
    padding: MARGIN,
    flex: .8,
    color: 'grey',
    textAlign: 'left',
    fontSize: 18,
  },
})
