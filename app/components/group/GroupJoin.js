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
import {
  MainHeader,
  Blocks,
  FriendBlock
} from '../modules'
import { Actions } from 'react-native-router-flux';
import styles from './styles/groupjoin';
import * as Groups from '../../actions/groups';

//Constants
const MARGIN = 10;



export default class GroupJoin extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let groupColor = (this.props.group.grouptype == "public") ? 'blue' : 'red';
    let groupColorHex = (this.props.group.grouptype == "public") ? '#2574a9' : '#c0392b';


    return (
      <View style={styles.container}>
        <MainHeader
          color={groupColor}
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
        />

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: this.props.group.image}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={{fontSize: 30, color: groupColorHex}}>{this.props.group.name}</Text>
              <Text style={styles.groupDescriptionText}>{this.props.group.bio}</Text>
            </View>

            <View style={styles.tabs}>

              <View style={{flex: 2, backgroundColor: '#f0f0f0', paddingTop: MARGIN,}}></View>

              <TouchableHighlight
              onPress={() => {this.props.dispatch(Groups.joinGroup(this.props.group))}}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: groupColorHex, fontSize: 22, fontWeight: 'bold'}}> JOIN </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
