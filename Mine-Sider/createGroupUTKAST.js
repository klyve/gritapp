import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TextInput,
  Image,
} from 'react-native';

// Dive width and height
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

function person(){
  this.name = "";
  this.picturePath = "";
  this.friends = [];
}

var me = new person();
  me.name = "Jørgen";
  me.picturePath = "http://facebookcraze.com/wp-content/uploads/2009/12/funny_profile_pic_for_facebook_rape.jpg";
  me.status = 0;

var friend1 = new person();
  friend1.name = "Atbin";
  friend1.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";
  friend1.status = 0;
var friend2 = new person();
  friend2.name = "Bjarte";
  friend2.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/534545_10151000508639230_719468928_n.jpg?oh=2dfc2295927eb46651e733279090a26d&oe=589533F5";
  friend2.status = 0;
var friend3 = new person();
  friend3.name = "Henrik";
  friend3.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";
  friend3.status = 0;
var friend4 = new person();
  friend4.name = "Karoline";
  friend4.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12541098_1218109328203241_3639725756279389260_n.jpg?oh=d72325b4e0cb78a1baddbe70d3e2950a&oe=58D1DCDC";
  friend4.status = 0;
var friend5 = new person();
  friend5.name = "Morten";
  friend5.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";
  friend5.status = 0;

me.friends.push(friend1);
me.friends.push(friend2);
me.friends.push(friend3);
me.friends.push(friend4);
me.friends.push(friend5);


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
        <View style = {styles.navbar}></View>
        <View style = {styles.top}>
          <TextInput
          style={styles.groupName}
          placeholder={'Group name'}
          placeholderTextColor={"rgba(198,198,204,1)"}
          onChangeText={(text) => {this.setState({text})}}
          onSubmitEditing={() => {this.setState({text: ''})}}
          value={(this.state && this.state.text) || ''}
          />

          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}
          style = {styles.cameraButton}>

            <Image
            resizeMode={"cover"}
            style = {styles.cameraLogo}
            source = {require('./images/camera1.png')}/>

          </TouchableHighlight>
        </View>

        <View style = {styles.buttonContainer}>
          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}>

            <View style = {styles.privateButton}>
              <Text style={styles.buttonText}>Private</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          onPress = {() => {}}>

            <View style = {styles.publicButton}>
              <Text style={styles.buttonText}>Public</Text>
            </View>
          </TouchableHighlight>
        </View>

        <ScrollView style={styles.friendsContainer}>
          {showFriends}
        </ScrollView>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  // Contains all element in the page
  container : {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: '#f5f5f5',
  },
  // Navbar
  navbar: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  // Container for textinput for group name and camera logo
  top: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT / 10,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  // Textinput for group name
  groupName: {
    marginTop: DEVICE_HEIGHT / 80,
    marginLeft: -(DEVICE_WIDTH / 6),
    marginRight: DEVICE_WIDTH / 4,
    height: DEVICE_HEIGHT / 13,
    width: DEVICE_WIDTH / 2.5,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderColor: "rgba(0,0,0,0.5)",
  },
  // Camera logo
  cameraLogo: {
    width: DEVICE_WIDTH / 10,
    height: DEVICE_WIDTH / 10,
  },
  // Touchable highlight for camera logo
  cameraButton: {
    marginRight: DEVICE_WIDTH / 4,
    width: DEVICE_WIDTH / 10,
    height: DEVICE_WIDTH / 10,
    borderRadius: 20,
  },
  // Contains Private and Public button
  buttonContainer: {
    flexDirection: 'row',
    padding: DEVICE_HEIGHT / 100,
    backgroundColor: '#f5f5f5',
  },
  privateButton: {
    height: DEVICE_HEIGHT / 20,
    width: DEVICE_WIDTH / 2.1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
  },
  publicButton: {
    height: DEVICE_HEIGHT / 20,
    width: DEVICE_WIDTH / 2.1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: DEVICE_WIDTH / 40,
  },
  // Text inside button
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  // Contains friendlist
  friendsContainer: {
    height: DEVICE_HEIGHT / 1.41,
    width: DEVICE_WIDTH,
    backgroundColor: 'white',
  },
  friendText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  friendImage: {
    marginLeft: DEVICE_HEIGHT / 50,
    width: DEVICE_HEIGHT / 12,
    height: DEVICE_HEIGHT / 12,
    borderRadius: 10,
  },
  friends: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  friendTargeted: {
    backgroundColor: '#2ecc71',
  },
});
AppRegistry.registerComponent('social', () => social);
