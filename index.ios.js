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

// Blueprints
function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
  this.currentChallenges = [];
  this.public;
}

var currentGroup = new Group();
  currentGroup.name = "Pølsefest";
  currentGroup.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  currentGroup.description = "Vi liker pølser, de er best";
  currentGroup.public = false;

export default class social extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}/>
        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>
          </View>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View style = {styles.settingsContainer}>
        {/*Settings nr 1*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Group Name</Text>
            <Text style = {styles.settingsTextRight}>{currentGroup.name}</Text>
            <Image
            source = {require('./images/deleteButton.png')}
            style = {styles.settingsButton}/>
          </View>
          {/*Settings nr 2*/}
          <View style = {[
            styles.setting,
            {
              borderBottomWidth: 3,
            }]}>
            <Text style = {styles.settingsTextLeft}>Description</Text>
            <Text style = {[styles.settingsTextRight, {}]}>"Sausages"</Text>
            <Image
            source = {require('./images/deleteButton.png')}
            style = {styles.settingsButton}/>
          </View>
          {/*Settings nr 3*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 2,
              borderBottomWidth: 1,
            }]}>
            <Text style = {[styles.settingsTextLeft,{width: 300}]}>Manage members</Text>
            <Image
            source = {require('./images/deleteButton.png')}
            style = {styles.settingsButton}/>
          </View>
          {/*Settings nr 4*/}
          <View style = {[
            styles.setting,
            {
              borderBottomWidth: 3,
            }]}>
            <Text style = {styles.settingsTextLeft}>Public/Private</Text>
            <Text style = {styles.settingsTextRight}>(switch)</Text>
            <Image
            source = {require('./images/deleteButton.png')}
            style = {styles.settingsButton}/>
          </View>
          {/*Settings nr 5*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 2,
              borderBottomWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Push notifications</Text>
            <Text style = {styles.settingsTextRight}>(switch)</Text>
            <Image
            source = {require('./images/deleteButton.png')}
            style = {styles.settingsButton}/>
          </View>
          {/*Settings nr 6*/}
          <View style = {[
            styles.setting,
            {
              borderBottomWidth: 1,
            }]}>
            <Text style = {{
              color: 'red',
              width: 300,
              fontSize: 18,
            }}>
            Leave Group</Text>
            <Image
            source = {require('./images/deleteButton.png')}
            style = {styles.settingsButton}/>
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
    flex: 1/7,
    backgroundColor: '#3fc380',
  },
  body: {
    flex: 1/3,
    alignItems: 'center',
  },
  groupImageView: {
    alignItems: 'center',
  },
  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    top: -60,
  },
  headerText: {
    marginTop: -50,
    fontSize: 30,
    color: '#3fc380',
  },
  settingsContainer: {
    backgroundColor: 'white',
    flex: 1/1.5,
  },
  setting: {
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    height: 50,
    borderColor: 'rgba(0,0,0,0.3)',
  },
  settingsTextLeft: {
    color: 'grey',
    fontSize: 18,
    width: 200,
  },
  settingsTextRight: {
    color: 'grey',
    fontSize: 18,
    width: 100,
  },
  settingsButton: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
});

AppRegistry.registerComponent('social', () => social);
