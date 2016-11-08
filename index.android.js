import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  ScrollView,
  Image
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 10;

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

me.friends.push(friend1);
me.friends.push(friend2);
me.friends.push(friend3);
me.friends.push(friend4);
me.friends.push(friend5);

export default class social extends Component {
  render() {

    let showFriends = me.friends.map((a,b) => {
        return <TouchableHighlight
               onPress = {() => {}}
               key = {b}
               activeOpacity={71 / 100}
               underlayColor={"rgb(210,210,210)"}
               style={styles.friendButton}>
                <View style={styles.friends}>
                  <Image style={styles.friendImage} source={{uri: a.picturePath}}></Image>
                  <Text style={styles.friendText}> {a.name}</Text>
                </View>
               </TouchableHighlight>
      })

    return (
      <View style={styles.container}>

        <View style={styles.navBar}>
        </View>

        <View style={styles.body}>
          <ScrollView style={{flex: 1,}}>
            <TouchableHighlight style={styles.meButton}>
              <View style={styles.me}>
                <Image style={styles.myImage} source={{uri: me.picturePath}}></Image>
                <Text style={styles.meText}> {me.name}</Text>
              </View>
            </TouchableHighlight>


            <TouchableHighlight style={styles.addButton}>
              <View style={styles.add}>
                <Text style={styles.addText}> ADD FRIEND </Text>
              </View>
            </TouchableHighlight>

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
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  body: {
    flex: 7,
  },
  meButton: {
    flex: 1,
    backgroundColor: 'red',
  },
  addButton: {
    flex: 1,
  },
  friendButton: {
    flex: 1,
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },


  me: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },
  add: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingTop: MARGIN * 2,
    paddingBottom: MARGIN * 2,
  },
  friends: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },


  myImage: {
    marginLeft: MARGIN * 2,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  friendImage: {
    marginLeft: MARGIN * 2,
    width: 60,
    height: 60,
    borderRadius: 30,
  },


  meText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 25,
  },
  friendText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  addText: {
    fontSize: 20,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('social', () => social);
