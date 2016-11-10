import NavigationBar from 'react-native-navbar'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

export default class social extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <NavigationBar
           title={{ title: 'Title', tintColor: 'black', }}
           leftButton={{ title: 'Cancel', }}
           rightButton={{ title: 'Save', }}
           style={styles.navbar}
           statusBar={{ tintColor: "white", }}
         />
         <View style = {styles.body}>
            <View style = {styles.textContainer}>
               <TextInput
               style={styles.textInput}
               placeholder={'Type here'}
               placeholderTextColor={"rgba(198,198,204,1)"}
               onChangeText={(text) => {this.setState({text})}}
               onSubmitEditing={() => {this.setState({text: ''})}}
               value={(this.state && this.state.text) || ''}/>
           </View>
         </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 700,
    backgroundColor: '#F5FCFF',
  },
  navbar: {
    height: 60,
    backgroundColor: "#2ecc71",
  },
  body: {
    height: 600,
    backgroundColor: 'grey',
  },
  textContainer: {
    marginTop: 30,
    backgroundColor: 'hotpink',
  },
  textInput: {
    flex: 1/10,
    borderColor: "rgba(0,0,0,0.5)",
  },
});

AppRegistry.registerComponent('social', () => social);
