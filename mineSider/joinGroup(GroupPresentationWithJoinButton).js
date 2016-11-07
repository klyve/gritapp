import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

// Blueprints
function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
}

var currentGroup = new Group();
  currentGroup.name = "NTNU";
  currentGroup.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  currentGroup.description = "Offentlig gruppe for NTNU!";



export default class social extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}></View>

        <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>

          <Text style={styles.groupTitleText}>
            {currentGroup.name}
          </Text>

        <View style={styles.groupDescription}>
          <Text style={styles.groupDescriptionText}>
            {currentGroup.description}
          </Text>
        </View>

        <TouchableHighlight style={styles.JoinGroup}>
          <Text style={styles.joinGroupText}>
            JOIN
          </Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  groupImage: {
    width: DEVICE_WIDTH / 2,
    height: DEVICE_WIDTH / 2,
    borderRadius: DEVICE_WIDTH / 3,
    marginTop: - DEVICE_WIDTH / 10,
    borderWidth: 10,
    borderColor: '#f0f0f0',
  },
  groupDescription: {
    marginTop: DEVICE_WIDTH / 15,
  },
  groupDescriptionText: {
    fontSize: 16,
  },
  groupTitleText:{
    fontSize: 30,
    color: '#2ecc71',
  },
  joinGroupText: {
    fontSize: 25,
    color: '#2ecc71',
  },
  JoinGroup: {
    position: 'absolute',
    left: DEVICE_WIDTH / 2 - 30,
    bottom: DEVICE_HEIGHT / 10,
  }
});

AppRegistry.registerComponent('social', () => social);
