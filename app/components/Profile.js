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
import * as Friends from '../actions/friends';

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

    let addAction = (

      <TouchableHighlight
        onPress={() => {
          this.props.dispatch(Friends.add(thisUser))
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
          this.props.dispatch(Friends.remove(thisUser))
        }}
      >
        <Text style={{fontSize: 22, color: '#c0392b', fontWeight: 'bold'}}>
          REMOVE FRIEND
        </Text>;
      </TouchableHighlight>

    )

    let userAction = [addAction, removeAction];

    let actionIndex = 0;

    /*

      MYE SPAGHETTI OG DRITT HER, PROBLEMET OG SELVE BUGGEN ER AT NÅR MAN SETTER INN
      NOE I VARIABELEN USERACTION SOM ET ANDRE ALTERNATIV SÅ FÅR BRÅTT OBJECTET
      ET ARRAY MED EN JÆVLA STYGG SEMIKOLON SOM IKKE GIR MENING OG SÅNN. FML

    */

    console.log(userAction);

    return (
      <View style={styles.container}>

      <MainHeader
        color="green"
        leftBtn="chevron-left"
        left={() => { Actions.pop() }}
      />

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: thisUser.image}}></Image>
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
                {userAction[actionIndex]}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
