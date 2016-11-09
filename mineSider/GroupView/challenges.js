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
const MARGIN = 10;
var groupColor;

// Blueprints
function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
  this.currentChallenges = [];
  this.public;
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
  currentGroup.description = "Vi liker pølser, de er best";
  currentGroup.public = false;


var chall1 = new Challenge();
  chall1.name = "Vakreste blomst";
  chall1.timeLeft = "9d";
  chall1.picturePath = "http://plusquotes.com/images/quotes-img/flowers-482575_960_720.jpg";

var chall2 = new Challenge()
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

groupColor = (currentGroup.public) ? '#3498db' : '#c0392b';


export default class social extends Component {
  render() {

    let groupBannerColor = (currentGroup.public) ? styles.blueBannerColor : styles.redBannerColor;
    let groupTitleColor = (currentGroup.public) ? styles.blueTextColor : styles.redTextColor;

    let showChallenges = challenges.map((a,b) => {
        return (
              <TouchableHighlight
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
      )})



    return (
      <View style={styles.container}>

        <View style={styles.navBar}/>

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={styles.groupTitleText}>{currentGroup.name}</Text>

              <Text style={styles.groupDescriptionText}>{currentGroup.description}</Text>
            </View>

            <View style={styles.tabs}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
                  <Text style={styles.groupTabText}>Leaderboard</Text>
                </View>

                <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
                  <Text style={{color: groupColor, fontSize: 16,}}>Challenges</Text>
                </View>

                <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
                  <Text style={styles.groupTabText}>Members</Text>
                </View>
              </View>

              <View style={{flex: 12, backgroundColor: '#f0f0f0', paddingTop: MARGIN,}}>
                <ScrollView>

                  {showChallenges}

                </ScrollView>
              </View>

            </View>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navBar: {
    flex: 1,
    backgroundColor: groupColor,
  },
  body: {
    flex: 7,
  },
  groupImageView: {
    alignItems: 'center',
  },
  groupInfo: {
    alignItems: 'center',
    paddingBottom: MARGIN*2,
  },
  tabs: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },


  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    top: -60,
  },
  challengeImage: {
    width: 60,
    height: 60,
    marginLeft: MARGIN,
    borderRadius: 30,
  },


  challengeBody: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },
  groupTitleText:{
    fontSize: 30,
    color: groupColor,
  },
  groupDescriptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  groupTabText: {
    fontSize: 16,
    color: '#bbbbbb'
  },
  challengeTitleText: {
    fontSize: 18,
    marginLeft: MARGIN,
  },
  challengeTimeLeftText: {
    position: 'absolute',
    fontSize: 16,
    right: MARGIN,
    top: MARGIN * 3,
  },


  challengeButton: {
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },
});

AppRegistry.registerComponent('social', () => social);