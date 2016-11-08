// Social app for assignment 3
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableHighlight
} from 'react-native'
import Icon from 'react-native-elements';

import styles from './styles/MainHeader';



export default class MainHeader extends Component {

  constructor(props) {
    super(props);

    this.style = [styles.header];
    this.style.push(styles[this.props.color] || styles.green);

  }

  renderLeftBtn() {
    if(!this.props.leftBtn)
      return false;
    return (
      <Text>Left button</Text>
    )
  }
  renderRightBtn() {
    if(!this.props.rightBtn)
      return false;
    return (
      <Text>Right button</Text>
    )
  }

  render() {
    let title     = false;
    let leftbtn   = false;
    let rightbtn  = false;
    if(this.props.title) {
      title = <Text>{this.props.title}</Text>
    }

    return (
      <View style={this.style}>
        {this.renderLeftBtn()}
        {title}
        {this.renderRightBtn()}
      </View>
    )
  }

}
