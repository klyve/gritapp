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

import {
  Blocks,
  FriendBlock,
  MainHeader,
} from '../modules';
import styles from './styles/ProfileSettingsMain';

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


var myProfile = {
  name: "Morten",
  profilepicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg",
  description: "Keeping it real since 1997",
}

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

  handlePicture(picture) {
    Actions.pop({popNum: 2})
    console.log("Image is",picture)
    myProfile.profilepicture = picture;
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

            <Image style={styles.groupImage} source={{uri: myProfile.profilepicture}}></Image>
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
            <Text style = {styles.settingsTextRight}>{myProfile.name}</Text>

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
              <TextInput
              value = {myProfile.description}
              editable = {false}
              style = {styles.settingsTextRight}/>
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
