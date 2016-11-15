// Social app for assignment 3
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native'
import { Actions } from 'react-native-router-flux';

import Swiper from 'react-native-swiper';
import styles from './styles/SwipeView';

import {
  MainHeader,
}from './modules';
import Dashboard from './Dashboard';
import Friends from './Friends';
import CreateOrJoinGroup from './CreateOrJoinGroup';

export default class SwipeView extends Component {

  constructor(props) {
    super(props);
    console.log(props)

    this.navigateIfNoToken();
  }
  async navigateIfNoToken() {
    let token;
    try {
      token = await AsyncStorage.getItem("@accesstoken:key")
      if (token == null){
        console.log("No token!");
        Actions.loginview({type: 'reset'});
        return true;
      }
    }catch(error) {
      console.log(error)
      return false;
    }
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

        <View style={styles.slide1}>
          <MainHeader
            color="green"
            title="Profile"
            rightBtn="circle-o"
            right={() => { this.btnPress(1) }}
           />
          <View style={[styles.contentView, styles.noPadding]}>
            <Friends />
          </View>
        </View>

        <View style={styles.slide2}>
          <MainHeader
            leftBtn="user"
            rightBtn="plus"
            title="Main"
            right={() => { this.btnPress(1) }}
            left={() => { this.btnPress(-1) }}
          />
          <View style={[styles.contentView, styles.noPadding]}>
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
