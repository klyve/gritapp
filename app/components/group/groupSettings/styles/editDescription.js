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
  navbar: {
    height: 70,
    backgroundColor: "#2ecc71",
  },
  body: {
    flex: 1/1.1,
  },
  header: {
    alignItems: 'center',
    flex: 1/10,
    flexDirection: 'row',
    borderColor: 'black',
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
