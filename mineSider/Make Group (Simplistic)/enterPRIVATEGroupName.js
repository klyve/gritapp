//Choose a nickname while registering a user

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableHighlight,
} from 'react-native'

function person (){//The object containing the userinfo during registration
  this.userID;
  this.nick;
  this.pic;
}

function createUser (usr,nick, pic)
{
  usr.nick = nick;
  usr.pic = pic;
  usr.userID = Math.floor((Math.random() * 100000) + 1);
  console.log(arguments);
  return usr
}



 var newUser = new person();
 const USERNAMEREGEX = /^[a-zA-Z0-9\-_]*$/;

export default class social extends Component {

  constructor(props)
  {
    super()
    this.state={text: ''}
  }
  render() {
    return (
      <View style={styles.container}>
        <View>

        <Text style={styles.explanationText}>
          Choose a nickname
        </Text>
        <TextInput
          style ={styles.textInput}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={"Enter nickname"}
          placeholderTextColor={"#aaaaaa"}
          textColor
          onChangeText={(text) => {
            if(!USERNAMEREGEX.test(text)){
              alert("Illegal character")
              return
            }
            if(text.length < 13 )
              this.setState({text})}}


          onSubmitEditing={(event) => {
            if(this.state.text.length < 3 || this.state.text.length > 13)
            {
              alert("Nickname must be 3-13 chars")
            }else {
              createUser(newUser,this.state.text,'placeholder')
            }}}

            //this.setState({text: ''})
          value={(this.state && this.state.text) || ''}
        />
        </View>
        <TouchableHighlight style={styles.confirm}
          onPress={() =>{
            if(this.state.text.length < 3 || this.state.text.length > 13)
            {
              alert("Nickname must be 3-13 chars")
            }else {
              createUser(newUser,this.state.text,'placeholder')
            }
          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8,}}>Previous</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.previous}
          onPress={() =>{

          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8,}}>Next</Text>
        </TouchableHighlight>
        <View style={styles.bottomTextView}>
        <Text style={styles.bottomText}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur
          id elementum turpis, elementum convallis elit.
          Ut interdum porttitor consequat. Cras sagittis
          auctor libero sit amet viverra.
          </Text>

        </View>
      </View>
    );
  }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3498db',

  },
  textInput: {
      flex: 1,
      flexDirection: 'row',
      fontSize: 30,
      color: "#eeeeee",
      textAlign: 'center',
      margin: 10,
      height: 60,
      paddingLeft: 20,
      textAlign: 'left',
      alignItems: 'center',
    },
    explanationText: {
      paddingLeft: 30,
      color: "#eeeeee",

    },
    confirm: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 10,
    },
    previous: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
    },
    bottomText: {
      textAlign: 'left',
      color: "#eeeeee",
    },
    bottomTextView: {
      position: 'absolute',
      bottom: 0,
      padding: 10,
    },
    topTextView: {
        position: 'absolute',
        top: 0,
        padding: 10,
    }
});

AppRegistry.registerComponent('social', () => social);
