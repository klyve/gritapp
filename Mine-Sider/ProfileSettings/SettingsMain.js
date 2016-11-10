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
  Alert
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 10;

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

export default class social extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}/>
        <View style={styles.body}>

          <Text style={styles.headerText}>{currentGroup.name}</Text>
          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>
          </View>
        </View>
        <View style = {styles.settingsContainer}>
        {/*Settings nr 1*/}
          <View style = {[
            styles.setting,
            {
              borderTopWidth: 1,
              borderBottomWidth: 1,
            }]}>
            <Text style = {styles.settingsTextLeft}>Username</Text>
            <Text style = {{
            color: 'grey',
            fontSize: 18,
            width: 250,
            marginLeft: 40,
            }}>{currentGroup.name}</Text>

          </View>
          {/*Settings nr 2*/}
          <View style = {[
            styles.setting,
            {
              borderBottomWidth: 3,
            }]}>
            <Text style = {styles.settingsTextLeft}>Bio</Text>
            <Text style = {[styles.settingsTextRight, {}]}>"14cm +"</Text>
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
            <Text style = {[styles.settingsTextLeft,{width: 300}]}>Friend requests</Text>
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
            <Image
            source = {require('./images/deleteButton.png')}
            style = {styles.settingsButton}/>
          </View>
          {/*Settings nr 6*/}
          <TouchableHighlight
          onPress = {() => {
          Alert.alert(
            'Warning: ',
            'Are you sure you want to log out?',
            [
              {text: 'Yes', onPress: () => console.log('Yes pressed')},
              {text: 'No', onPress: () => console.log('No Pressed')},
            ]
          )
          }}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {{
              borderBottomWidth: 1,
              borderColor: 'rgba(0,0,0,0.3)',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
            }}>
            <Text
            style = {{ color: 'red', fontSize: 18, }}>
              Log out
            </Text>

          </TouchableHighlight>

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
    borderTopWidth: 2,
    borderColor: '#ffffff',
    flex: 1/2.5,
    alignItems: 'center',
    backgroundColor: '#3fc380',
  },
  groupImageView: {
    backgroundColor: '#3fc380',
    alignItems: 'center',
  },
  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    marginTop: MARGIN,
  },
  headerText: {
    paddingTop: 5,
    fontWeight: 'normal',
    fontSize: 18,
    textDecorationLine: 'underline',
    color: '#ffffff',
    backgroundColor: '#3fc380',
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
  switch: {
    marginLeft: 100,
  },
});

AppRegistry.registerComponent('social', () => social);
