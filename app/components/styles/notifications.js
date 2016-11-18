import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'
import {HEADER_HEIGHT, MARGIN} from '../constants';



export default styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  body: {
    marginTop: HEADER_HEIGHT,
    flex: 1,
  },
  requestContainer: {
    backgroundColor: '#f0f0f0',
    flexDirection: 'column',
  },
  request: {
    flex: 1/1.1,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  senderImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  requestText: {
    marginLeft: MARGIN,
    width: 260,
  },
  closePage: {
    height: 60,
    backgroundColor: '#26a65b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  declineButton: {
    width: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  deleteSymbol: {
    width: 20,
    height: 20
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
