import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'

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
    marginTop: 60,
    alignItems: 'center',
    flex: .095,
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
