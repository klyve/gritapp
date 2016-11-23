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
  AsyncStorage,
  TextInput
} from 'react-native';
//import * as Route from '../../actions/route';
import * as User from '../../actions/user';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { SERVER } from '../constants';

import {
  Blocks,
  FriendBlock,
  MainHeader,
} from '../modules';
import styles from './styles/ProfileSettingsMain';


class ProfileSettingsMain extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch({
      type: 'PROFILE_PAGE',
      payload: {
      }
    })
    console.log(this.props)
  }
  logOut() {
      this.props.dispatch(User.logoutUser());
  }

  handlePicture(picture) {
    this.props.dispatch(User.uploadPicture(picture));
  }
  updateUserSettings(obj) {
    this.props.dispatch(User.updateUserSettings(obj))
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

            <Image style={styles.groupImage} source={{uri: SERVER+this.props.user.image}}></Image>
          </TouchableHighlight>
          <Text style = {styles.headerText}>Profile Settings</Text>
        </View>
        <ScrollView style = {styles.settingsContainer}>
        {/*Settings nr 1*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Username</Text>
            <Text style = {styles.settingsTextRight}>{this.props.user.nick}</Text>

          </View>
          {/*Settings nr 2*/}
          <TouchableHighlight
          onPress = {() => {
            Actions.profilebioedit();
          }}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {[
            styles.setting,
            {
              borderTopWidth: 1,
            }]}>
            <View style = {{flexDirection: 'row',}}>
              <Text style = {styles.settingsTextLeft}>Bio</Text>
              <TextInput
              value = {this.props.user.bio}
              editable = {false}
              style = {styles.settingsTextRight}/>
            </View>
          </TouchableHighlight>

          {/*Settings nr 3*/}
          <View
          style = {[
            styles.setting,
            {
              borderTopWidth: 1,
            }]}>
              <Text style = {styles.settingsTextLeft}>Friend requests</Text>
              <Switch
              value={this.props.user.options.friendRequest}
              onValueChange={(value) => {
                this.updateUserSettings({type: 'friendRequest', value})
              }}
              // Color props are iOS-only
              // thumbTintColor={'white'} // Removes shadow
              //tintColor={"rgba(230,230,230,1)"}
              //onTintColor={"rgba(68,219,94,1)"}
              style = {styles.switch}
            />
          </View>
          {/*Settings nr 4*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Group invites</Text>
            <Switch
            value={this.props.user.options.groupRequest}
            onValueChange={(value) => {
              this.updateUserSettings({type: 'groupRequest', value})
            }}
            // Color props are iOS-only
            // thumbTintColor={'white'} // Removes shadow
            //tintColor={"rgba(230,230,230,1)"}
            //onTintColor={"rgba(68,219,94,1)"}
            style = {styles.switch}
          />
          </View>
          {/*Settings nr 5*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Push notifications</Text>
            <Switch
            value={this.props.user.options.pushNotifications}
            onValueChange={(value) => {
              this.updateUserSettings({type: 'pushNotifications', value})
            }}
            // Color props are iOS-only
            // thumbTintColor={'white'} // Removes shadow
            //tintColor={"rgba(230,230,230,1)"}
            //onTintColor={"rgba(68,219,94,1)"}
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
    user: state.user,
    state
})
)(ProfileSettingsMain);
