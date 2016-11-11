import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'



export default styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    flex: 1/10,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  body: {
    flex: 1/1.5,
  },
  requestContainer: {
    backgroundColor: '#f5f5f5',
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
    borderRadius: 15,
    backgroundColor: 'blue',
  },
  requestText: {
    marginLeft: 10,
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
