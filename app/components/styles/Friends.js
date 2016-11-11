
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
    height: 60,
    paddingTop: MARGIN * 2,
    paddingBottom: MARGIN * 2,
  },
  myImage: {
    marginLeft: MARGIN,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  meText: {
    padding: 5,
    paddingLeft: 20,
    width: 200,
    fontSize: 25,
  },
  addText: {
    color: '#999',
    fontSize: 20,
    textAlign: 'center',
  },
  searchContainer: {
    backgroundColor: '#f0f0f0',
    height: 60,
    borderColor: 'transparent',
  },
  searchInput: {
    backgroundColor: 'transparent',
    height: 45,
    fontSize: 18,
    marginLeft: 20,
    borderColor: 'transparent',
  },
  searchIcon: {
    marginTop: 5,
    fontSize: 18,
  },
  searchClose: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  cogIcon: {

  },
})
