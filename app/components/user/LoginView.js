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
import { Icon } from 'react-native-elements';
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
          <Image style={styles.bg} source={require('../../../images/Guy.jpg')} />






          <View style={styles.logoView}>
              <Image style={styles.logo} source={{uri: 'https://i.imgur.com/da4G0Io.png'}} />
          </View>






          <View style={styles.inputs}>
            <View style={{width: 30}}>
              <Icon
                size={30}
                name='phone'
                type='font-awesome'
                color='#ffffff'
                underlayColor='transparent'
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Phone number"
              placeholderTextColor="#fff"
              underlineColorAndroid='rgba(0,0,0,0)'

              value={this.state.username}

              onChangeText={(text) => {
                this.setState({
                  username: text,
                })
              }}
              onSubmitEditing={(event) => {
                this.refs.pass.focus();
              }}
            />
          </View>

          <View style={styles.inputs}>
            <View style={{width: 30}}>
              <Icon
                size={30}
                name='lock'
                type='font-awesome'
                color='#ffffff'
                underlayColor='transparent'
              />
            </View>

            <TextInput
              ref='pass'
              style={styles.input}
              placeholder="Pasword"
              placeholderTextColor="#fff"
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

            <TouchableHighlight onPress={() => {alert("VI TRENGER EN GLEMT PASSORD FUNKSJON")}}>
              <Text style={{color: '#fff', opacity: 0.67, fontSize: 16,}}>
                Forgot Password?
              </Text>
            </TouchableHighlight>
          </View>






          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => {
                this.signIn()
              }}>
              <View style={styles.signin}>
                  <Text style={styles.whiteFont}>Log In</Text>
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
