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
const MARGIN = 10;

function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
  this.unread = 0;
}

// Testdata
var ntnu = new Group();
  ntnu.name = "NTNU";
  ntnu.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  ntnu.description = "Offentlig gruppe for NTNU! :)";
  ntnu.unread = 3;

var gjovik = new Group();
  gjovik.name = "Gjøvik";
  gjovik.picturePath = "http://pilegrimsleden.no/uploads/made/uploads/images/Om/POI/Kommunevaapen/390px-Gjoevik_komm.svg_600_738_s.png";
  gjovik.description = "Vi utfordrer Gjøvik!";
  gjovik.unread = 23;

var polse = new Group();
  polse.name = "Pølsefest";
  polse.picturePath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Reunion_sausages_dsc07796.jpg/220px-Reunion_sausages_dsc07796.jpg";
  polse.description = "Jeg liker milfs...";
  polse.unread = 143;

// Legger inn testdata
var groups = [ntnu, gjovik, polse];

export default class social extends Component {

  render() {

    let showGroups = groups.map((a,b) => {
        let itemstyles = (a.unread == 0) ? styles.noUnreadDot : styles.unreadDot;

        return <TouchableHighlight
          onPress = {() => {}}
          key = {b}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = { [styles.button] }>
          <View style={styles.group}>
              <Image style={styles.groupImage} source={{uri: a.picturePath}}></Image>

              <View style={itemstyles}>
                <Text style={styles.unreadDotNumber}>
                  {(a.unread > 99) ? 99 : a.unread}
                </Text>
              </View>

              <Text style={styles.groupText}> {a.name} </Text>

          </View>
        </TouchableHighlight>

      })

    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
        </View>

        <View style={styles.body}>
          <ScrollView>
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
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  body: {
    flex: 7,
    marginTop: 5,
  },

  group: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: MARGIN,
    paddingBottom: MARGIN,
  },

  groupImage: {
    marginLeft: MARGIN,
    width: 60,
    height: 60,
    borderRadius: 30,
  },


  unreadDot: {
    width: 28,
    height: 28,
    backgroundColor: '#ec644b',
    borderRadius: 14,
    marginLeft: -14,
  },
  noUnreadDot: {
    opacity: 0,
  },


  unreadDotNumber: {
    fontSize: 16,
    color: 'white',
    top: 2.5,
    textAlign: 'center',
  },
  groupText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  button: {
    marginTop: MARGIN / 2,
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },
});

AppRegistry.registerComponent('social', () => social);
