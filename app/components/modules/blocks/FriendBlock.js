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

  renderUnread() {
    if(!this.props.unread || !this.props.unread > 0)
      return false;

    return(
      <View style={styles.unreadDot}>
        <Text style={styles.unreadDotNumber}>
          {(this.props.unread > 99) ? 99 : this.props.unread}
        </Text>
      </View>
    )
  }


  render() {
    return (
      <BlockBasic
        onPress={this.props.onPress}
      >
      <View style={styles.friends}>
        <Image style={styles.friendImage} source={{uri: this.props.image}}></Image>
        <Text style={styles.friendText}> {this.props.name}</Text>
        {this.renderUnread()}
        
      </View>
     </BlockBasic>
    )
  }

}
