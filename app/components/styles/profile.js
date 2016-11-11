import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'

const MARGIN = 10
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navBar: {
    flex: 1,
    backgroundColor: '#2ecc71',
  },
  body: {
    flex: 7,
  },
  groupImageView: {
    alignItems: 'center',
  },
  groupInfo: {
    alignItems: 'center',
    paddingBottom: MARGIN*2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
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


  groupTitleText:{
    fontSize: 30,
    color: '#2ecc71',
    paddingTop: MARGIN,
  },
  groupDescriptionText: {
    fontSize: 18,
    paddingTop: MARGIN*2,
    textAlign: 'center',
  },

});
