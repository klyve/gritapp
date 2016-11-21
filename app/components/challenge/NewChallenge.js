import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import {
  MainHeader,
  Blocks,
  FriendBlock
} from '../modules'

import {
  MARGIN,
  HEADER_HEIGHT
} from '../constants';

import { Actions } from 'react-native-router-flux';


import * as Groups from '../../actions/groups';
import styles from './styles/NewChallenge';


export default class NewChallenge extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      text2: ''
    }
  }

  createChallenge() {
    this.props.dispatch(Groups.createChallenge({
      name: this.state.text,
      description: this.state.text2,
      time: +new Date + 60 * 60 * 24 * 1000,
      groupid: this.props.groupid
    }))
    Actions.pop();
  }

  render() {
    let groupBannerColor = (this.props.grouptype == "public") ? styles.blueBannerColor : styles.redBannerColor;
    let groupTitleColor = (this.props.grouptype == "public") ? styles.blueTextColor : styles.redTextColor;
    let groupColor = (this.props.grouptype == "public") ? 'blue' : 'red';
    let groupColorHex = (this.props.grouptype == "public") ? '#2574a9' : '#c0392b';

    return (
      <View style = {styles.container}>
        <MainHeader
          color = {groupColor}
          title="Create Challenge"
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
          right={() => {  }}
        />
        <View style = {styles.body}>
          <View style = {styles.name}>
            <Text style = {styles.headerText}>Challenge name: </Text>
            <TextInput
             style={styles.smallTextInput}
             underlineColorAndroid='rgba(0,0,0,0)'
             maxLength = {22}
             placeholder={'Type here'}
             placeholderTextColor={"black"}
             onChangeText={(text) => this.setState({text})}
             onSubmitEditing={() => {this.setState({text: ''})}}
             value={(this.state && this.state.text) || ''}
             />
          </View>
          <View style = {styles.description}>
            <Text style = {styles.headerText}>Description: </Text>
            <TextInput
             style={styles.largeTextInput}
             underlineColorAndroid='rgba(0,0,0,0)'
             maxLength = {255}
             numberOfLines = {10}
             multiline = {true}
             placeholder={'Type here'}
             placeholderTextColor={"black"}
             onChangeText={(text2) => this.setState({text2})}
             value={(this.state && this.state.text2) || ''}
             />
          </View>
          <View>
            <TouchableHighlight
            style = {[styles.createButton, {backgroundColor: groupColorHex}]}
            activeOpacity={71 / 100}
            underlayColor={"rgb(210,210,210)"}
            onPress = {() => {
              this.createChallenge();
            }}
            >
              <Text style = {styles.buttonText}>Create</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

    );
  }
}
