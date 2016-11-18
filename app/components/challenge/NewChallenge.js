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
  Alert,
  TextInput,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {
  MainHeader,
  Blocks,
  FriendBlock,
} from '../modules';

import styles from './styles/NewChallenge';


export default class NewChallenge extends Component {
  render() {
    let timeLimit = "24h"
    return (
      <View style = {styles.container}>
        <MainHeader
          color='#2ecc71'
          title="Create Challenge"
          rightBtn="plus"
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
          right={() => {  }}
        />
        <View style = {styles.body}>
          <View style = {styles.name}>
            <Text style = {styles.headerText}>Challenge name: </Text>
            <TextInput
             style={styles.textInput}
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
             style={styles.textInput}
             maxLength = {255}
             numberOfLines = {10}
             multiline = {true}
             placeholder={'Type here'}
             placeholderTextColor={"black"}
             onChangeText={(text2) => this.setState({text2})}
             value={(this.state && this.state.text2) || ''}
             />
          </View>
          <View style = {styles.time}>
            <Text style = {styles.headerText}>Time limit (optional)</Text>
            <Text style = {styles.timeLimitText}>{timeLimit}</Text>
          </View>


        </View>
      </View>

    );
  }
}
