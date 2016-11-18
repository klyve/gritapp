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
import { connect } from 'react-redux';
import * as Route from '../../actions/route';

import * as user from '../../actions/user';
import {
  Blocks,
  BlockFifty,
  MainHeader
} from '../modules';
import styles from './styles/loginview';
class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  signIn() {
    this.props.dispatch(user.loginUser(this.state.username, this.state.password));
  }

  // componentWillMount() {
  //   this.props.dispatch(Route.ifSignedIn())
  // }
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
                        placeholder="Phone number"
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
                <View style={styles.forgotContainer}>
                    <Text style={styles.greyFont}>Forgot Password</Text>
                </View>
            </View>
            <View style = {styles.buttonContainer}>
              <TouchableHighlight
                onPress={() => {
                  this.signIn()
                }}>
                <View style={styles.signin}>
                    <Text style={styles.whiteFont}>Sign In</Text>
                </View>

              </TouchableHighlight>
              <TouchableHighlight
              onPress = {() => {
                this.props.dispatch(Route.to('signup'));
              }}>
              <View style={styles.signup}>
                  <Text style={styles.whiteFont}>Sign Up</Text>
              </View>
              </TouchableHighlight>
            </View>
        </View>
    );
  }
}

export default connect(state => ({
    user: state.user.user
  })
)(LoginView);
