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


function person(){
  this.name = "";
  this.picturePath = "";
  this.friends = [];
  this.score;
}
var f1 = new person();
  f1.name = "Atbin";
  f1.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";
  f1.score = 1;
var f2 = new person();
  f2.name = "Bjarte";
  f2.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/534545_10151000508639230_719468928_n.jpg?oh=2dfc2295927eb46651e733279090a26d&oe=589533F5";
  f2.score = 200;
var f3 = new person();
  f3.name = "Henrik";
  f3.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";
  f3.score = 69;
var f4 = new person();
  f4.name = "Karoline";
  f4.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12541098_1218109328203241_3639725756279389260_n.jpg?oh=d72325b4e0cb78a1baddbe70d3e2950a&oe=58D1DCDC";
  f4.score = 420;
var f5 = new person();
  f5.name = "Morten";
  f5.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";
  f5.score = 13;


var lead = [f4, f2, f3, f5, f1];
export default class GroupLeaderboard extends Component {
  render() {
    let other = [];

    for (let i = 3; i < lead.length; i ++){
      other.push(
        <FriendBlock
          onPress={() => {
            Actions.profile()
          }}
          image={lead[i].picturePath}
          name={lead[i].name}
          points={lead[i].score}
          key={i}
          small
        />
      )
    }

    return (
      <View>
        <View style={{padding: 23}}/>

          <LeadBlock
            onPress={() => {
              Actions.profile()
            }}
            trophy='trophy'
            trophyColor='gold'
            image={lead[0].picturePath}
            name={lead[0].name}
            points={lead[0].score}
            large
          />

          <LeadBlock
            onPress={() => {
              Actions.profile()
            }}
            trophy='trophy'
            trophyColor='silver'
            image={lead[1].picturePath}
            name={lead[1].name}
            points={lead[1].score}
            large
          />

          <LeadBlock
            onPress={() => {
              Actions.profile()
            }}
            trophy='trophy'
            trophyColor='#cd8c32'
            image={lead[2].picturePath}
            name={lead[2].name}
            points={lead[2].score}
            large
          />

        <View style={{padding: 23}}/>

        {other}
      </View>
    );
  }
}
