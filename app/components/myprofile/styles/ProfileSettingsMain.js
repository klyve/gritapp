import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import {
  MARGIN,
  HEADER_HEIGHT,
  HEADER_PADDING
} from '../../constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    zIndex: 0,
  },
  body: {
    alignItems: 'center',
    marginTop: HEADER_HEIGHT,
    zIndex: 1,
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
    marginTop: -(MARGIN*5),
    paddingBottom: MARGIN * 2,
    fontSize: 30,
    color: '#3fc380',
  },
  settingsContainer: {
    backgroundColor: 'white',
    flex: .9,
  },
  setting: {
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingLeft: MARGIN,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderColor: 'rgba(0,0,0,0.2)',
  },
  settingsTextLeft: {
    color: 'grey',
    fontSize: 18,
  },
  settingsTextRight: {
    color: 'grey',
    fontSize: 18,
    paddingRight: MARGIN*10
  },
  switch: {
    marginRight: MARGIN*2,
  },
  logout: {
    height: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
