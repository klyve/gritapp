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
  this.unread = 0;
}

var groups = [];

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
groups.push(ntnu);
groups.push(gjovik);
groups.push(polse);

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

        <ScrollView style={styles.scrollView}>
          {showGroups}
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    height: DEVICE_HEIGHT,
    width: DEVICE_WIDTH,
    backgroundColor: '#f0f0f0',
  },
  navBar: {
    height: DEVICE_HEIGHT / 10,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  group: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  groupImage: {
    marginLeft: DEVICE_HEIGHT / 50,
    width: DEVICE_HEIGHT / 12,
    height: DEVICE_HEIGHT / 12,
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
  },
  unreadDot: {
    position: 'absolute',
    left: DEVICE_HEIGHT / 15,
    top: DEVICE_HEIGHT / 130,
    width: DEVICE_HEIGHT / 24,
    height: DEVICE_HEIGHT / 24,
    backgroundColor: '#ec644b',
    borderRadius: 50,
  },
  noUnreadDot: {
    opacity: 0,
  },
  unreadDotNumber: {
    fontSize: 16,
    color: 'white',
    top: DEVICE_HEIGHT / 270,
    textAlign: 'center',
  },
  groupText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  scrollView: {
    flexDirection: 'column',
    marginTop: DEVICE_HEIGHT / 100,
  },
  button: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.04,
    marginLeft: DEVICE_WIDTH - (DEVICE_WIDTH / 1.02),
    marginBottom: DEVICE_HEIGHT / 100,
  },
});

AppRegistry.registerComponent('social', () => social);
