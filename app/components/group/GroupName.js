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
const DEVICE_WIDTH = Dimensions.get('window').width
const DEVICE_HEIGHT = Dimensions.get('window').height

function person (){//The object containing the userinfo during registration
  this.nick;
  this.pic;
}

function createUser (usr,nick, pic)
{
  usr.nick = nick;
  usr.pic = pic;
  console.log(arguments)
}



 var newUser = new person();


export default class GroupName extends Component {

  constructor(props)
  {
    super()
    this.state={text: ''}
  }

  render() {
    const type = this.props.data || 'public';
    const style = [styles.container]
    if(type == 'public')
      style.push(styles.publicgroup);
    else
      style.push(styles.privategroup);

    return (
      <View style={style}>
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.textInput}
          placeholder={"Choose Group Name"}
          placeholderTextColor={"#dadfe1"}
          textColor
          onChangeText={(text) => {
            if(text.length > 13)
            {
              alert("Group name must be 3-13 chars")
            }
            this.setState({text})}}
          onSubmitEditing={(event) => {
            createUser(newUser,this.state.text,'placeholder')
            if(this.state.text.length < 3 || this.state.text.length > 13)
            {
              alert("Nickname must be 3-13 chars")
            }else {
              alert("NICK IS OK")
              createUser(newUser,this.state.text,'placeholder')
            }}}
            //this.setState({text: ''})
          value={(this.state && this.state.text) || ''}
        />
        <TouchableHighlight style={styles.confirm}
          onPress={() =>{
            if(this.state.text.length < 3 || this.state.text.length > 13)
            {
              alert("Group name must be 3-13 chars")
            }else {
              alert("NICK IS OK")
              createUser(newUser,this.state.text,'placeholder')//
            }}

          }
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>
          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8,}}>Next</Text>
        </TouchableHighlight>

        <Text style={styles.bottomText}>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur
          id elementum turpis, elementum convallis elit.
          Ut interdum porttitor consequat. Cras sagittis
          auctor libero sit amet viverra.
        </Text>
        <Text style={styles.topText}>
          Choose a groupname with 3-13 characters
        </Text>

      </View>
    );
  }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: DEVICE_WIDTH,

  },
  publicgroup: {
    backgroundColor: '#3498db',
  },
  privategroup: {
    backgroundColor: '#c0392b',
  },
  textInput: {
      fontSize: 30,
      color: "#eeeeee",
      textAlign: 'center',
      margin: 10,
      height: 60,
      paddingLeft: 20,
      width: 100,
      borderWidth: 0,
      borderColor: "rgba(0,0,0,0.74)",
      width: DEVICE_WIDTH,
      textAlign: 'left',
      alignItems: 'center',

    },
    confirm: {
      position: 'absolute',
      top: 0,
      right: 0,
      padding: 10,
    },
    bottomText: {
      position: 'absolute',
      bottom: 0,
      textAlign: 'left',
      padding: 10,
      color: "#eeeeee",
    },
    topText: {
      position: 'absolute',
      top: 0,
      textAlign: 'left',
      padding: 15,
      color: "#eeeeee",
    }
});

AppRegistry.registerComponent('social', () => social);
