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
import {
  MainHeader,
  Blocks,
  FriendBlock
} from '../modules'
import { Actions } from 'react-native-router-flux';

//Constants
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

var currentGroup = new Group();
  currentGroup.name = "Gjøvik";
  currentGroup.picturePath = "https://cdn.pixabay.com/photo/2015/09/18/11/37/rustic-945421_960_720.jpg";
  currentGroup.description = "Vi utfordrer Gjøvik!";
  currentGroup.public = true;


groupColor = (currentGroup.public) ? '#3498db' : '#c0392b';


export default class GroupJoin extends Component {
  render() {

    let groupBannerColor = (currentGroup.public) ? styles.blueBannerColor : styles.redBannerColor;
    let groupTitleColor = (currentGroup.public) ? styles.blueTextColor : styles.redTextColor;


    return (
      <View style={styles.container}>
        <MainHeader
          color="red"
          title="Profile"
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
          large
        />

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

              <View style={{flex: 2, backgroundColor: '#f0f0f0', paddingTop: MARGIN,}}>
              </View>

              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: groupColor, fontSize: 22, fontWeight: 'bold'}}> JOIN </Text>
              </View>


            </View>

          </View>

        </View>

      </View>
    );
  }
}
