import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';
import {
  MainHeader,
  Blocks,
  FriendBlock
} from './modules';
import styles from './styles/notifications';
import { Actions } from 'react-native-router-flux';


export default class Notifications extends Component {
  constructor() {
    super();
  }
  render() {
    let showRequests = this.props.notifications.map((a, b) => {
      return (
        <FriendBlock
          onPress={() => {}}
          image={a.sender.image}
          name={a.type}
          key={b}
          small
        />
      )
  })
    return (
      <View style={styles.container}>
        <MainHeader
          title="Invites"
        />
        <View style = {styles.body}>
          <ScrollView style = {styles.requestContainer}>
            {showRequests}
          </ScrollView>
        </View>

        <TouchableHighlight
          onPress={() => {
            Actions.pop()
          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {styles.closePage}
        >
          <Text style={styles.closeButtonText}>CLOSE</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
