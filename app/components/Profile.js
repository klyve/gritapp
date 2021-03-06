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
import { connect } from 'react-redux';

import { Icon } from 'react-native-elements';
import * as Friends from '../actions/friends';
import * as User from '../actions/user';
import { SERVER } from './constants';

import { IMAGEPATH } from './constants';
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

class Profile extends Component {

  constructor(props) {
    super(props)

  }
  render() {
    let mainUser = this.props.mainUser;
    let thisUser = this.props.thisUser;
    let addAction = (

      <TouchableHighlight
        onPress={() => {
          this.props.dispatch(Friends.add(thisUser))
          this.props.dispatch(User.getUserData())
          this.props.dispatch(User.getNotifications())
          Actions.pop();
        }}
      >
        <Text style={{fontSize: 22, color: '#2ecc71', fontWeight: 'bold'}}>
          ADD FRIEND
        </Text>
      </TouchableHighlight>

    )

    let removeAction = (

      <TouchableHighlight
        onPress={() => {
          this.props.dispatch(Friends.remove(thisUser));
          this.props.dispatch(User.getUserData())
          this.props.dispatch(User.getNotifications())
          Actions.pop();
        }}
      >
        <Text style={{fontSize: 22, color: '#c0392b', fontWeight: 'bold'}}>
          REMOVE FRIEND
        </Text>
      </TouchableHighlight>

    )

    let userAction = addAction;

    for (let i = 0; i < mainUser.friends.length; i++){
      if (mainUser.friends[i]._id == thisUser._id)
        userAction = removeAction;
    }

    return (
      <View style={styles.container}>

      <MainHeader
        color="green"
        leftBtn="chevron-left"
        left={() => { Actions.pop() }}
      />

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: SERVER+thisUser.image}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={styles.groupTitleText}>{thisUser.nick}</Text>

              <Text style={styles.groupDescriptionText}>{thisUser.bio}</Text>
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

export default connect(state => ({
    state,
  })
)(Profile);
