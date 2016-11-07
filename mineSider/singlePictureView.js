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

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

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

export default class social extends Component {

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
      // Filters out non-friend likes, and returns an array of friend likers - max 4 friends
      let friendsConfirmed = pst.likes.filter((a) => {
        for (let i = 0; i < me.friends.length; i++){
          if (a == me.friends[i] && inc < 4){
            inc++;
            return true;
          }
        }})
      // Returns image tags for friend likers based on friendsConfirmed
      let friendLikes = friendsConfirmed.map((a,b) => {
            return <Image key = {b} style={styles.likers} source={{uri: a.picturePath}}></Image>
      })

      console.log(friendLikes);

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

            <View style={styles.likeBar}>
              {friendLikes}

              <Text style={{fontSize: 18}}> + {pst.likes.length - friendLikes.length} </Text>

              <Image style={styles.likeButton} source={require('./Resources/icons/likeIcon.png')}></Image>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
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
  likeBar: {
    height: DEVICE_HEIGHT / 10,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  likers: {
    width: DEVICE_HEIGHT / 22,
    height: DEVICE_HEIGHT / 22,
    marginLeft: DEVICE_WIDTH / 80,
    borderRadius: 50,
  },
  commentBar:{
    height: DEVICE_HEIGHT / 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentBody: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: DEVICE_HEIGHT / 200,
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
  likeButton: {
    position: 'absolute',
    top: DEVICE_HEIGHT / 70,
    right: DEVICE_HEIGHT / 36,
    height: DEVICE_HEIGHT / 15,
    width: DEVICE_HEIGHT / 15,
  },


  titleText: {
    paddingLeft: DEVICE_HEIGHT / 50,
    fontSize: 25,
  },
  commentText: {
    marginLeft: DEVICE_WIDTH / 50,
    fontSize: 14,
  },
});

AppRegistry.registerComponent('social', () => social);
