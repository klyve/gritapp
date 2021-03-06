
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
import { connect } from 'react-redux';

import styles from './styles/groupname';
import { Actions } from 'react-native-router-flux';

import * as Groups from '../../actions/groups';

const USERNAMEREGEX = /^[a-zA-Z0-9\-_ ]*$/;

class GroupName extends Component {

  constructor(props)
  {
    super(props)
    this.state={text: ''}
  }

  createGroup() {
    let data = {
      name: this.state.text,
      type: this.props.data,
      token: this.props.user.token
    }
    Actions.swipeview({type: 'reset'})
    let cool = this.props.dispatch(Groups.createGroup(data));

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
      <View>
      <Text style={styles.explanationText}>
        Choose a groupname with 3-16 characters
      </Text>
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.textInput}
          placeholder={"Choose Group Name"}
          placeholderTextColor={'rgba(255,255,255,0.4)'}
          autoFocus={true}
          onChangeText={(text) => {
            if(!USERNAMEREGEX.test(text)){
              alert("Illegal character")
              return
            }
            if(text.length <= 16 )
              this.setState({text})
          }}
          onSubmitEditing={() => {
            this.createGroup()
          }}
            //this.setState({text: ''})
          value={(this.state && this.state.text) || ''}
        />
        </View>
        <TouchableHighlight style={styles.confirm}
          onPress={() =>{
            this.createGroup()
          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8, marginTop: 15,}}>Next</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.previous}
          onPress={() =>{
            Actions.pop()
          }}
          activeOpacity={75 / 100}
          underlayColor={"rgb(210,210,210)"}>

          <Text style={{fontSize:20, color: '#eeeeee', paddingRight: 8, marginTop: 15,}}>Previous</Text>
        </TouchableHighlight>

      </View>
    );
  }
  }

export default connect(state => ({
    user: state.user
  })
)(GroupName);
