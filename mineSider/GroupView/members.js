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

function person(){
  this.name = "";
  this.picturePath = "";
  this.friends = [];
  this.score;
}



var currentGroup = new Group();
  currentGroup.name = "Pølsefest";
  currentGroup.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  currentGroup.description = "Vi liker pølser, de er best";
  currentGroup.public = false;


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


var rest = [f1,f2,f3,f4,f5];

groupColor = (currentGroup.public) ? '#3498db' : '#c0392b';


export default class social extends Component {
  render() {

    let groupBannerColor = (currentGroup.public) ? styles.blueBannerColor : styles.redBannerColor;
    let groupTitleColor = (currentGroup.public) ? styles.blueTextColor : styles.redTextColor;

      let showMembers = rest.map((a,b) => {
          return (
                <TouchableHighlight
                 onPress = {() => {}}
                 key = {b}
                 activeOpacity={71 / 100}
                 underlayColor={"rgb(210,210,210)"}
                 style={styles.personButton}>
                  <View style={styles.personBody}>
                    <Image style={styles.personImage} source={{uri: a.picturePath}}></Image>

                    <Text style={styles.friendText}> {a.name}</Text>
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
                  <Text style={styles.groupTabText}>Challenges</Text>
                </View>

                <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
                  <Text style={{color: groupColor, fontSize: 16,}}>Members</Text>
                </View>
              </View>

              <View style={{flex: 12, backgroundColor: '#f0f0f0', paddingTop: MARGIN,}}>
                <ScrollView>

                  {showMembers}

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
  personImage: {
    width: 40,
    height: 40,
    marginLeft: MARGIN,
    borderRadius: 20,
  },


  personBody: {
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
  friendText: {
    fontSize: 18,
    marginLeft: MARGIN,
  },

  personButton: {
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },
});

AppRegistry.registerComponent('social', () => social);
