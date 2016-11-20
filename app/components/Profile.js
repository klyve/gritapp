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
import styles from './styles/profile';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';

import {
  MainHeader,
  Blocks,
  FriendBlock
} from './modules';

var groupColor;

// Blueprints
function person(){
  this.name;
  this.picturePath;
  this.description;
}

export default class Profile extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    let mainUser = this.props.mainUser;
    let thisUser = this.props.thisUser;

    let userAction = (mainUser.friends.indexOf(thisUser) < 0) ?

                      <Text
                        style={{fontSize: 22, color: '#2ecc71', fontWeight: 'bold'}}
                        onPress={() => {}}
                      >
                        ADD FRIEND
                      </Text>

                :
                      <Text
                        style={{fontSize: 22, color: '#c0392b', fontWeight: 'bold'}}
                        onPress={() => {}}
                      >
                        REMOVE FRIEND
                      </Text>;


    console.log(mainUser.friends.indexOf(thisUser));


    return (
      <View style={styles.container}>

      <MainHeader
        color="green"
        leftBtn="chevron-left"
        left={() => { Actions.pop() }}
      />

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: this.props.thisUser.image}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={styles.groupTitleText}>{this.props.thisUser.nick}</Text>

              <Text style={styles.groupDescriptionText}>{this.props.thisUser.bio}</Text>
            </View>

            <View style={styles.tabs}>

              <View style={{flex: 2, backgroundColor: '#f0f0f0', paddingTop: 5,}}>
              </View>

              <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                {userAction}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
