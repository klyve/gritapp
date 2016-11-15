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
import { Actions } from 'react-native-router-flux';

import {
  Blocks,
  BlockFifty,
  MainHeader
} from '../modules';
import styles from './styles/signup';
const ACCESS_TOKEN = '';
export default class sigup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.navigateIfToken();
  }

  signIn() {
    let password = hash.sha256().update(this.state.password).digest('hex');
    let username = this.state.username;
    fetch('https://dd25c333.ngrok.io/api/user/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username, password
      })
    })
    .then((data) => data.json())
    .then((json) => {
      console.log(json)
      if(json.status && json.status == 200) {
        this.storeToken(json.token);
      }
    })
  }
  async storeToken(token) {
    try {
      await AsyncStorage.setItem("@accesstoken:key", token);
      Actions.swipeview({type: 'reset'});
      //this.getToken();
    }catch(error) {
      console.log(error);
    }
  }
  async navigateIfToken() {
    let token;
    try {
      token = await AsyncStorage.getItem("@accesstoken:key")
      if (token !== null){
        Actions.swipeview({type: 'reset'});

        return true;
      }
    }catch(error) {
      console.log(error)
      return false;
    }
  }
  render() {

    return (
      <View style={styles.container}>
            <Image style={styles.bg} source={{uri: 'https://i.imgur.com/xlQ56UK.jpg'}} />
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
                        underlineColorAndroid='rgba(0,0,0,0)'
                        value={this.state.username}
                        onChangeText={(text) => {
                          this.setState({
                            username: text,
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
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} source={{uri: 'https://i.imgur.com/ON58SIG.png'}}/>
                    <TextInput
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Confirm password"
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
            <TouchableHighlight
              onPress={() => {
                this.signIn();
              }}>
              <View style={styles.signin}>

                  <Text style={styles.whiteFont}>Next</Text>
              </View>

            </TouchableHighlight>
        </View>
    );
  }
}
