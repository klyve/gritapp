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
    backgroundColor: '#ffffff',
  },
  navBar: {
    flex: 1/5,
    backgroundColor: '#3fc380',
  },
  body: {
    flex: 1/3,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    backgroundColor: '#ffffff',
  },
  groupImageView: {
    alignItems: 'center',
  },
  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    top: -60,
  },
  headerText: {
    marginTop: -50,
    fontSize: 30,
    color: '#3fc380',
  },
  membersContainer: {
    marginTop: MARGIN/5,
    flex: 1,
    flexDirection: 'column',
  },
  friendButton: {
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    marginLeft: MARGIN,
    marginRight: MARGIN,
    flexDirection: 'row',
  },
  editButton: {
   height: 25,
   width: 20,
   borderRadius: 5,
  },
  friends: {
    height: 70,
    width: 380,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  friendImage: {
    marginLeft: MARGIN,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  friendText: {
   padding: 5,
   paddingLeft: 20,
   fontSize: 20,
   width: 250,
  },
})
