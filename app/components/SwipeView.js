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

import Header from './MainHeader';
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
    console.log("Running")
    console.log(this.props)
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
          <Header />
          <View style={styles.contentView}>
            <Friends />
          </View>
        </View>

        <View>
          <Header />
          <View style={styles.contentView}>
            <Dashboard />
          </View>
        </View>

        <View style={styles.slide3}>
          <Header />
          <View style={styles.contentView}>
            <CreateOrJoinGroup />
          </View>
        </View>


      </Swiper>
      </View>
    );
  }
}
