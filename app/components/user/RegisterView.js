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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as user from '../../actions/user';

import {
  Blocks,
  BlockFifty,
  MainHeader
} from '../modules';
import styles from './styles/registerview';

class RegisterView extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Blocks>

          <BlockFifty
            style={{marginBottom: 10}}
            onPress={() => Actions.grouptype()}
          >
            <Text style={styles.buttonText}>
              Create Group
            </Text>
          </BlockFifty>

          <BlockFifty
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

export default connect(state => ({
    state
  })
)(RegisterView);
