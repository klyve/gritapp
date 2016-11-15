import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'

export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    marginTop: 80,
    borderTopWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
    backgroundColor: '#3fc380',
    paddingBottom: 10,
  },
  groupImageView: {
    backgroundColor: '#3fc380',
    alignItems: 'center',
  },
  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    marginTop: 10,
  },
  headerText: {
    paddingTop: 5,
    fontWeight: 'normal',
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#ffffff',
    backgroundColor: '#3fc380',
  },
  settingsContainer: {
    backgroundColor: 'white',
  },
  setting: {
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 60,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  settingsTextLeft: {
    color: 'grey',
    fontSize: 18,
    width: 200,
  },
  settingsTextRight: {
    color: 'grey',
    fontSize: 18,
    width: 100,
  },
  settingsButton: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  switch: {
    marginLeft: 100,
  },
})
