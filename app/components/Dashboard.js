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
  componentWillMount() {
    this.props.dispatch(Groups.getUserGroups());
    this.setState({loading: true})

  }

  gotoGroup(groupId) {
    Actions.groupdashboard(this.props.groups[groupId])
  }

  showNotifications() {
    Actions.notifications()
  }

  renderNotifications() {
    let notifications = 3;

    if(notifications <= 0)
      return false;

    return (
      <TouchableHighlight style={styles.notifications}
        onPress={() => this.showNotifications()}
      >
        <Text style={styles.notificationsText}>New Invites: {notifications}</Text>
      </TouchableHighlight>
    )
  }

  render() {
    let showGroups  = [];
    let showLoading = [];

    if (showGroups.length == 0 && this.state.loading){
      showLoading =
                    <ActivityIndicator
                      animating={true}
                      style={{
                              alignItems: 'center',
                              justifyContent: 'center',
                              padding: 8,
                              height: 80
                            }}
                      size="large"
                    /> ;
    } else {
      showGroups = [];
    }

    if(this.props.groups.length > 0) {
       showGroups = this.props.groups.map((a,b) => {

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

      if (showLoading.length != 0)
        this.setState({loading: false})

    } else {
      showGroups = [];
    }


    return (
      <View style={styles.container}>
        {this.renderNotifications()}
        <ScrollView>
          {showLoading}

          <Blocks>
            {showGroups}
          </Blocks>
        </ScrollView>
      </View>
    );
  }
}
