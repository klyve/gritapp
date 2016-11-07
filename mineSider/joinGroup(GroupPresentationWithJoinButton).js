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

console.disableYellowBox = true;

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
  currentGroup.name = "Gjøvik";
  currentGroup.picturePath = "http://pilegrimsleden.no/uploads/made/uploads/images/Om/POI/Kommunevaapen/390px-Gjoevik_komm.svg_600_738_s.png";
  currentGroup.description = "Vi utfordrer Gjøvik!";



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
          <Text> </Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', width: DEVICE_WIDTH, height: DEVICE_HEIGHT / 8, alignItems: 'center', backgroundColor: '#f0f0f0'}}>
          <Text style={{color: '#2ecc71', fontSize: 22, position: 'absolute', bottom: DEVICE_HEIGHT / 10, left: DEVICE_HEIGHT / 3.8}}>JOIN</Text>
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
  groupImage: {
    width: DEVICE_WIDTH / 2.5,
    height: DEVICE_WIDTH / 2.5,
    borderRadius: DEVICE_WIDTH / 3,
    marginTop: - DEVICE_WIDTH / 10,
    borderWidth: 10,
    borderColor: '#ffffff',
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
