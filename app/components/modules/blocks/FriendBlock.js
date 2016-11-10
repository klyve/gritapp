// Social app for assignment 3
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image
} from 'react-native'

import {
  BlockBasic,
  Blocks
} from '../'

import styles from './styles/friend';

export default class FriendBlock extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <BlockBasic
        onPress={this.props.onPress}
      >
      <View style={styles.friends}>
        <Image style={styles.friendImage} source={{uri: this.props.image}}></Image>
        <Text style={styles.friendText}> {this.props.name}</Text>
      </View>
     </BlockBasic>
    )
  }

}
