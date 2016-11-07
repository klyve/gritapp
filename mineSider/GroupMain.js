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
  currentGroup.name = "Pølsefest";
  currentGroup.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  currentGroup.description = "Vi liker milfs...";


var chall1 = new Challenge();
  chall1.name = "Vakreste blomst";
  chall1.timeLeft = "9d";
  chall1.picturePath = "https://static.pexels.com/photos/96918/pexels-photo-96918.jpeg";

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




export default class social extends Component {
  render() {

    let showChallenges = challenges.map((a,b) => {
        return <TouchableHighlight
               onPress = {() => {}}
               key = {b}
               activeOpacity={71 / 100}
               underlayColor={"rgb(210,210,210)"}
               style={styles.challengeButton}>
                <View style={styles.challengeBody}>
                  <Image style={styles.challengeImage} source={{uri: a.picturePath}}></Image>

                  <Text style={styles.challengeTitleText}> {a.name}</Text>

                  <Text style={styles.challengeTimeLeftText}> {a.timeLeft}</Text>
                </View>
               </TouchableHighlight>
      })

    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
        </View>

        <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>

        <Text style={styles.groupTitleText}>{currentGroup.name}</Text>

        <Text style={styles.groupDescriptionText}>{currentGroup.description}</Text>

        <Text> </Text>

        <View style={{backgroundColor: '#f0f0f0', width: DEVICE_WIDTH, alignItems: 'center', paddingTop: DEVICE_HEIGHT/100,}}>
          <ScrollView>

            {showChallenges}

          </ScrollView>
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
