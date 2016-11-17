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
    flex: .8,
  },
  header: {
    marginTop: 30,
    alignItems: 'center',
    flex: .08,
    flexDirection: 'row',
    borderColor: 'black',
    marginTop: 20,
  },
  textInput: {
    padding: 10,
    flex: .8,
    color: 'grey',
    textAlign: 'left',
    fontSize: 18,
    borderBottomWidth: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
})
