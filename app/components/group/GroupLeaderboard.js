import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Blocks,
  FriendBlock,
  LeadBlock,
} from '../modules';
import styles from './styles/groupchallenges';
import { SERVER } from '../constants';


export default class GroupLeaderboard extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    let lead = this.props.group.leaderboard;

    if (lead.length > 0) {
      lead.push(
        <LeadBlock
          onPress={() => {
            Actions.profile({
              thisUser: lead[0],
              mainUser: this.props.user
            })
          }}
          trophy='trophy'
          trophyColor='gold'
          image={SERVER+lead[0].image}
          name={lead[0].name}
          points={lead[0].score}
          large
          key={0}
        />
      )
    }

    if (lead.length > 1) {
      lead.push(
        <LeadBlock
          onPress={() => {
            Actions.profile({
              thisUser: lead[1],
              mainUser: this.props.user
            })
          }}
          trophy='trophy'
          trophyColor='silver'
          image={SERVER+lead[1].image}
          name={lead[1].name}
          points={lead[1].score}
          key={1}
          large
        />
      )
    }

    if (lead.length > 2) {
      <LeadBlock
        onPress={() => {
          Actions.profile({
            thisUser: lead[0],
            mainUser: this.props.user
          })
        }}
        trophy='trophy'
        trophyColor='#cd8c32'
        image={SERVER+lead[2].image}
        name={lead[2].name}
        points={lead[2].score}
        key={2}
        large
      />
    }

    let other = [];

    for (let i = 3; i < lead.length; i ++){
      other.push(
        <LeadBlock
          onPress={() => {
            Actions.profile({
              thisUser: lead[i],
              mainUser: this.props.user,
            })
          }}
          image={SERVER+lead[i].image}
          name={lead[i].name}
          points={lead[i].score}
          key={i}
          small
          place={i+1}
        />
      )
    }

    return (
      <View>
        <View style={{padding: 23}}/>

          {lead}

        <View style={{padding: 23}}/>

        {other}
      </View>
    );
  }
}
