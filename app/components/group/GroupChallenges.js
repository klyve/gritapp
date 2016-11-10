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
import styles from './styles/groupchallenges';


function Challenge(){
  this.name = "";
  this.timeLeft = "";            // skal egentlig holde en dato for deadline
  this.posts = [];
  this.unread;
  this.picturePath = "";
}
var chall1 = new Challenge();
  chall1.name = "Vakreste blomst";
  chall1.timeLeft = "9d";
  chall1.picturePath = "http://plusquotes.com/images/quotes-img/flowers-482575_960_720.jpg";
var chall2 = new Challenge();
  chall2.name = "Spis en busemann :o";
  chall2.timeLeft = "43m";
  chall2.picturePath = "https://i.ytimg.com/vi/aMIqjaYfWFw/maxresdefault.jpg";
var chall3 = new Challenge();
  chall3.name = "Ta bilde med en transe";
  chall3.timeLeft = "12h";
  chall3.picturePath = "https://images.mic.com/e5nis83fk6bgvhczmhi8h8ndjhocj7my63tdcawncsdrfpwlbjo645qrk7xruq2v.jpg";
var chall4 = new Challenge();
  chall4.name = "Si hei";
  chall4.timeLeft = "3d";
  chall4.picturePath = "https://a2ua.com/hello/hello-009.jpg";
var challenges =[chall1, chall2, chall3, chall4];
export default class GroupChallenges extends Component {
  render() {
    let showChallenges = challenges.map((a,b) => {
        return (
          <FriendBlock
            onPress={() => {console.log("CLicked")}}
            image={a.picturePath}
            name={a.name}
            points={a.timeLeft}
            key={b}
          />
      )})
    return (
      <View>
        <Blocks>
          {showChallenges}
        </Blocks>
      </View>
    );
  }
}
