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
  TextInput,
} from 'react-native';

// Dive width and height
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 10;

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


var requests = [ntnu, ntnu2, ntnu3, ntnu4, ntnu5, ntnu6, ntnu7];


export default class social extends Component {
  constructor() {
    super();
    this.state = {
      requests
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <View style = {styles.navbar}></View>

        <View style = {styles.body}>

          <View style={styles.ChallengeNameButton}>
            <View>
                <Text style={styles.infoText}>
                  Challenge name
                </Text>

                <TextInput
                  placeholder={'What should the challenge be called?'}
                  placeholderTextColor={'#999999'}
                  underlineColorAndroid={'rgba(0,0,0,0)'}
                  style={{fontSize: 18, marginLeft: MARGIN * 2}}
                  onChangeText={(text) => {}}
                />
            </View>
          </View>


          <View style={styles.ChallengeDescriptionButton}>
            <View>
                <Text style={styles.infoText}>
                  Description
                </Text>

                <TextInput
                  placeholder={'What\'s the challenge about?'}
                  placeholderTextColor={'#999999'}
                  underlineColorAndroid={'rgba(0,0,0,0)'}
                  style={{fontSize: 18, marginLeft: MARGIN * 2}}
                  onChangeText={(text) => {}}
                />

            </View>
          </View>


          <View style={styles.ChallengeTimeButton}>
            <View>
              <Text style={styles.infoText}>
                Countdown
              </Text>
            </View>

          </View>

        </View>

        <TouchableHighlight
        onPress={() => {}}
        activeOpacity={75 / 100}
        underlayColor={"rgb(210,210,210)"}
        style = {styles.closePage}>
          <Text style={styles.closeButtonText}>CREATE</Text>
        </TouchableHighlight>


      </View>
    );
  }
}
const styles = StyleSheet.create({

  container : {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  navbar: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  body: {
    flex: 6.2,
    marginTop: MARGIN,
    marginBottom: MARGIN / 2,
  },
  ChallengeNameBody: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  ChallengeDescriptionBody: {
    flex: 2,
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closePage: {
    flex: 0.8,
    backgroundColor: '#26a65b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ChallengeNameButton: {
    flex: 1,
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    backgroundColor: '#ffffff',
  },
  ChallengeDescriptionButton: {
    flex: 2,
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    backgroundColor: '#ffffff',
  },
  ChallengeTimeButton: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },


  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 22,
    marginTop: MARGIN,
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('social', () => social);
