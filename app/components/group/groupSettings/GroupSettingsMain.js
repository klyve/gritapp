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
  Switch,
  Alert,
  TextInput,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {
  Blocks,
  FriendBlock
} from '../../modules'

import styles from './styles/groupsettingsmain';

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
  currentGroup.name = "Pølsefest";
  currentGroup.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  currentGroup.description = "Vi liker pølser, de er best";
  currentGroup.public = false;

export default class GroupSettingsMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: currentGroup.name,
    };
    this.state2 = {
      text: currentGroup.description,
    };
  }
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
            <TextInput
            style = {[styles.settingsTextRight, {marginLeft: 50}]}
            value = {this.state.text}
            onChangeText={(text) => this.setState({text})}
            editable = {true}
            maxLength = {16}
            />
          </View>
          {/*Settings nr 2*/}
          <View style = {[styles.setting,{borderBottomWidth: 3,}]}>
            <Text style = {styles.settingsTextLeft}>Description</Text>
            <TextInput
            style = {styles.settingsTextRight}
            value = {this.state2.text}
            onChangeText={(text) => this.setState({text})}
            editable = {false}
            maxLength = {16}
            />
            <TouchableHighlight
            activeOpacity={71 / 100}
            underlayColor={"rgb(210,210,210)"}
            onPress = {() => {}}
            style = {styles.settingsButton}>
              <Text>X</Text>
            </TouchableHighlight>
          </View>
          {/*Settings nr 3*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 2,
              borderBottomWidth: 1,
            }]}>
            <Text style = {[styles.settingsTextLeft,{width: 300}]}>Manage members</Text>
            <TouchableHighlight
            activeOpacity={71 / 100}
            underlayColor={"rgb(210,210,210)"}
            onPress = {() => {}}
            style = {[styles.settingsButton, {marginLeft: 35}]}>
              <Text>X</Text>
            </TouchableHighlight>
          </View>
          {/*Settings nr 4*/}
          <View style = {[
            styles.setting,
            {
              borderBottomWidth: 3,
            }]}>
            <Text style = {styles.settingsTextLeft}>Public</Text>
            <Switch
          value={(this.state && this.state.switchValue) || false}
            onValueChange={(value) => {
              this.setState({switchValue: value})
            }}
            // Color props are iOS-only
            // thumbTintColor={'white'} // Removes shadows
            tintColor={"rgba(230,230,230,1)"}
            onTintColor={"rgba(68,219,94,1)"}
            style = {styles.switch}
          />
          </View>
          {/*Settings nr 5*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 2,
              borderBottomWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Push notifications</Text>
            <Switch
            value={(this.state && this.state.switchValue2) || false}
            onValueChange={(value) => {
              this.setState({switchValue2: value})
            }}
            // Color props are iOS-only
            // thumbTintColor={'white'} // Removes shadow
            tintColor={"rgba(230,230,230,1)"}
            onTintColor={"rgba(68,219,94,1)"}
            style = {styles.switch}
          />

          </View>
          {/*Settings nr 6*/}
          <TouchableHighlight
          onPress = {() => {
          Alert.alert(
            'Warning',
            'Are you sure you want to leave this group?',
            [
              {text: 'Yes', onPress: () => console.log('Yes pressed')},
              {text: 'No', onPress: () => console.log('No Pressed')},
            ]
          )
          }}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {{
              marginTop: 90,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: 'rgba(0,0,0,0.3)',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
            }}>
            <Text
            style = {{ color: 'red', fontSize: 18, }}>
              Leave Group
            </Text>

          </TouchableHighlight>

        </View>

      </View>

    );
  }
}
