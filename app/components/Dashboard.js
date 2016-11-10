import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Blocks,
  FriendBlock
} from './modules'

import styles from './styles/Dashboard';


export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
    }
  }
  gotoGroup(groupId) {
      Actions.groupdashboard(groups[groupId])
  }

  showNotifications() {

  }

  renderNotifications() {
    let notifications = 13;
    if(notifications <= 0)
      return false;

    return (
      <TouchableHighlight style={styles.notifications}
        onPress={() => this.showNotifications()}
      >
        <Text style={styles.notificationsText}>Notifications {notifications}</Text>
      </TouchableHighlight>
    )

  }

  componentDidMount() {
    fetch('http://localhost:3000/api/groups')
      .then((response) => response.json())
      .then((json) => {
        this.setState(json);
      })
  }

  render() {

    let showGroups = this.state.groups.map((a,b) => {

      let itemstyles = (a.unread == 0) ? styles.noUnreadDot : styles.unreadDot;
      return (
        <FriendBlock
          onPress={() => {this.gotoGroup(b)}}
          image={a.picturePath}
          name={a.name}
          unread={a.unread}
          key={b}
        />
      )
    })

    return (
      <View style={styles.container}>
        {this.renderNotifications()}
        <ScrollView style={styles.scrollView}>
          {showGroups}
        </ScrollView>
      </View>
    );
  }
}
