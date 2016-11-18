import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    alignItems: 'center',
    marginTop: 90,
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
    flex: .6,
    marginTop: 10/5,
    flexDirection: 'column',
    borderTopWidth: 1,
    borderColor: 'black',
  },
  friendButton: {
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  editButton: {
   height: 20,
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
    marginLeft: 10,
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
