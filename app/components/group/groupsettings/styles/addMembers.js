import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';
import { MARGIN, HEADER_HEIGHT } from '../../../constants';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    alignItems: 'center',
    marginTop: HEADER_HEIGHT,
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
    borderTopWidth: 1,
    borderColor: 'black',
    marginTop: 20/5,
    flex: 1,
    flexDirection: 'column',
  },
  friendButton: {
    width: 380,
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
    padding: MARGIN / 2,
    paddingLeft: MARGIN * 2,
    fontSize: 20,
    width: 250,
  },
  friendTargeted: {
    backgroundColor: '#2ecc71',
  },
})
