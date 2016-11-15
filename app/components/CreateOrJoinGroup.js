import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
  Blocks,
  BlockFifty,
  MainHeader
} from './modules';
import styles from './styles/CreateOrJoinGroup';

export default class CreateOrJoinGroup extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Blocks>

          <BlockFifty
            style={{marginBottom: 5}}
            onPress={() => Actions.grouptype()}
          >
            <Text style={styles.buttonText}>
              Create Group
            </Text>
          </BlockFifty>

          <BlockFifty
            style={{marginTop: 5, marginBottom: 25}}
            onPress={() => Actions.groupsearch()}
          >
            <Text style={styles.buttonText}>
              Join Group
            </Text>
          </BlockFifty>

        </Blocks>

      </View>
    );
  }
}
