import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
} from 'react-native'
import { MARGIN } from '../../constants'

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;


export default styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    marginLeft: MARGIN * 2,
    marginRight: MARGIN * 2,
    marginTop: MARGIN * 4,
    marginBottom: MARGIN * 4,
    backgroundColor: '#ffffff',
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scroll: {
    backgroundColor: '#f0f0f0',
  },
  likeBar: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  commentBar:{
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: MARGIN / 2,
  },


  peopleImage: {
    width: 60,
    height: 60,
    marginTop: MARGIN,
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    borderRadius: 30,
  },
  currentImage: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  titleText: {
    fontSize: 25,
    marginLeft: -150,
  },
  commentText: {
    fontSize: 14,
  },
  exitButton:
  {
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
    paddingLeft: MARGIN,
    paddingRight: MARGIN,
  },
})
