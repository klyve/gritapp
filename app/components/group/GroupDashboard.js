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

import { Actions } from 'react-native-router-flux';
import GroupChallenges from './GroupChallenges';
import GroupLeaderboard from './GroupLeaderboard';
import GroupMembers from './GroupMembers';
import styles from './styles/groupdashboard';

var groupColor;

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

groupColor = (currentGroup.public) ? '#3498db' : '#c0392b';
const MARGIN = 10;

export default class GroupDashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activeTab: 1,
      name: 'test',
      image: '',
      description: 'Hello world',
    }
  }

  componentDidMount() {

    // fetch('http://localhost:3000/api/groups')
    //   .then((response) => response.json())
    //   .then((json) => {
    //
    //     this.setState(json);
    //   })

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


    let tabStyles = []
    tabStyles.push([styles.tabText])
    tabStyles.push([styles.tabText])
    tabStyles.push([styles.tabText])

    tabStyles[this.state.activeTab].push(styles.tabFocus)


    return (
      <View style={styles.container}>

        <MainHeader
          color="green"
          leftBtn="chevron-left"
          rightBtn="cog"
          left={() => { Actions.pop() }}
          large
        />

        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: this.state.image}}></Image>
          </View>

          <View style={{flex: 1, marginTop: -60,}}>
            <View style={styles.groupInfo}>
              <Text style={styles.groupTitleText}>{this.state.name}</Text>

              <Text style={styles.groupDescriptionText}>{this.state.description}</Text>
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




              <View style={{flex: 12, backgroundColor: '#f0f0f0', paddingTop: MARGIN,}}>

                <Swiper
                  ref={"swiper"}
                  style={styles.wrapper}
                  showsButtons={false}
                  showsPagination={false}
                  loop={false}
                  index={this.state.activeTab}
                  onMomentumScrollEnd ={ (e, state, context) => this.onMomentumScrollEnd(e,state,context)}
                >
                <View>
                  <ScrollView>
                    <GroupLeaderboard />
                  </ScrollView>
                </View>
                <View>
                  <ScrollView>
                    <GroupChallenges />
                  </ScrollView>
                </View>

                <View>
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
