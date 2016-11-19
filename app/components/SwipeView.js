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
import { connect } from 'react-redux';

import Swiper from 'react-native-swiper';
import styles from './styles/SwipeView';
import { MainHeader }from './modules';
import Dashboard from './Dashboard';
import Friends from './Friends';
import CreateOrJoinGroup from './CreateOrJoinGroup';


import * as Route from '../actions/route';

class SwipeView extends Component {

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

        <View style={styles.slide1}>
          <MainHeader
            color="green"
            title="Profile"
            rightBtn="circle-o"
            right={() => { this.btnPress(1) }}
           />
          <View style={[styles.contentView, styles.noPadding]}>
            <Friends
              {...this.props}
            />
          </View>
        </View>

        <View style={styles.slide2}>
          <MainHeader
            leftBtn="user"
            rightBtn="plus"
            title="Grit"
            right={() => { this.btnPress(1) }}
            left={() => { this.btnPress(-1) }}
          />
          <View style={[styles.contentView, styles.noPadding]}>
            <Dashboard
              {...this.props}
            />
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


export default connect(state => ({
    groups: state.groups,
    user: state.user
  })
)(SwipeView);
