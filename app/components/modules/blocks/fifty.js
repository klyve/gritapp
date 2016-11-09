// Social app for assignment 3
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  TouchableHighlight
} from 'react-native'

import styles from './styles/fifty';

export default class BlockFifty extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let style = [styles.blockStyle];
    if(this.props.style)
      style.push(this.props.style)
    return (
      <TouchableHighlight
      activeOpacity={71 / 100}
      underlayColor='transparent'
      onPress = {() => {this.props.onPress()}}
      style={style}
      >
        <View >
          {this.props.children}
        </View>
      </TouchableHighlight>
    )
  }

}
