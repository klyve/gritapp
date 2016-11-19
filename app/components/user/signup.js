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
import { Actions } from 'react-native-router-flux';
import * as user from '../../actions/user';
import {
  Blocks,
  BlockFifty,
  MainHeader
} from '../modules';
import styles from './styles/signup';
import { Icon } from 'react-native-elements';

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






          <View style={styles.logoView}>
              <Image style={styles.logo} source={{uri: 'https://i.imgur.com/da4G0Io.png'}} />
          </View>




          <View style={styles.inputs}>
            <View style={{width: 30}}>
              <Icon
                size={30}
                name='user'
                type='font-awesome'
                color='#ffffff'
                underlayColor='transparent'
              />
            </View>

            <TextInput
              style={styles.input}
              placeholder="Nickname"
              maxLength={13}
              placeholderTextColor="#fff"
              underlineColorAndroid='rgba(0,0,0,0)'

              value={this.state.username}

              onChangeText={(text) => {
                this.setState({
                  username: text,
                })
              }}
              onSubmitEditing={(event) => {
                this.refs.number.focus();
              }}
            />
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
              ref='number'
              maxLength={8}
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#fff"
              underlineColorAndroid='rgba(0,0,0,0)'

              value={this.state.phonenumber}

              onChangeText={(text) => {
                this.setState({
                  phonenumber: text,
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
              secureTextEntry={true}
              style={styles.input}
              placeholder="Password"
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








          <View style={styles.nickInfoContainer}>
            <Text style={{color: '#fff', opacity: 0.67, fontSize: 16,}}>
              Nick Must Contain 3 - 13 Characters
            </Text>
          </View>






          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => {
                this.registerUser();
              }}
            >
              <View style={styles.signin}>
                  <Text style={{color: '#fff'}}>Finish</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
            onPress = {() => {
              Actions.pop();
            }}>
            <View style={styles.signup}>
                <Text style={{color: '#fff'}}>Back</Text>
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
