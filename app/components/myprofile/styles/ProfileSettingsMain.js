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
    backgroundColor: '#3ecc71',
    paddingBottom: 10,
  },
  groupImageView: {
    backgroundColor: '#3ecc71',
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
    backgroundColor: '#3ecc71',
  },
  settingsContainer: {
    backgroundColor: 'white',
    flex: .7,
  },
  setting: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    height: 50,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  settingsTextLeft: {
    color: 'grey',
    fontSize: 18,
    width: 200,
  },
  settingsTextRight: {
    width: 180,
    color: 'grey',
    fontSize: 18,
  },
  switch: {
    width: 200,
    marginLeft: 90,
  },
})
