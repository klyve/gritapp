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
  Blocks,
  FriendBlock
} from './modules'



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
      Actions.groupdashboard(this.state.groups[groupId])
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
  componentWillMount() {
    // console.log("Hello ")
    // fetch('https://google.com')
    //   .then(response => console.log("CALLED"))
    // console.log("BYE")
  }
  componentDidMount() {
    // fetch('http://6d5a13c7.ngrok.io/api/groups')
    //   .then((response) => response.json())
    //   .then((json) => this.setState(json))
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


export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => {
    dispatch({type:"Test"})
    return ({
    actions: bindActionCreators(dispatch)
  })}
)(Dashboard);
