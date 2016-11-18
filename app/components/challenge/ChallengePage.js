import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-router-flux';
import {
  MainHeader,
  Blocks,
  FriendBlock
} from '../modules'
import styles from './styles/challengePage';
import SinglePictureView from './SinglePictureView';

// Blueprints
function Challenge(){
  this.comment = "";
  this.commentSender = "";
  this.pictureUrl = "";
  this.id = "";
}
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


var elefant = new Challenge();
  elefant.pictureUrl = "http://knysnaelephantpark.co.za/wp-content/uploads/2015/02/Elephant.png";
  elefant.id = Math.floor(Math.random() * 100000);

var hund = new Challenge();
  hund.pictureUrl = "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg";
  hund.id = Math.floor(Math.random() * 100000);this.prop

var katt = new Challenge();
  katt.pictureUrl = "http://www.agria.no/imagevault/publishedmedia/zfl838orwjwg72jkzerz/gra-katt-vit-bakgrund.jpg";
  katt.id = Math.floor(Math.random() * 100000);

var slange = new Challenge();
  slange.pictureUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Gonyosoma_oxycephalum_Oslo.JPG/220px-Gonyosoma_oxycephalum_Oslo.JPG";
  slange.id = Math.floor(Math.random() * 100000);

var mus = new Challenge();
  mus.pictureUrl = "http://gfx.dagbladet.no/pub/artikkel/5/51/517/517186/musXcopy_1194184162_1194184177.jpg";
  mus.id = Math.floor(Math.random() * 100000);

var fisk = new Challenge();
  fisk.pictureUrl = "http://i.imgur.com/prm1a8l.jpg";
  fisk.id = Math.floor(Math.random() * 100000);

var challenges = [elefant, hund, katt, slange, mus, fisk];
var showSinglePictureTag = [];

var groupColor = (currentGroup.public) ? 'blue' : 'red';
var groupColorHex = (currentGroup.public) ? '#2574a9' : '#c0392b';

export default class ChallengePage extends Component {

  constructor(props){
    super(props)

    showSinglePictureTag = [];

    this.state={
      showSingleOrNot: false,
    }
  }

  showSinglePictureView(challenge){

      // WARNING WARNING WARNING WARNING WARNING WARNING

      // SPAGHETTI AHEAD! SPAGHETTI AHEAD! SPAGHETTI AHEAD!

      // TEST PURPOSE ONLY! TEST PURPOSE ONLY! TEST PURPOSE ONLY!



      showSinglePictureTag =
      <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
      <SinglePictureView
        picture={challenge.pictureUrl}
        close={() => {this.closeSinglePictureView()}}
      />
      </View> ;

      this.setState({showSingleOrNot: true});
      /*

        Vi burde legge inn dette i en action, så kan vi ta Action.pop()
        fra SinglePictureView komponenten når de trykker på exit. eller når
        android brukere trykker "tilbake".

      */
  }

  closeSinglePictureView() {
    this.setState({
      showSingleOrNot: false,
    })
  }

  render() {

    let singlePicture = (!this.state.showSingleOrNot ? false : showSinglePictureTag);
    let all = challenges.map((challenge, i) => {
    return (
      <TouchableHighlight
      style = {styles.imageButton}
      key = {i}
      onPress = {() => {
        this.showSinglePictureView(challenge)
      }}
      activeOpacity={71 / 100}
      underlayColor={"rgb(210,210,210)"}
      >
        <Image
              key = {i}
              style = {styles.image}
              source={{uri: challenge.pictureUrl}}></Image>
      </TouchableHighlight>
    )
  })

    return (
      <View style={{flex: 1}}>
      <View style={styles.container}>

        <MainHeader
          color={groupColor}
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
        />

        <ScrollView style = {styles.body}>

        <View style = {styles.description}>
          <Text style = {styles.descriptionHeader}>Challenge Name</Text>
          <Text style = {styles.descriptionParagraph}>
            Her kommer det noe funfact om din challenge blah blah  blah  blah  blah blah blah lorem ipsum blah blah blah...
          </Text>
        </View>

        <View style = {styles.imageContainer}>
          {all}
        </View>

        </ScrollView>

        <View style = {styles.bottomBar}>
          <TouchableHighlight
          onPress = {() => {}}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}>
            <Text>Camera</Text>
          </TouchableHighlight>
        </View>

      </View>

      {singlePicture}

      </View>

    );
  }
}
