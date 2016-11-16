// Social app for assignment 3
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native'
import {
  MARGIN,
  HEADER_HEIGHT
} from '../../constants'

export default styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#f0f0f0',
 },

 buttonText: {
   color: '#2ecc71',
   fontSize: 28,
   fontWeight: 'bold',
 },
 blockContainer: {
   marginTop: HEADER_HEIGHT,
   flex: 1,
   margin: MARGIN
 }
})
