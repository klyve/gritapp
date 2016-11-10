import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Blocks,
  FriendBlock
} from './modules'

import styles from './styles/Dashboard';

function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
  this.unread = 0;
}

var groups = [];

// Testdata
var ntnu = new Group();
  ntnu.name = "NTNU";
  ntnu.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  ntnu.description = "Offentlig gruppe for NTNU! :)";
  ntnu.unread = 3;

var gjovik = new Group();
  gjovik.name = "Gjøvik";
  gjovik.picturePath = "http://pilegrimsleden.no/uploads/made/uploads/images/Om/POI/Kommunevaapen/390px-Gjoevik_komm.svg_600_738_s.png";
  gjovik.description = "Vi utfordrer Gjøvik!";
  gjovik.unread = 23;

var polse = new Group();
  polse.name = "Pølsefest";
  polse.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  polse.description = "Jeg liker milfs...";
  polse.unread = 143;

// Legger inn testdata
groups.push(ntnu);
groups.push(gjovik);
groups.push(polse);

export default class Dashboard extends Component {

  gotoGroup(groupId) {
      Actions.groupdashboard(groups[groupId])
  }

  render() {

    let showGroups = groups.map((a,b) => {

      let itemstyles = (a.unread == 0) ? styles.noUnreadDot : styles.unreadDot;
      return (
        <FriendBlock
          onPress={() => {this.gotoGroup(b)}}
          image={a.picturePath}
          name={a.name}
          unread={a.unread}
          key={b}
        />
      )
    })

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {showGroups}
        </ScrollView>
      </View>
    );
  }
}
