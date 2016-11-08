// Social app for assignment 3
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
   flex: 1,
   backgroundColor: '#f0f0f0',
 },
 body: {
   flex: 7,
   alignItems: 'center',
   paddingBottom: DEVICE_WIDTH / 50,
 },
 navbar: {
   flex: 1,
   backgroundColor: '#2ecc71',
   width: DEVICE_WIDTH,
 },
 button: {
   flex: 1,
   width: DEVICE_WIDTH / 1.04,
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: DEVICE_WIDTH / 50,
   backgroundColor: '#ffffff'
 },
 buttonText: {
   color: '#2ecc71',
   fontSize: 28,
   fontWeight: 'bold',
 },
})
