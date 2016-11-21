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
  Alert,
} from 'react-native';
import {
  MainHeader,
  Blocks,
  FriendBlock
} from './modules';
import styles from './styles/notifications';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as Friends from '../actions/friends';
import * as User from '../actions/user'


class Notifications extends Component {
  constructor() {
    super();
  }

  render() {

    let friendreqs = (this.props.user.notifications.length > 0) ? [
      <View key={'hello'}>
        <Text style={{alignSelf: 'center', padding: 10, fontSize: 16}}>
          FRIEND REQUESTS
        </Text>
      </View>
    ] : false;

    let groupreqs = (this.props.user.notifications.length > 0) ? [
      <View key={'hvaskjera'}>
        <Text style={{alignSelf: 'center', padding: 10, fontSize: 16}}>
          GROUP REQUESTS
        </Text>
      </View>
    ] : false;

    this.props.user.notifications.map((a,b) => {

      let title;

      switch (a.type) {

        case 'ADD_FRIEND':
          console.log(a);
          title = 'from ' + a.sender.nick + ' 😄';

          friendreqs.push(
            <FriendBlock
              onPress={() => {
                Alert.alert(
                  'Warning',
                  'Do you want to accept this friend request? ',
                  [
                    {text: 'Accept', onPress: () => {
                      this.props.dispatch(Friends.add(a.sender))
                      this.props.dispatch(User.getUserData())
                      this.props.dispatch(User.getNotifications())
                    }},
                    {text: 'Decline', onPress: () => console.log('Deleted request')},
                  ]
                )

              }}
              image={a.sender.image}
              name={title}
              key={b}
              small
            />
          )
          break;

        case 'ADD_GROUP':
          title = a.sender.nick + ' wants you in a group! 😄';

          friendreqs.push(
            <FriendBlock
              onPress={() => {}}
              image={a.sender.image}
              name={title}
              key={b}
              small
            />
          )
          break;
      }
    })

    return (
      <View style={styles.container}>
        <MainHeader
          title="Invites"
        />
        <View style = {styles.body}>
          <ScrollView style = {styles.requestContainer}>
            {friendreqs}
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

export default connect(state => ({
    state,
    user: state.user,
  })
)(Notifications);
