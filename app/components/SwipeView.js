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
  StatusBar,
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Swiper from 'react-native-swiper';
import styles from './styles/SwipeView';
import { MainHeader }from './modules';
import Dashboard from './Dashboard';
import Friends from './Friends';
import CreateOrJoinGroup from './CreateOrJoinGroup';
import Loadingscreen from './Loadingscreen';
import * as Groups from '../actions/groups';
import * as User from '../actions/user';


import * as Route from '../actions/route';

class SwipeView extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(User.getToken());
  }

  componentDidMount() {
    this.fetchDataInterval();
  }

  btnPress(index) {
    //console.log(this._swiper.scrollBy(1))
    this.refs.swiper.scrollBy(index)
  }

  fetchDataInterval() {
    // this.props.dispatch(Groups.getUserGroups());
    this.props.dispatch(User.getUserData());
    // Add more data gets
    setTimeout(() => {
      return this.fetchDataInterval();
    } , 20000);
  }

  render() {
    let loadingscreen = false;

    if(this.props.user.loadingscreen) {
      loadingscreen =
        <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
          <Loadingscreen/>
        </View>
    }

    return (
      <View>

       <StatusBar
         backgroundColor="transparent"
         barStyle="light-content"
         translucent={true}
       />

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
            title="Profiles"
            rightBtn="chevron-right"
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
            leftBtn="users"
            rightBtn="plus"
            logo
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
            title="Add Group"
            leftBtn="chevron-left"
            left={() => { this.btnPress(-1) }}
          />
          <View style={styles.contentView}>
            <CreateOrJoinGroup />
          </View>
        </View>
      </Swiper>

      {loadingscreen}

      </View>
    );
  }
}


export default connect(state => ({
    groups: state.groups,
    user: state.user
  })
)(SwipeView);
