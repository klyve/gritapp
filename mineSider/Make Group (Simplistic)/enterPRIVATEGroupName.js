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

function group (){//The object containing the userinfo during registration
  this.groupID;
  this.groupName;
  this.pic;
}

function createGroup (grp, groupName, pic)
{
  grp.groupName = groupName;
  grp.pic = pic;
  grp.groupID = Math.floor((Math.random() * 100000) + 1);
  console.log(arguments);
  return grp
}



 var newGroup = new group();
 const GROUPNAMEREGEX = /^[a-zA-Z0-9\-_]*$/;

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
          Private group name
        </Text>
        <TextInput
          style ={styles.textInput}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder={"Enter groupname"}
          placeholderTextColor={'rgba(255,255,255,0.4)'}
          textColor
          onChangeText={(text) => {
            if(!GROUPNAMEREGEX.test(text)){
              alert("Illegal character")
              return
            }
            if(text.length < 16 )
              this.setState({text})}}


          onSubmitEditing={(event) => {
            if(this.state.text.length < 3 || this.state.text.length > 16)
            {
              alert("Groupname must be 3-16 chars")
            }else {
              createGroup(newGroup,this.state.text,'placeholder')
            }}}

            //this.setState({text: ''})
          value={(this.state && this.state.text) || ''}
        />
        </View>
        <TouchableHighlight style={styles.confirm}
          onPress={() =>{
            if(this.state.text.length < 3 || this.state.text.length > 16)
            {
              alert("Groupname must be 3-16 chars")
            }else {
              createGroup(newGroup,this.state.text,'placeholder')
            }
          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8,}}>Next</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.previous}
          onPress={() =>{

          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8,}}>Previous</Text>
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
    backgroundColor: '#c0392b',

  },
  textInput: {
      flex: 1,
      flexDirection: 'row',
      fontSize: 30,
      color: '#eeeeee',
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
    previous: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
    },
    confirm: {
      position: 'absolute',
      top: 0,
      right: 0,
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
