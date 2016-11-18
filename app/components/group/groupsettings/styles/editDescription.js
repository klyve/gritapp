import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'
import { MARGIN, HEADER_HEIGHT } from '../../../constants';


//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  body: {
    marginTop: HEADER_HEIGHT,
    flex: .9,
  },
  header: {
    marginTop: 30,
    height: HEADER_HEIGHT,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  textInput: {
    padding: 15,
    flex: .8,
    color: 'grey',
    textAlign: 'left',
    fontSize: 18,
  },
})
