import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

function person(){
  this.name = "";
  this.picturePath = "";
  this.friends = [];
}

function post(){
  this.uploader;
  this.picturePath;
  this.likes = [];
  this.comments = [];
}

function comment(){
  this.text;
  this.author;
}

// People
var p1 = new person();
  p1.name = "Jørgen";
  p1.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13346786_857665671010201_2266055122162485673_n.jpg?oh=3f226097634b0e47ece99497b2df9811&oe=589C8849";

var p2 = new person();
  p2.name = "Atbin";
  p2.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";

var p3 = new person();
  p3.name = "Bjarte";
  p3.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/534545_10151000508639230_719468928_n.jpg?oh=2dfc2295927eb46651e733279090a26d&oe=589533F5";

var p4 = new person();
  p4.name = "Henrik";
  p4.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var p5 = new person();
  p5.nap1 = "Karoline";
  p5.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12541098_1218109328203241_3639725756279389260_n.jpg?oh=d72325b4e0cb78a1baddbe70d3e2950a&oe=58D1DCDC";

var p6 = new person();
  p6.name = "Morten";
  p6.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";


// Comments
var c1 = new comment()
  c1.text = "Så søøt!";
  c1.author = p2;

var c2 = new comment()
  c2.text = "Hva heter den?";
  c2.author = p2;

var c3 = new comment()
  c3.text = "Nommen <3";
  c3.author = p4;


// Posts
var pst = new post()
  pst.uploader = p1;
  pst.picturePath = "https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg";
  pst.likes = [p2,p3,p5]
  pst.comments = [c1,c2,c3];



export default class social extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.body}>
          <View style ={styles.title}>
            <Image style={styles.peopleImage} source={{uri: pst.uploader.picturePath}}></Image>
            <Text style={styles.titleText}> {pst.uploader.name} </Text>
            <Image style={styles.exitButton} source={require('./Resources/icons/kryss.png')}></Image>
          </View>

          <ScrollView style={styles.scroll}>
            <Image style={styles.currentImage} source={{uri: pst.picturePath}}></Image>

            <View style={styles.likeBar}></View>

          </ScrollView>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#559955',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    height: DEVICE_HEIGHT - (DEVICE_HEIGHT / 6),
    width: DEVICE_WIDTH - (DEVICE_HEIGHT / 25),
    backgroundColor: '#ffffff',
  },
  title: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH - (DEVICE_HEIGHT / 25),
    flexDirection: 'row',
    alignItems: 'center',
  },
  scroll: {
    backgroundColor: '#f0f0f0',
  },
  likeBar:{
    height: DEVICE_HEIGHT / 10,
    alignItems: 'center',
    backgroundColor: 'blue',
  },


  peopleImage: {
    width: DEVICE_HEIGHT / 12,
    height: DEVICE_HEIGHT / 12,
    marginLeft: DEVICE_WIDTH / 80,
    borderRadius: 50,
  },
  currentImage: {
    height: DEVICE_WIDTH - (DEVICE_HEIGHT / 25),
    width: DEVICE_WIDTH - (DEVICE_HEIGHT / 25),
  },


  exitButton: {
    position: 'absolute',
    height: DEVICE_HEIGHT / 15,
    width: DEVICE_HEIGHT / 15,
    right: DEVICE_HEIGHT / 38,
    marginTop: DEVICE_HEIGHT / 50,
  },


  titleText: {
    paddingLeft: DEVICE_HEIGHT / 50,
    fontSize: 25,
  },
});

AppRegistry.registerComponent('social', () => social);
