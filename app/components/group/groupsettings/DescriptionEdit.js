
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
  MainHeader,
  Blocks,
  FriendBlock
} from '../../modules'

import styles from './styles/editDescription';

export default class DescriptionEdit extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <MainHeader
          color="green"
          title="Biography"
          leftText="Cancel"
          rightText="Save"
          left={() => { Actions.pop() }}
          right={() => { Actions.pop() }}
         />
         <View style = {styles.body}>
            <View style = {styles.header}>
              <Text style = {{fontSize: 16, paddingLeft: 20, width: 300, color: 'grey'}}>Turn bio on/off</Text>
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
            defaultValue = ' '
            placeholder={'Type here'}
            onPress = {() => {
              text = '';
            }}
            placeholderTextColor={"rgba(198,198,204,1)"}
            value={(this.state && this.state.text) || ''}
            multiline = {true}
            onChangeText={(text) => this.setState({text})}
            maxLength = {250}
            style = {styles.textInput}
           />
         </View>
       </View>
    );
  }
}
