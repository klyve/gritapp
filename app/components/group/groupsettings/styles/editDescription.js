import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  body: {
    marginTop: 60,
    flex: .9,
  },
  header: {
    marginTop: 30,
    height: 60,
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
