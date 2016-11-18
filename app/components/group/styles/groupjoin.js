// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'

import {
  MARGIN,
  HEADER_HEIGHT
} from '../../constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
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

  groupDescriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
})
