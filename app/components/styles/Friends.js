
// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'

const MARGIN = 10;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  body: {
    flex: 7,
  },
  meButton: {
    flex: 1,
    backgroundColor: 'red',
  },
  addButton: {
    flex: 1,
  },
  friendButton: {
    flex: 1,
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },


  me: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },
  add: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingTop: MARGIN * 2,
    paddingBottom: MARGIN * 2,
  },
  friends: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },


  myImage: {
    marginLeft: MARGIN,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  friendImage: {
    marginLeft: MARGIN,
    width: 60,
    height: 60,
    borderRadius: 30,
  },


  meText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 25,
  },
  friendText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  addText: {
    fontSize: 20,
    textAlign: 'center',
  },
})
