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
  FriendBlock
} from '../modules';
import { MARGIN } from '../constants'
import styles from './styles/groupchallenges';

export default class GroupChallenges extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    //var groupColor = (this.props.group.grouptype == "public") ? 'blue' : 'red';
    //var groupColorHex = (this.props.group.grouptype == "public") ? '#2574a9' : '#c0392b';

    var open = [];
    var closed = [];

    for (let i = 0; i < this.props.group.challenges.length; i++) {
      if (((new Date(this.props.group.challenges[i].time)).getTime()) > Date.now())
        open.push(this.props.group.challenges[i]);
      else
        closed.push(this.props.group.challenges[i]);
    }

    var activeLabel = (open.length == 0) ?

                        []

                        :

                        <Text style={{alignSelf: 'center', padding: 10, fontSize: 20}}>
                          ACTIVE CHALLENGES
                        </Text>
                        ;

    var closedLabel = (closed.length == 0) ?

                        []

                        :

                        <Text style={{alignSelf: 'center', padding: 10, fontSize: 20}}>
                          CLOSED CHALLENGES
                        </Text>
                        ;

    let showOpen = open.map((a,b) => {

        return (
          <FriendBlock
            onPress={() => {
              Actions.challengepage({
                group: this.props.group,
                challenge: a,
                user: this.props.user,
              })
            }}
            image={a.picturePath}
            name={a.name}
            points={Math.ceil(((((new Date(a.time)).getTime()/1000)) - (Date.now()/1000))/3600)}
            deadline
            key={b}
          />
      )})

      let showClosed = closed.map((a,b) => {
          return (
            <FriendBlock
              onPress={() => {
                Actions.challengepage()
              }}
              image={a.picturePath}
              name={a.name}
              points={a.timeLeft}
              key={b}
            />
        )})

    return (
      <View>
        {activeLabel}

          {showOpen}

        {closedLabel}

          {showClosed}

          <TouchableHighlight
          onPress = {() => { Actions.newchallenge({groupid: this.props.group._id, grouptype: this.props.grouptype, grouptype: this.props.group.grouptype, dispatch: this.props.dispatch}); }}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {{backgroundColor: 'blue', marginBottom: MARGIN}}>
            <Text style={{alignSelf: 'center', padding: MARGIN, fontSize: 22, color: '#fff',}}>
              NEW CHALLENGE
            </Text>
          </TouchableHighlight>
      </View>
    );
  }
}
