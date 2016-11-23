import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Groups from '../actions/groups';
import * as User from '../actions/user';
import { SERVER } from './constants';

import styles from './styles/Dashboard';
import {
  MainHeader,
  Blocks,
  FriendBlock,
} from './modules';

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      groups: [],
      loading: false,
    }
  }

  gotoGroup(groupId) {
    Actions.groupdashboard({
      group: this.props.user.groups[groupId],
      user: this.props.user,
    })
  }

  showNotifications() {
    Actions.notifications({notifications: this.props.user.notifications})
  }

  renderNotifications() {

    let notifications = this.props.user.notifications.length;

    if(!notifications > 0)
      return false;

    return (
      <TouchableHighlight style={styles.notifications}
        onPress={() => this.showNotifications()}
      >
        <Text style={styles.notificationsText}>{notifications} 📬</Text>
      </TouchableHighlight>
    )
  }

  render() {
    let showGroups  = [];
    let showLoading = [];

    if (this.props.groups.loading){
      showLoading =
                    <ActivityIndicator
                      animating={true}
                      style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 8,
                              height: 80,
                            }}
                      size="large"
                      color="#2ecc71"
                    /> ;
    } else {
      showGroups = false;
    }

    if(this.props.user.groups.length > 0) {
       showGroups = this.props.user.groups.map((a,b) => {

        let itemstyles = (a.unread == 0) ? styles.noUnreadDot : styles.unreadDot;
          return (
            <FriendBlock
              onPress={() => {this.gotoGroup(b)}}
              image={SERVER+a.image}
              name={a.name}
              unread={a.unread}
              key={b}
            />
          )
      })

    } else {
      showGroups = false;
    }

    return (
      <View style={styles.container}>
        {this.renderNotifications()}
        <ScrollView>
          <Text style={{fontSize: 20, textAlign: 'center', padding: 10,}}>
            {this.props.groups.message}
          </Text>

          {showLoading}

          <Blocks>
            {showGroups}
          </Blocks>
        </ScrollView>
      </View>
    );
  }
}
