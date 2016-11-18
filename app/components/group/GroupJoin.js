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
import styles from './styles/groupjoin';

//Constants
const MARGIN = 10;

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


  var groupColor = (currentGroup.public) ? 'blue' : 'red';
  var groupColorHex = (currentGroup.public) ? '#2574a9' : '#c0392b';


export default class GroupJoin extends Component {
  render() {


    return (
      <View style={styles.container}>
        <MainHeader
          color={groupColor}
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
        />

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={{fontSize: 30, color: groupColorHex}}>{currentGroup.name}</Text>
              <Text style={styles.groupDescriptionText}>{currentGroup.description}</Text>
            </View>

            <View style={styles.tabs}>

              <View style={{flex: 2, backgroundColor: '#f0f0f0', paddingTop: MARGIN,}}></View>

              <TouchableHighlight
              onPress={() => {alert(">INSERT JOIN-FUNCTION HERE<")}}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: groupColorHex, fontSize: 22, fontWeight: 'bold'}}> JOIN </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
