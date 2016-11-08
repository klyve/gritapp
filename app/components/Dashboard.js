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

import styles from './styles/Dashboard';

function Group(){
  this.name;
  this.picturePath;
  this.description;
  this.unread;
  this.public;
}

// Testdata
var ntnu = new Group();
  ntnu.name = "NTNU";
  ntnu.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  ntnu.description = "Offentlig gruppe for NTNU! :)";
  ntnu.unread = 3;
  ntnu.public = true;

var gjovik = new Group();
  gjovik.name = "Gjøvik";
  gjovik.picturePath = "http://pilegrimsleden.no/uploads/made/uploads/images/Om/POI/Kommunevaapen/390px-Gjoevik_komm.svg_600_738_s.png";
  gjovik.description = "Vi utfordrer Gjøvik!";
  gjovik.unread = 23;
  gjovik.public = true;

var polse = new Group();
  polse.name = "Pølsefest";
  polse.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  polse.description = "Jeg liker milfs...";
  polse.unread = 143;
  polse.public = false;

// Legger inn testdata
var groups = [ntnu, gjovik, polse];

export default class Dashboard extends Component {

  render() {

    let showGroups = groups.map((a,b) => {

      let itemstyles = (a.unread == 0) ? styles.noUnreadDot : styles.unreadDot;
      return <TouchableHighlight
        onPress = {() => {}}
        key = {b}
        activeOpacity={71 / 100}
        underlayColor={"rgb(210,210,210)"}
        style = { [styles.button] }>
        <View style={styles.group}>
            <Image style={styles.groupImage} source={{uri: a.picturePath}}></Image>

            <Text style={styles.groupText}> {a.name} </Text>

            <View style={itemstyles}>
              <Text style={styles.unreadDotNumber}>
                {(a.unread > 99) ? 99 : a.unread}
              </Text>
            </View>
        </View>
      </TouchableHighlight>

    })

    return (
      <View style={styles.container}>
        {showGroups}
      </View>
    );
  }
}
