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
      <View style={styles.numberContainer}>
        <View style={styles.unreadDot}>
          <Text style={styles.unreadDotNumber}>
            {(this.props.unread > 99) ? 99 : this.props.unread}
          </Text>
        </View>
      </View>
    )
  }
  renderPoints() {
    if(!this.props.points || !this.props.points > 0)
      return false;

    return(
      <View style={styles.numberContainer}>
        <View style={styles.numberItem}>
          <Text style={styles.number}>
            {this.props.points}
          </Text>
        </View>
      </View>
    )
  }
  renderMeta() {
    if(this.props.unread)
      return this.renderUnread();
    if(this.props.points)
      return this.renderPoints();
  }


  render() {
    let imageStyles = [styles.friendImage];
    if(this.props.small) {
      imageStyles.push(styles.friendImageSmall)
    }
    return (
      <BlockBasic
        onPress={this.props.onPress}
      >
      <View style={styles.friends}>
        <Image style={imageStyles} source={{uri: this.props.image}}></Image>
        <Text style={styles.friendText}> {this.props.name}</Text>
        {this.renderMeta()}

      </View>
     </BlockBasic>
    )
  }

}
