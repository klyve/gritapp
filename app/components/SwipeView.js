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

import Swiper from 'react-native-swiper';
import styles from './styles/SwipeView';

import {
  MainHeader
}from './modules';
import Dashboard from './Dashboard';
import Friends from './Friends';
import CreateOrJoinGroup from './CreateOrJoinGroup';

export default class SwipeView extends Component {

  constructor(props) {
    super(props);
  }


  btnPress(index) {
    //console.log(this._swiper.scrollBy(1))
    this.refs.swiper.scrollBy(index)

  }

  render() {
    //const { state, actions } = this.props;
    
    return (
      <View>
      <Swiper
        ref={"swiper"}
        style={styles.wrapper}
        showsButtons={false}
        showsPagination={false}
        loop={false}
        index={1}
      >

        <View style={styles.slide2}>
          <MainHeader
            color="green"
            title="Profile"
            rightBtn="circle-o"
            right={() => { this.btnPress(1) }}
           />
          <View style={styles.contentView}>
            <Friends />
          </View>
        </View>

        <View>
          <MainHeader
            leftBtn="user"
            rightBtn="plus"
            title="Main"
            right={() => { this.btnPress(1) }}
            left={() => { this.btnPress(-1) }}
          />
          <View style={styles.contentView}>
            <Dashboard />
          </View>
        </View>

        <View style={styles.slide3}>
          <MainHeader
            color="green"
            title="Group"
            leftBtn="circle-o"
            left={() => { this.btnPress(-1) }}
          />
          <View style={styles.contentView}>
            <CreateOrJoinGroup />
          </View>
        </View>


      </Swiper>
      </View>
    );
  }
}
