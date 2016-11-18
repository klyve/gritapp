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

import styles from './styles/lead';
import { Icon } from 'react-native-elements';
import { MARGIN } from '../../constants';

export default class LeadBlock extends Component {

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
    let iconOrText = [];

    if(this.props.small) {
      imageStyles.push(styles.friendImageSmall)

      if (this.props.place){
        iconOrText = [
          <View style={{marginLeft: 10, marginRight: 10}}>
            <Text style={{fontSize: 25}}>
              {this.props.place}
            </Text>
          </View>
        ]
      }

    } else {
      iconOrText = [
        <View style={{paddingLeft: 10, PaddingRight: 10}}>
          <Icon
            name={this.props.trophy}
            type='font-awesome'
            color={this.props.trophyColor}
            size={40}
            underlayColor='transparent'
            onPress={() => {}}
          />
        </View>
      ]
    }

    return (
      <BlockBasic
        onPress={this.props.onPress}
      >
      <View style={styles.friends}>

        {iconOrText}

        <Image style={imageStyles} source={{uri: this.props.image}}></Image>

        <Text style={styles.friendText}> {this.props.name}</Text>
        {this.renderMeta()}

      </View>
     </BlockBasic>
    )
  }

}
