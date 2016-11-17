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

// Blueprints
function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
  this.currentChallenges = [];
  this.public;
}
var currentGroup = new Group();
  currentGroup.name = "Pølsefest";
  currentGroup.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  currentGroup.description = "Vi liker pølser, de er best";
  currentGroup.public = false;

var groupColor = (currentGroup.public) ? 'blue' : 'red';
var groupColorHex = (currentGroup.public) ? '#2574a9' : '#c0392b';

export default class GroupDashboard extends Component {

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

    let groupBannerColor = (currentGroup.public) ? styles.blueBannerColor : styles.redBannerColor;
    let groupTitleColor = (currentGroup.public) ? styles.blueTextColor : styles.redTextColor;
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
                  <View style={{marginBottom: 310 /* spaghetti bolognese */}}>
                    <ScrollView>
                      <GroupLeaderboard />
                    </ScrollView>
                  </View>

                  <View style={{marginBottom: 310 /* spaghetti bolognese */}}>
                    <ScrollView>
                      <GroupChallenges />
                    </ScrollView>
                  </View>

                  <View style={{marginBottom: 300 /* spaghetti bolognese */}}>
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
