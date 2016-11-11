import NavigationBar from 'react-native-navbar'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Switch,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import {
  Blocks,
  FriendBlock
} from '../../modules'

import styles from './styles/editDescription';

export default class social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Press to edit',
    };
  }
  render() {
    return (
      <View style = {styles.container}>
        <NavigationBar
           title={{ title: 'Group description', tintColor: 'black', }}
           leftButton={{ title: 'Cancel', }}
           rightButton={{ title: 'Save', }}
           style={styles.navbar}
           statusBar={{ tintColor: "#2ecc71", }}
         />
         <View style = {styles.body}>
            <View style = {styles.header}>
              <Text style = {{fontSize: 16, paddingLeft: 20, width: 300, color: 'grey'}}>Show description on/off</Text>
                <Switch
                value={(this.state && this.state.switchValue) || false}
                onValueChange={(value) => {
                  this.setState({switchValue: value})
                }}
                // Color props are iOS-only
                // thumbTintColor={'white'} // Removes shadow
                tintColor={"rgba(230,230,230,1)"}
                onTintColor={"rgba(68,219,94,1)"}/>
            </View>
           <TextInput
             value = {this.state.text}
             multiline = {true}
             onChangeText={(text) => this.setState({text})}
             editable = {true}
             maxLength = {250}
             style = {styles.textInput}
           />
         </View>
       </View>
    );
  }
}
