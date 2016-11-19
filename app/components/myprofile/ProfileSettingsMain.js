import React, { Component } from 'react';
import {
  CameraRoll,
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
  AsyncStorage
} from 'react-native';
//import * as Route from '../../actions/route';
import * as User from '../../actions/user';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  Blocks,
  FriendBlock,
  MainHeader,
} from '../modules';
import styles from './styles/ProfileSettingsMain';


// Blueprints
function Profile(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
}

var currentGroup = new Profile();
  currentGroup.name = "Henrik6969";
  currentGroup.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";
  currentGroup.description = "Stor og lang";

class ProfileSettingsMain extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch({
      type: 'PROFILE_PAGE',
      payload: {
      }
    })
  }
  logOut() {
      this.props.dispatch(User.logoutUser());
  }

  render() {
    return (
      <View style={styles.container}>
      <MainHeader
        color="green"
        leftBtn="chevron-left"
        left={() => { Actions.pop() }}
       />
        <View style={styles.body}>
          <TouchableHighlight
          onPress = {() => {
            Alert.alert(
              'Get photo from:',
              '',
              [
                {text: 'Camera', onPress: () => {
                  Actions.challengecamera({camera: (picture) => {this.handlePicture(picture)}})
                }},
                {text: 'Library', onPress: () => {
                  Actions.profilecameraroll();
                }},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
              ]
            )
          }}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style={styles.groupImageView}>

            <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>
          </TouchableHighlight>
          <Text style = {styles.headerText}>Profile Settings</Text>
        </View>
        <ScrollView style = {styles.settingsContainer}>
        {/*Settings nr 1*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Username</Text>
            <Text style = {styles.settingsTextRight}>{currentGroup.name}</Text>

          </View>
          {/*Settings nr 2*/}
          <TouchableHighlight
          onPress = {() => {
            Actions.profilebioedit();
          }}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {styles.setting}>
            <View style = {{flexDirection: 'row',}}>
              <Text style = {styles.settingsTextLeft}>Bio</Text>
              <Text style = {styles.settingsTextRight}>Bio preview</Text>
            </View>
          </TouchableHighlight>

          {/*Settings nr 3*/}
          <View
          style = {[
            styles.setting,
            {
              borderTopWidth: 3,
              borderBottomWidth: 1,
            }]}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style = {styles.settingsTextLeft}>Friend requests</Text>
              <Switch
              value={(this.state && this.state.switchValue3) || false}
              onValueChange={(value) => {
                this.setState({switchValue3: value})
              }}
              // Color props are iOS-only
              // thumbTintColor={'white'} // Removes shadow
              tintColor={"rgba(230,230,230,1)"}
              onTintColor={"rgba(68,219,94,1)"}
              style = {styles.switch}
            />
            </View>
          </View>
          {/*Settings nr 4*/}
          <View style = {styles.setting}>
            <Text style = {styles.settingsTextLeft}>Group invites</Text>
            <Switch
            value={(this.state && this.state.switchValue) || false}
            onValueChange={(value) => {
              this.setState({switchValue: value})
            }}
            // Color props are iOS-only
            // thumbTintColor={'white'} // Removes shadow
            tintColor={"rgba(230,230,230,1)"}
            onTintColor={"rgba(68,219,94,1)"}
            style = {styles.switch}
          />
          </View>
          {/*Settings nr 5*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 3,
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
            'Warning: ',
            'Are you sure you want to log out?',
            [
              {text: 'Yes', onPress: () => this.logOut()},
              {text: 'No', onPress: () => console.log('No Pressed')},
            ]
          )
          }}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {styles.logout}>
            <Text style = {styles.redText}>Log out</Text>

          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}

export default connect(state => ({
    state
})
)(ProfileSettingsMain);
