import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import {
  MainHeader,
  Blocks,
  FriendBlock
} from '../modules'

import {
  MARGIN,
  HEADER_HEIGHT
} from '../constants';

import { Actions } from 'react-native-router-flux';
import GroupChallenges from './GroupChallenges';
import GroupLeaderboard from './GroupLeaderboard';
import GroupMembers from './GroupMembers';
import styles from './styles/groupdashboard';



class GroupDashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeTab: 1,
    }
  }

  onMomentumScrollEnd(e, state, context) {
    this.setState({
      activeTab: state.index
    })
  }

  gotoSlide(index) {
    this.refs.swiper.scrollBy(index - this.state.activeTab)
  }

  render() {

    let groupBannerColor = (this.props.grouptype == "public") ? styles.blueBannerColor : styles.redBannerColor;
    let groupTitleColor = (this.props.grouptype == "public") ? styles.blueTextColor : styles.redTextColor;
    let groupColor = (this.props.grouptype == "public") ? 'blue' : 'red';
    let groupColorHex = (this.props.grouptype == "public") ? '#2574a9' : '#c0392b';

    let tabStyles = [[styles.tabText], [styles.tabText], [styles.tabText]];

    tabStyles[this.state.activeTab].push({color: groupColorHex})

    return (
      <View style={styles.container}>

        <MainHeader
          color={groupColor}
          leftBtn="chevron-left"
          rightBtn="cog"
          left={() => { Actions.pop() }}
          right={() => {Actions.groupsettingsmain()}}
        />

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: this.props.image}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={{fontSize: 30, color: groupColorHex}}>{this.props.name}</Text>

              <Text style={styles.groupDescriptionText}>{this.props.bio}</Text>
            </View>


            <View style={styles.tabs}>
              <View style={{flex: 1, flexDirection: 'row'}}>


                <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
                  <TouchableHighlight
                    onPress={() => this.gotoSlide(0)}
                    activeOpacity={71 / 100}
                    underlayColor='transparent'
                  >
                    <Text style={tabStyles[0]}>Leaderboard</Text>
                  </TouchableHighlight>

                </View>


                <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
                  <TouchableHighlight
                    onPress={() => this.gotoSlide(1)}
                    activeOpacity={71 / 100}
                    underlayColor='transparent'
                  >
                    <Text style={tabStyles[1]}>Challenges</Text>
                  </TouchableHighlight>
                </View>

                  <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
                    <TouchableHighlight
                      onPress={() => this.gotoSlide(2)}
                      activeOpacity={71 / 100}
                      underlayColor='transparent'
                    >
                      <Text style={tabStyles[2]}>Members</Text>
                    </TouchableHighlight>
                  </View>

              </View>




              <View style={{flex: 12, backgroundColor: '#f0f0f0'}}>

                <Swiper
                  ref={"swiper"}
                  showsButtons={false}
                  showsPagination={false}
                  loop={false}
                  index={this.state.activeTab}
                  onMomentumScrollEnd ={ (e, state, context) => this.onMomentumScrollEnd(e, state, context) }
                >
                  <View style={{marginBottom: 315 /* spaghetti bolognese */}}>
                    <ScrollView>
                      <GroupLeaderboard />
                    </ScrollView>
                  </View>

                  <View style={{marginBottom: 315 /* spaghetti bolognese */}}>

                    <ScrollView>
                      <GroupChallenges />

                      <TouchableHighlight
                      onPress = {() => { Actions.newchallenge({grouptype: this.props.grouptype}); }}
                      activeOpacity={71 / 100}
                      underlayColor={"rgb(210,210,210)"}
                      style = {{backgroundColor: groupColorHex, marginTop: 20}}>
                        <Text style={{alignSelf: 'center', padding: 10, fontSize: 20, color: '#fff'}}>
                          NEW CHALLENGE
                        </Text>
                      </TouchableHighlight>
                    </ScrollView>
                  </View>

                  <View style={{marginBottom: 315 /* spaghetti bolognese */}}>
                    <ScrollView>
                      <GroupMembers />
                    </ScrollView>
                  </View>
                </Swiper>


              </View>

            </View>
          </View>

        </View>

      </View>
    );
  }
}
export default connect(state => ({
    state
  })
)(GroupDashboard);
