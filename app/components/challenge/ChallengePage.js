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
import { Icon } from 'react-native-elements';
import {
  MainHeader,
  Blocks,
  FriendBlock
} from '../modules'
import styles from './styles/challengePage';
import SinglePictureView from './SinglePictureView';

var showSinglePictureTag = [];

export default class ChallengePage extends Component {

  constructor(props){
    super(props)

    var images = this.props.challenge.images;

    showSinglePictureTag = [];

    this.state={
      showSingleOrNot: false,
      pictures: images,
    }
  }

  handlePicture(picture) {
    Actions.pop()
    console.log("Image is",picture)
    var fisk = new Challenge();
      fisk.pictureUrl = picture;
      fisk.id = Math.floor(Math.random() * 100000);
    images.push(fisk)
    this.setState({
      pictures: images
    })
  }

  showSinglePictureView(challenge){

      // WARNING WARNING WARNING WARNING WARNING WARNING

      // SPAGHETTI AHEAD! SPAGHETTI AHEAD! SPAGHETTI AHEAD!

      // TEST PURPOSE ONLY! TEST PURPOSE ONLY! TEST PURPOSE ONLY!



      showSinglePictureTag =
      <View style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
      <SinglePictureView
        picture={challenge.image}
      />
      </View> ;

      this.setState({showSingleOrNot: true});
      /*

        Vi burde legge inn dette i en action, så kan vi ta Action.pop()
        fra SinglePictureView komponenten når de trykker på exit. eller når
        android brukere trykker "tilbake".

      */
  }

  render() {

    let groupColor = (this.props.group.grouptype == 'public') ? 'blue' : 'red';
    let groupColorHex = (this.props.group.grouptype == 'public') ? '#2574a9' : '#c0392b';

    let all = this.state.pictures.map((image, i) => {
    return (
      <TouchableHighlight
      style = {styles.imageButton}
      key = {i}
      onPress = {() => {
        this.showSinglePictureView(image)
      }}
      activeOpacity={71 / 100}
      underlayColor={"rgb(210,210,210)"}
      >
        <Image
              key = {i}
              style = {styles.image}
              source={{uri: challenge.image}}></Image>
      </TouchableHighlight>
    )
  })

    return (
      <View style={{flex: 1}}>
      <View style={styles.container}>

        <MainHeader
          color={groupColor}
          title="Challenge Name"
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
        />

        <ScrollView style = {styles.body}>

        <View style = {styles.description}>
          <Text style = {styles.descriptionHeader}>Description</Text>
          <Text style = {styles.descriptionParagraph}>
            Her kommer det noe funfact om din challenge  blah blah blah lorem ipsum blah blah blah...
          </Text>
        </View>

        <View style = {styles.imageContainer}>
          {all}
        </View>

        </ScrollView>

        <View style = {styles.bottomBar}>
          <TouchableHighlight
          onPress = {() => {
            Actions.challengecamera({camera: (picture) => {this.handlePicture(picture)}})
          }}
          activeOpacity={71 / 100}
          underlayColor={"rgba(0,0,0,0)"}
          >
            <View>
              <View style={{paddingBottom: 5, paddingTop: 2}}>
                <Icon
                  name='chevron-up'
                  type='font-awesome'
                  color='#fff'
                  underlayColor='transparent'
                  size={20}
                />
              </View>

              <Icon
                name='camera'
                type='font-awesome'
                color='#fff'
                underlayColor='transparent'
                size={40}
              />
            </View>
          </TouchableHighlight>
        </View>

      </View>

      {showSinglePictureTag}

      </View>

    );
  }
}
