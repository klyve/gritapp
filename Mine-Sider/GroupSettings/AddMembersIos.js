import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Image,
  ScrollView,
  Switch,
  Alert,
  TextInput,
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 10;

// Group
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

// Members (bruker friends inntil databasen er oppe)
function person(){
  this.name = "";
  this.picturePath = "";
  this.friends = [];
}

var me = new person();
  me.name = "Jørgen";
  me.picturePath = "http://facebookcraze.com/wp-content/uploads/2009/12/funny_profile_pic_for_facebook_rape.jpg";

var friend1 = new person();
  friend1.name = "Atbin";
  friend1.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";

var friend2 = new person();
  friend2.name = "Bjarte";
  friend2.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/534545_10151000508639230_719468928_n.jpg?oh=2dfc2295927eb46651e733279090a26d&oe=589533F5";

  var friend3 = new person();
    friend3.name = "Henrik";
    friend3.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var friend4 = new person();
  friend4.name = "Karoline";
  friend4.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12541098_1218109328203241_3639725756279389260_n.jpg?oh=d72325b4e0cb78a1baddbe70d3e2950a&oe=58D1DCDC";

var friend5 = new person();
  friend5.name = "Morten";
  friend5.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";

var friend6 = new person();
  friend6.name = "Morten";
  friend6.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";

var friend7 = new person();
  friend7.name = "Morten";
  friend7.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";

var friend8 = new person();
  friend8.name = "Morten";
  friend8.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";

var friend9 = new person();
  friend9.name = "Morten";
  friend9.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";


me.friends.push(friend1);
me.friends.push(friend2);
me.friends.push(friend3);
me.friends.push(friend4);
me.friends.push(friend5);
me.friends.push(friend6);
me.friends.push(friend7);
me.friends.push(friend8);
me.friends.push(friend9);


export default class social extends Component {
  constructor() {
    super();
    this.state = {
      friends: me.friends
    }
  }
  targetItem(index) {
    me.friends[index].status = !me.friends[index].status;
    this.setState({
      friends: me.friends
    })
  }
  render() {

    let showFriends = this.state.friends.map((a,b) => {
        let styled = [styles.friends];
        if(a.status == 1) {
          styled.push(styles.friendTargeted)
        }
        return <TouchableHighlight
               onPress = {() => { this.targetItem(b) }}
               key = {b}
               activeOpacity={71 / 100}
               underlayColor={"rgb(210,210,210)"}
               style={styles.friendButton}>
                <View style={styled}>
                  <Image
                    style={styles.friendImage}
                    source={{uri: a.picturePath}} />
                  <Text style={styles.friendText}> {a.name}</Text>
                </View>
               </TouchableHighlight>
      })

    return (
      <View style={styles.container}>
        <View style={styles.navBar}/>
        <View style={styles.body}>

          <View style={styles.groupImageView}>
            <Image style={styles.groupImage} source={{uri: currentGroup.picturePath}}></Image>
          </View>
          <Text style={styles.headerText}>Add members</Text>
        </View>
        <View style = {styles.membersContainer}>
          <ScrollView>
            {showFriends}
          </ScrollView>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  navBar: {
    flex: 1/5,
    backgroundColor: '#3fc380',
  },
  body: {
    flex: 1/3,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    backgroundColor: '#ffffff',
  },
  groupImageView: {
    alignItems: 'center',
  },
  groupImage: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderWidth: 8,
    borderColor: '#ffffff',
    top: -60,
  },
  headerText: {
    marginTop: -50,
    fontSize: 30,
    color: '#3fc380',
  },
  membersContainer: {
    marginTop: MARGIN/5,
    flex: 1,
    flexDirection: 'column',
  },
  friendButton: {
    width: 380,
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    marginLeft: MARGIN,
    marginRight: MARGIN,
    flexDirection: 'row',
 },
 editButton: {
   height: 25,
   width: 20,
   borderRadius: 5,
 },
  friends: {
    height: 70,
    width: 380,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  friendImage: {
    marginLeft: MARGIN,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  friendText: {
   padding: 5,
   paddingLeft: 20,
   fontSize: 20,
   width: 250,
 },
 friendTargeted: {
   backgroundColor: '#2ecc71',
 },
});

AppRegistry.registerComponent('social', () => social);
