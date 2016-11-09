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
function person(){
  this.name;
  this.picturePath;
  this.description;
}

var currentPerson = new person();
  currentPerson .name = "ArabBeauty95";
  currentPerson.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";
  currentPerson.description = "Hei jeg heter Atbin, jeg liker det meste så kom som du er. Du finner meg på din lokale fest";


export default class social extends Component {
  render() {


    return (
      <View style={styles.container}>

        <View style={styles.navBar}/>

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: currentPerson.picturePath}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={styles.groupTitleText}>{currentPerson.name}</Text>

              <Text style={styles.groupDescriptionText}>{currentPerson.description}</Text>
            </View>

            <View style={styles.tabs}>

              <View style={{flex: 2, backgroundColor: '#f0f0f0', paddingTop: MARGIN/2,}}>
              </View>

              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#2ecc71', fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}> ADD FRIEND </Text>
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
    backgroundColor: '#2ecc71',
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
    marginLeft: MARGIN,
    marginRight: MARGIN,
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


  groupTitleText:{
    fontSize: 30,
    color: '#2ecc71',
    paddingTop: MARGIN,
  },
  groupDescriptionText: {
    fontSize: 18,
    paddingTop: MARGIN*2,
    textAlign: 'center',
  },

});

AppRegistry.registerComponent('social', () => social);
