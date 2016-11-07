import NavigationBar from 'react-native-navbar'
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
} from 'react-native'

function Challenge(){
  this.comment = "";
  this.commentSender = "";
  this.pictureUrl = "";
  this.id = "";
}

var challenges = [];

var elefant = new Challenge();
  elefant.pictureUrl = "http://knysnaelephantpark.co.za/wp-content/uploads/2015/02/Elephant.png";
  elefant.id = Math.floor(Math.random() * 100000);

var hund = new Challenge();
  hund.pictureUrl = "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg";
  hund.id = Math.floor(Math.random() * 100000);

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

challenges.push(elefant);
challenges.push(hund);
challenges.push(katt);
challenges.push(slange);
challenges.push(mus);
challenges.push(fisk);

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

export default class social extends Component {
  render() {

    let all = challenges.map((challenge, i) => {
    console.log(challenge.id)
    return (
      <Image
            key = {i}
            style = {styles.image}
            source={{uri: challenge.pictureUrl}}></Image>
    )
  })

    return (

      <View style={styles.container}>
        <View style = {styles.navbar}></View>
        <ScrollView style = {styles.bodyContainer}>

        <View style = {styles.description}>
          <Text style = {styles.descriptionHeader}>Challenge Name</Text>
          <Text style = {styles.descriptionParagraph}>Her kommer det noe funfact om din challenge blah blah  blah  blah  blah blah blah lorem ipsum blah blah blah... </Text>
        </View>

        <View style = {styles.imageContainer}>

          {all}

        </View>

        </ScrollView>

        <View style = {styles.bottomBar}>
          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}>

              <Image
                style = {styles.cameraLogo}
                resizeMode={"contain"}
                source={require('./images/camera1.png')}
              />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: DEVICE_HEIGHT,
    backgroundColor: '#F0F0F0',
  },
  navbar: {
    backgroundColor: '#2ecc71',
    opacity: 0.88,
    height: DEVICE_HEIGHT / 8.2,
    width: DEVICE_WIDTH,
  },
  bodyContainer: {
    paddingTop: DEVICE_HEIGHT / 200,
    backgroundColor: '#f7f8fd',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT - (DEVICE_HEIGHT / 11),
  },
  description: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 5.8,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: -(DEVICE_HEIGHT / 200),
    marginBottom: 5,
  },
  descriptionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: DEVICE_HEIGHT / 50,
    paddingTop: DEVICE_WIDTH / 30,
    opacity: 0.7,
  },
  descriptionParagraph: {
    width: DEVICE_WIDTH / 1.03,
    fontSize: 14,
    textAlign: 'center',
    paddingLeft: DEVICE_WIDTH / 20,
    paddingRight: DEVICE_WIDTH / 20,
    opacity: 0.7,
  },
  imageContainer: {
    width: DEVICE_WIDTH,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width:  DEVICE_WIDTH / 2.1,
    height:  DEVICE_WIDTH / 2.1,
    backgroundColor: '#2ecc71',
    margin: DEVICE_WIDTH / 300,
  },
  bottomBar: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 12,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  cameraButton: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_HEIGHT / 10,
  },
  cameraLogo: {
    height: DEVICE_HEIGHT / 14,
    width: DEVICE_HEIGHT / 14,
  },
});
AppRegistry.registerComponent('social', () => social);
