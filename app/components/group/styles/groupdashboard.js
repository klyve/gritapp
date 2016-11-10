// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
//Constants
let groupColor = '#c0392b';
import {
  MARGIN
} from '../../constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    marginTop: 80,
    flex: 1,
  },
  groupImageView: {
    alignItems: 'center',
  },
  groupInfo: {
    alignItems: 'center',
    paddingBottom: MARGIN*2,
  },
  tabs: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },


  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    top: -60,
  },
  challengeImage: {
    width: 60,
    height: 60,
    marginLeft: MARGIN,
    borderRadius: 30,
  },


  challengeBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },
  groupTitleText:{
    fontSize: 30,
    color: groupColor,
  },
  groupDescriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  groupTabText: {
    fontSize: 16,
    color: '#bbbbbb'
  },
  challengeTitleText: {
    fontSize: 18,
    marginLeft: MARGIN,
  },
  challengeTimeLeftText: {
    position: 'absolute',
    fontSize: 16,
    right: MARGIN,
    top: MARGIN * 3,
  },


  challengeButton: {
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },




  tabText: {
    fontSize: 16,
  },
  tabFocus: {
    color: 'red', 
  }
})
