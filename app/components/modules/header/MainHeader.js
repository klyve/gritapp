// Social app for assignment 3
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import { Icon } from 'react-native-elements'

import styles from './styles/MainHeader';



export default class MainHeader extends Component {

  constructor(props) {
    super(props);

    this.style = [styles.header];
    this.style.push(styles[this.props.color] || styles.green);
    if(this.props.large)
      this.style.push(styles.large);

  }

  createIcon(style, text, fn) {
    const iconStyles = [style]
    if(this.props.large)
      iconStyles.push(styles.iconLarge)
    return (
      <View style={iconStyles}>
        <Icon
          name={text}
          type='font-awesome'
          color='#fff'
          underlayColor='transparent'
          onPress={fn}
        />
      </View>
    )
  }
  createText(style, text, fn, align) {
    const iconStyles = [style]
    if(this.props.large)
      iconStyles.push(styles.iconLarge)
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={fn}
        style={iconStyles}
      >
        <Text style={[styles.headerText, {textAlign: align}]}>{text}</Text>
      </TouchableHighlight>

    )
  }
  renderLeftBtn() {
    if(!this.props.leftBtn && !this.props.leftText)
      return false;
    if(this.props.leftBtn)
      return this.createIcon(styles.leftAlign, this.props.leftBtn, this.props.left);
    if(this.props.leftText)
      return this.createText(styles.leftAlignText, this.props.leftText, this.props.left, 'left');
  }
  renderRightBtn() {
    if(!this.props.rightBtn && !this.props.rightText)
      return false;
    if(this.props.rightBtn)
      return this.createIcon(styles.rightAlign, this.props.rightBtn, this.props.right);
    if(this.props.rightText)
      return this.createText(styles.rightAlignText, this.props.rightText, this.props.right, 'right');
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
