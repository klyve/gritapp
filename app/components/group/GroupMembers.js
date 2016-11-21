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
import { MARGIN } from '../constants';


import {
  Blocks,
  FriendBlock
} from '../modules';
import styles from './styles/groupchallenges';



export default class GroupMembers extends Component {

  constructor(props){
    super(props)
  }

  render() {

    console.log(this.props);

    var rest = this.props.group.members;

    let top = rest.map((a,b) => {
        return (
          <FriendBlock
            image={a.image}
            name={a.nick}
            key={b}
            small
            onPress={() => {
              Actions.profile({
                                mainUser: this.props.user,
                                thisUser: a,
                              })
            }}
          />
      )})

    return (
      <View style={{paddingTop: MARGIN / 2}}>
      <Blocks>
          {top}
      </Blocks>
      </View>
    );
  }
}
