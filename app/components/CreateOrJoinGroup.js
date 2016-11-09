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
  BlockFifty
} from './modules';

import styles from './styles/CreateOrJoinGroup';

export default class CreateOrJoinGroup extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Blocks>

          <BlockFifty
            style={{marginBottom: 10}}
            onPress={() => Actions.test()}
          >
            <Text style={styles.buttonText}>
              Create Group
            </Text>
          </BlockFifty>

          <BlockFifty
            onPress={() => console.log("Hello world2")}
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
