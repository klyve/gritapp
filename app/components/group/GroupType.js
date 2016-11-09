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
} from '../modules';

import styles from './styles/grouptype';

export default class GroupType extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Blocks>

          <BlockFifty
            style={{marginBottom: 10}}
            onPress={() => Actions.groupname('public')}
          >
            <Text style={styles.buttonText}>
              Public
            </Text>
          </BlockFifty>

          <BlockFifty
            onPress={() => Actions.groupname('private')}
          >
            <Text style={styles.buttonText}>
              Private
            </Text>
          </BlockFifty>

        </Blocks>

      </View>
    );
  }
}
