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
  Blocks,
  FriendBlock,
  MainHeader,
} from '../../modules';

import {
  Icon
} from 'react-native-elements';

import GroupMembers from '../GroupMembers';

import styles from './styles/manageMembers';

export default class ManageMembers extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.container}>
        <MainHeader
          color="green"
          leftBtn="chevron-left"
          rightBtn="plus"
          left={() => { Actions.pop() }}
          right={() => { Actions.addmembers() }}
        />
        <View style={styles.body}>

        <ScrollView>
          <GroupMembers
            group={this.props.groups}
            user={this.props.user}
          />
        </ScrollView>
        </View>
      </View>

    );
  }
}
