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

import { Icon } from 'react-native-elements'

import styles from './styles/MainHeader';



export default class MainHeader extends Component {

  constructor(props) {
    super(props);

    this.style = [styles.header];
    this.style.push(styles[this.props.color] || styles.green);

  }

  createIcon(style, text, fn) {
    return (
      <View style={style}>
        <Icon
          name={text}
          type='font-awesome'
          color='#fff'
          onPress={fn}
        />
      </View>
    )
  }
  renderLeftBtn() {
    if(!this.props.leftBtn)
      return false;
    return this.createIcon(styles.leftAlign, this.props.leftBtn, this.props.left);
  }
  renderRightBtn() {
    if(!this.props.rightBtn)
      return false;

    return this.createIcon(styles.rightAlign, this.props.rightBtn, this.props.right);
  }

  renderTitle() {
    if(!this.props.title)
      return false;
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          {this.props.title}
        </Text>
      </View>
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
        {this.renderTitle()}
        {this.renderLeftBtn()}
        {this.renderRightBtn()}
      </View>
    )
  }

}
