import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

// Blueprints
function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
  this.currentChallenges = [];
}

function Challenge(){
  this.name = "";
  this.timeLeft = "";            // skal egentlig holde en dato for deadline
  this.posts = [];
  this.unread;
  this.picturePath = "";
}



var currentGroup = new Group();
  currentGroup.name = ">Groupname<";
  currentGroup.picturePath = "https://d13yacurqjgara.cloudfront.net/users/527271/screenshots/1937289/samsungcam.png";
  currentGroup.description = "...";



export default class social extends Component {
  render() {


    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
        </View>

        <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>

        <Text style={styles.groupTitleText}>{currentGroup.name}</Text>

        <Text style={styles.groupDescriptionText}>{currentGroup.description}</Text>

        <Text> </Text>

        <View style={{backgroundColor: '#f0f0f0', width: DEVICE_WIDTH, height: DEVICE_HEIGHT, alignItems: 'center', paddingTop: DEVICE_HEIGHT/100,}}>

          <View style={{marginTop: 10,}}></View>
          <Text style={{fontSize: 18,}}> Looks rather lonely 😶 </Text>
          <Text style={{fontSize: 18,}}> What about inviting som friends? </Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  navBar: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  groupBG:{
    backgroundColor: '#ffffff',
    alignItems: 'center',
    width: DEVICE_WIDTH,
  },
  challengeBody: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },


  groupImage: {
    width: DEVICE_WIDTH / 2.5,
    height: DEVICE_WIDTH / 2.5,
    borderRadius: DEVICE_WIDTH / 3,
    marginTop: - DEVICE_WIDTH / 8,
    borderWidth: 8,
    borderColor: '#ffffff',
  },
  challengeImage: {
    width: DEVICE_HEIGHT / 12,
    height: DEVICE_HEIGHT / 12,
    marginLeft: DEVICE_WIDTH / 80,
    borderRadius: 50,
  },


  groupTitleText:{
    fontSize: 30,
    color: '#2ecc71',
  },
  groupDescriptionText: {
    fontSize: 16,
  },
  challengeTitleText: {
    fontSize: 18,
    marginLeft: DEVICE_WIDTH / 30,
  },
  challengeTimeLeftText: {
    position: 'absolute',
    fontSize: 16,
    right: DEVICE_WIDTH / 30,
    top: DEVICE_HEIGHT / 20,
  },


  challengeButton: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    marginBottom: DEVICE_HEIGHT / 100,
  },
});

AppRegistry.registerComponent('social', () => social);
