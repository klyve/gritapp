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
            <TouchableHighlight
            onPress={(a) => {
              requests.splice(b,1)
              this.setState({requests})
            }}
            activeOpacity={75 / 100}
            underlayColor={"rgb(210,210,210)"}
            style = {styles.declineButton}>
            <Image
            style = {styles.deleteSymbol}
            source = {require('./images/deleteButton.png')}
            />
            </TouchableHighlight>
          </View>
      </TouchableHighlight>

    )
  })
    return (
      <View style={styles.container}>
        <View style = {styles.navbar}></View>
        <View style = {styles.header}>
          <Text style = {styles.headerText}>Notifications ({requests.length})</Text>
        </View>
        <ScrollView style = {styles.requestContainer}>
          {showRequests}
        </ScrollView>

        <TouchableHighlight
        onPress={() => {}}
        activeOpacity={75 / 100}
        underlayColor={"rgb(210,210,210)"}
        style = {styles.closePage}>
          <Text>CLOSE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container : {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  header: {
    height: 30,
    backgroundColor: '#26a65b',
    width: DEVICE_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    color: 'white',
  },
  requestContainer: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
  },
  request: {
    height: 75,
    margin: 5,
    backgroundColor: 'white',
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
  },
  senderImage: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: 'blue',
  },
  requestText: {
    marginLeft: 10,
    width: 280,
  },
  closePage: {
    height: 50,
    width: DEVICE_WIDTH,
    backgroundColor: 'grey',
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
});
AppRegistry.registerComponent('social', () => social);
