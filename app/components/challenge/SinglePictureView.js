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
  TextInput,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
// import { Icon } from 'react-native-router-flux';
import { Icon } from 'react-native-elements'
import {
  Blocks,
  FriendBlock
} from '../modules';

import styles from './styles/SinglePictureView';

//Constants
const MARGIN = 10;

// persons (TESTDATA)
function Person(){
  this.name = "";         // Contains a person's name
  this.picturePath = "";  // Contains the link to the persons profile picture
  this.friends = [];      // Contains person's friends (objects - other persons)
}

function Post(){
  this.uploader;      // Contains the person (object) who uploaded the picture
  this.picturePath;   // Contains the link to the uploaded picture
  this.likes = [];    // Contains persons (objects) who has liked the picture
  this.comments = []; // Contains the post's comments (objects)
}

function Comment(){
  this.text;    // Contains the comment's text
  this.author;  // Contains the person (object) who wrote the comment
}

// People (TESTDATA)
var p1 = new Person();
  p1.name = "Jørgen";
  p1.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13346786_857665671010201_2266055122162485673_n.jpg?oh=3f226097634b0e47ece99497b2df9811&oe=589C8849";

var p2 = new Person();
  p2.name = "Atbin";
  p2.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";

var p3 = new Person();
  p3.name = "Bjarte";
  p3.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/534545_10151000508639230_719468928_n.jpg?oh=2dfc2295927eb46651e733279090a26d&oe=589533F5";

var p4 = new Person();
  p4.name = "Henrik";
  p4.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var p5 = new Person();
  p5.nap1 = "Karoline";
  p5.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12541098_1218109328203241_3639725756279389260_n.jpg?oh=d72325b4e0cb78a1baddbe70d3e2950a&oe=58D1DCDC";

var p6 = new Person();
  p6.name = "Morten";
  p6.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";

    p1.friends = [p2,p4,p6]
    p2.friends = [p1,p4,p6]
    p3.friends = [p5]
    p4.friends = [p1,p2,p6]
    p5.friends = [p3]
    p6.friends = [p1,p2,p4]

var me = p1; // SETTER HVEM SOM SER SKJERMEN | FOR TESTING


// Comments (TESTDATA)
var c1 = new Comment()
  c1.text = "Så søøt!";
  c1.author = p2;

var c2 = new Comment()
  c2.text = "Hva heter den?";
  c2.author = p2;

var c3 = new Comment()
  c3.text = "Nommen <3";
  c3.author = p4;

var c4 = new Comment()
  c4.text = "69/69 utrolig søt";
  c4.author = p6;


// Posts
var pst = new Post()
  pst.uploader = p1;
  pst.picturePath = "https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg";
  pst.likes = [p1,p2,p3,p4,p5,p6]
  pst.comments = [c1,c2,c3,c4];

export default class SinglePictureView extends Component {

  constructor(props){
    super(props)
  }


  render() {

    var inc = 0; // Used (in friendsConfirmed) as a barrier to prevent more than 4 friend pictures in the like-bar

    let showComments = pst.comments.map((a,b) => {
        return <TouchableHighlight
               onPress = {() => {}}
               key = {b}
               activeOpacity={71 / 100}
               underlayColor={"rgb(210,210,210)"}
               style={styles.friendButton}>
                <View style={styles.commentBody}>
                  <Image style={styles.peopleImage} source={{uri: a.author.picturePath}}></Image>
                  <Text style={styles.commentText}> {a.text}</Text>
                </View>
               </TouchableHighlight>
      })


    return (
        <View style={styles.container}>

          <View style={styles.body}>
            <View style ={styles.title}>
                <Image style={styles.peopleImage} source={{uri: pst.uploader.picturePath}}/>
                <Text style={styles.titleText}> {pst.uploader.name} </Text>
              <View style={{marginRight: 20}}>
                <Icon
                  style={styles.exitButton}
                  name='times'
                  type='font-awesome'
                  color='#000'
                  underlayColor='transparent'
                  onPress={()=>{this.props.close()}}
                />
              </View>
            </View>

            <View style={{flex: 7,}}>
              <ScrollView style={styles.scroll}>
                <Image style={styles.currentImage} source={{uri: this.props.picture}}></Image>

                <View style={styles.likeBar}>
                  <Text style={{fontSize: 30}}> {pst.likes.length}</Text>
                </View>


                <TouchableHighlight
                onPress = {() => {}}
                style = {styles.commentBar}>
                  <Text style = {{fontSize: 20, textAlign: 'center',}}>
                    ADD COMMENT
                  </Text>
                </TouchableHighlight>

                {showComments}


              </ScrollView>
            </View>

          </View>

        </View>
    );
  }
}
