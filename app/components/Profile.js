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

var currentPerson = new person();
  currentPerson .name = "ArabBeauty95";
  currentPerson.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";
  currentPerson.description = "Hei jeg heter Atbin, jeg liker det meste så kom som du er. Du finner meg på din lokale fest";


export default class Profile extends Component {

  constructor(props) {
    super(props)
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

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: this.props.user.image}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={styles.groupTitleText}>{this.props.user.nick}</Text>

              <Text style={styles.groupDescriptionText}>{this.props.user.bio}</Text>
            </View>

            <View style={styles.tabs}>

              <View style={{flex: 2, backgroundColor: '#f0f0f0', paddingTop: 5,}}>
              </View>

              <View style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <Icon
                    name='user-plus'
                    type='font-awesome'
                    size={50}
                    color='#2ecc71'
                    underlayColor='transparent'
                    onPress={() => {}}
                  />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
