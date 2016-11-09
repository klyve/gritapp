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
  currentGroup.name = "MyGroupname";
  currentGroup.picturePath = "http://www.freeiconspng.com/uploads/camera-icon-google-images-24.jpg";
  currentGroup.description = "...";
  currentGroup.public = false;

groupColor = (currentGroup.public) ? '#3498db' : '#c0392b';


export default class social extends Component {
  render() {

    let groupBannerColor = (currentGroup.public) ? styles.blueBannerColor : styles.redBannerColor;
    let groupTitleColor = (currentGroup.public) ? styles.blueTextColor : styles.redTextColor;



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
