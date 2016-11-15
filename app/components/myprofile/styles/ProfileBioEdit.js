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
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flex: 1/10,
    flexDirection: 'row',
    borderColor: 'black',
    marginTop: 20,
  },
  textInput: {
    paddingTop: 10,
    paddingLeft: 20,
    color: 'grey',
    textAlign: 'left',
    fontSize: 18,
    flex: 1/1.1,
    borderBottomWidth: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
})
