import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  Dimensions,
  TextInput,
  Image
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;

function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
}

var groups = [];

var ntnu = new Group();
  ntnu.name = "NTNU";
  ntnu.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  ntnu.description = "Offentlig gruppe for NTNU!";

var gjovik = new Group();
  gjovik.name = "Gjøvik";
  gjovik.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  gjovik.description = "Vi utfordrer Gjøvik!";

var polse = new Group();
  polse.name = "Pølsefest";
  polse.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse.description = "Jeg liker milfs...";

var polse2 = new Group();
  polse2.name = "Pølsefest";
  polse2.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse2.description = "Jeg liker milfs...";

var polse4 = new Group();
  polse4.name = "Pølsefest";
  polse4.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse4.description = "Jeg liker milfs...";

var polse3 = new Group();
  polse3.name = "Pølsefest";
  polse3.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse3.description = "Jeg liker milfs...";

var polse5 = new Group();
  polse5.name = "Pølsefest";
  polse5.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse5.description = "Jeg liker milfs...";

var polse6 = new Group();
  polse6.name = "Pølsefest";
  polse6.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse6.description = "Jeg liker milfs...";

var polse7 = new Group();
  polse7.name = "Pølsefest";
  polse7.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse7.description = "Jeg liker milfs...";

var polse8 = new Group();
  polse8.name = "Pølsefest";
  polse8.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  polse8.description = "Jeg liker milfs...";

groups.push(ntnu);
groups.push(gjovik);
groups.push(polse);
groups.push(polse2);
groups.push(polse3);
groups.push(polse4);
groups.push(polse5);
groups.push(polse6);
groups.push(polse7);
groups.push(polse8);


export default class social extends Component {

  render() {

    let showGroups = groups.map((a,b) => {
        return <TouchableHighlight
          onPress = {() => {}}
          key = {b}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = {styles.button}>
          <View style={styles.group}>
              <Image style={styles.groupImage} source={{uri: a.picturePath}}></Image>
              <Text style={styles.groupText}> {a.name} </Text>
          </View>
        </TouchableHighlight>

      })

    return (
      <View style={styles.container}>
        <View style = {styles.body}>
            <View style={styles.navBar}></View>

          <ScrollView style={styles.scrollView}>
                {showGroups}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    flex: 1/10,
    position: 'relative',
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  group: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 2,
  },
  groupImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
  },
  groupText: {
    fontSize: 20,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
  },
});

AppRegistry.registerComponent('social', () => social);
