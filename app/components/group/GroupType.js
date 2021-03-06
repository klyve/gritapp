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
import { MARGIN, HEADER_HEIGHT } from '../constants';


import {
  Blocks,
  BlockFifty,
  MainHeader,
} from '../modules';

import styles from './styles/grouptype';

export default class GroupType extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <MainHeader
          color="green"
          title="Group type"
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
         />
         <View style={styles.blockContainer}>
          <Blocks>

            <BlockFifty
              style={{marginTop: MARGIN,marginBottom: MARGIN / 2}}
              onPress={() => Actions.groupname('public')}
            >
              <Text style={styles.buttonText}>
                Public
              </Text>
            </BlockFifty>

            <BlockFifty
              style={{marginTop: MARGIN / 2}}
              onPress={() => Actions.groupname('private')}
            >
              <Text style={styles.buttonText}>
                Private
              </Text>
            </BlockFifty>

          </Blocks>
        </View>

      </View>
    );
  }
}
