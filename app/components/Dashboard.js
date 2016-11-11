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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  MainHeader,
  Blocks,
  FriendBlock,
} from './modules'

import * as groups from '../actions/groups'



import styles from './styles/Dashboard';


class Dashboard extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      groups: [],
    }
  }
  gotoGroup(groupId) {
      Actions.groupdashboard(this.props.groups[groupId])
  }

  showNotifications() {
    Actions.notifications()
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
  componentWillMount() {
    let { dispatch } = this.props
    dispatch(groups.getUserGroups());
  }

  render() {

    let showGroups = this.props.groups.map((a,b) => {

      let itemstyles = (a.unread == 0) ? styles.noUnreadDot : styles.unreadDot;
      return (
        <FriendBlock
          onPress={() => {this.gotoGroup(b)}}
          image={a.image}
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


export default connect(state => ({
    groups: state.groups.groups
  })
)(Dashboard);
