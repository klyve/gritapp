import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  TextInput,
  AsyncStorage,
} from 'react-native';
import hash from 'hash.js';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import * as user from '../../actions/user';


import {
  Blocks,
  BlockFifty,
  MainHeader
} from '../modules';
import styles from './styles/signup';

const ACCESS_TOKEN = '';

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      phonenumber: '',
    }
  }

  registerUser() {

    this.props.dispatch(user.registerUser({
        number: this.state.phonenumber,
        username: this.state.username,
        password: this.state.password
      }));
  }

  render() {
    return (
      <View style={styles.container}>
            <Image style={styles.bg} source={require('../../../images/Guy.jpg')} />
            <View style={styles.header}>
                <Image style={styles.mark} source={{uri: 'https://i.imgur.com/da4G0Io.png'}} />
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={{uri: 'https://i.imgur.com/iVVVMRX.png'}}/>
                    <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Nickname"
                        placeholderTextColor="#FFF"
                        underlineColorAndroid='#FFF'
                        value={this.state.username}
                        onChangeText={(text) => {
                          this.setState({
                            username: text,
                          })
                        }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} source={{uri: 'https://i.imgur.com/iVVVMRX.png'}}/>
                    <TextInput
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Phonenumber"
                        placeholderTextColor="#FFF"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        value={this.state.phonenumber}
                        onChangeText={(text) => {
                          this.setState({
                            phonenumber: text,
                          })
                        }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={{uri: 'https://i.imgur.com/ON58SIG.png'}}/>
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Pasword"
                        placeholderTextColor="#FFF"
                        underlineColorAndroid='rgba(0,0,0,0)'
                        value={this.state.password}
                        onChangeText={(text) => {
                          this.setState({
                            password: text
                          })
                        }}
                    />
                </View>

                <View style = {styles.warningContainer}>
                  <Text style = {[styles.whiteFont, styles.warning]}>Nickname must contain 3 to 16 characters.</Text>
                </View>
            </View>
            <View style = {styles.buttonContainer}>
              <TouchableHighlight
                onPress={() => {
                  this.registerUser();
                }}>
                <View style={styles.signin}>
                    <Text style={styles.whiteFont}>Sign In</Text>
                </View>
              </TouchableHighlight>
            </View>
        </View>
    );
  }
}

export default connect(state => ({
    state
  })
)(Signup);
