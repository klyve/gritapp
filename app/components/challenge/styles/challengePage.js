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
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    flex: 1,
  },
  navbar: {
    backgroundColor: '#2ecc71',
    opacity: 0.88,
    flex: 1/9,
  },
  body: {
    backgroundColor: '#f7f8fd',
    flex: 1/1.1,
  },
  description: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 5,
    flex: 1/6,
  },
  descriptionHeader: {
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    opacity: 0.7,
  },
  descriptionParagraph: {
    padding: 5,
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.7,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    height: DEVICE_WIDTH / 2.07,
    width: DEVICE_WIDTH / 2.07,
    backgroundColor: '#2ecc71',
  },
  imageButton: {
    height: DEVICE_WIDTH / 2.07,
    width: DEVICE_WIDTH / 2.07,
    margin: 1,
  },
  bottomBar: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flex: 1/9,
  },
cameraButton: {
    height: 60,
    width: 60,
  },
  cameraLogo: {
    height: 60,
    width: 60,
  },
})
