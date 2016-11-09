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

// Dive width and height
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

function request() {
  this.called = "";
  this.type = "";
  this.status = "";
  this.senderName = "";
  this.senderImgPath = "";
}

var requests = [];

var ntnu = new request();
  ntnu.called = "NTNU Gjøvik";
  ntnu.type = 'group';
  ntnu.staus = 'pending';
  ntnu.senderName = 'Henrik';
  ntnu.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu2 = new request();
  ntnu2.called = "NTNU Gjøvik";
  ntnu2.type = 'group';
  ntnu2.staus = 'pending';
  ntnu2.senderName = 'Henrik';
  ntnu2.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu3 = new request();
  ntnu3.called = "#Dic4Pic";
  ntnu3.type = 'Challenge';
  ntnu3.staus = 'accepted';
  ntnu3.senderName = 'Jørgen';
  ntnu3.senderImgPath = "http://facebookcraze.com/wp-content/uploads/2009/12/funny_profile_pic_for_facebook_rape.jpg";

var ntnu4 = new request();
ntnu4.called = "NTNU Gjøvik";
ntnu4.type = 'group';
ntnu4.staus = 'pending';
ntnu4.senderName = 'Henrik';
ntnu4.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu5 = new request();
ntnu5.called = "NTNU Gjøvik";
ntnu5.type = 'group';
ntnu5.staus = 'pending';
ntnu5.senderName = 'Henrik';
ntnu5.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu6 = new request();
ntnu6.called = "NTNU Gjøvik";
ntnu6.type = 'group';
ntnu6.staus = 'pending';
ntnu6.senderName = 'Henrik';
ntnu6.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var ntnu7 = new request();
ntnu7.called = "NTNU Gjøvik";
ntnu7.type = 'group';
ntnu7.staus = 'pending';
ntnu7.senderName = 'Henrik';
ntnu7.senderImgPath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

requests.push(ntnu);
requests.push(ntnu2);
requests.push(ntnu3);
requests.push(ntnu4);
requests.push(ntnu5);
requests.push(ntnu6);
requests.push(ntnu7);

export default class social extends Component {
  constructor() {
    super();
    this.state = {
      requests
    }
  }
  render() {
    let showRequests = this.state.requests.map((a, b) => {
    console.log(a.called)
    return (
      <TouchableHighlight
      key = {b}
      onPress={() => {}}
      activeOpacity={75 / 100}
      underlayColor={"rgb(210,210,210)"} >
          <View style = {styles.request}>
            <Image
            style = {styles.senderImage}
            source = {{uri: a.senderImgPath}}/>
            <Text
            style = {styles.requestText}
            >
              {a.called}: invited by {a.senderName}
            </Text>
          </View>
      </TouchableHighlight>

    )
  })
    return (
      <View style={styles.container}>
        <View style = {styles.navbar}></View>
        <View style = {styles.body}>
          <ScrollView style = {styles.requestContainer}>
            {showRequests}
          </ScrollView>
        </View>
        <TouchableHighlight
        onPress={() => {}}
        activeOpacity={75 / 100}
        underlayColor={"rgb(210,210,210)"}
        style = {styles.closePage}>
          <Text style={styles.closeButtonText}>CLOSE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    flex: 1/10,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  body: {
    flex: 1/1.5,
  },
  requestContainer: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
  },
  request: {
    flex: 1/1.1,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  senderImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  requestText: {
    marginLeft: 10,
    width: 260,
  },
  closePage: {
    height: 60,
    backgroundColor: '#26a65b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  declineButton: {
    width: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  deleteSymbol: {
    width: 20,
    height: 20
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('social', () => social);
