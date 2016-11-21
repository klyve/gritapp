import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';
import {
  MainHeader,
  Blocks,
  FriendBlock
} from './modules';
import styles from './styles/notifications';
import { Actions } from 'react-native-router-flux';

function request() {
  this.called = "";
  this.type = "";
  this.status = "";
  this.senderName = "";
  this.senderImgPath = "";
}

var ntnu = new request();
  ntnu.called = "NTNU Gjøvik";
  ntnu.type = 'group';
  ntnu.staus = 'pending';
  ntnu.senderName = 'Henrik';
  ntnu.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu2 = new request();
  ntnu2.called = "Pølsefest";
  ntnu2.type = 'group';
  ntnu2.staus = 'pending';
  ntnu2.senderName = 'Henrik';
  ntnu2.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu3 = new request();
  ntnu3.called = "Pied Piper 2.0";
  ntnu3.type = 'Challenge';
  ntnu3.staus = 'accepted';
  ntnu3.senderName = 'Jørgen';
  ntnu3.senderImgPath = "http://facebookcraze.com/wp-content/uploads/2009/12/funny_profile_pic_for_facebook_rape.jpg";


var requests = [ntnu, ntnu2, ntnu3];



export default class Notifications extends Component {
  constructor() {
    super();
  }
  render() {
    let showRequests = this.props.notifications.map((a, b) => {
      return (
        <FriendBlock
          onPress={() => {}}
          image={a.sender.image}
          name={a.type}
          key={b}
          small
        />
      )
  })
    return (
      <View style={styles.container}>
        <MainHeader
          title="Invites"
        />
        <View style = {styles.body}>
          <ScrollView style = {styles.requestContainer}>
            {showRequests}
          </ScrollView>
        </View>

        <TouchableHighlight
          onPress={() => {
            Actions.pop()
          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {styles.closePage}
        >
          <Text style={styles.closeButtonText}>CLOSE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
