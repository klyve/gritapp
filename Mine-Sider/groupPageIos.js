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
  gjovik.picturePath = "http://pilegrimsleden.no/uploads/made/uploads/images/Om/POI/Kommunevaapen/390px-Gjoevik_komm.svg_600_738_s.png";
  gjovik.description = "Vi utfordrer Gjøvik!";

var polse = new Group();
  polse.name = "Pølsefest";
  polse.picturePath = "http://blog.etundra.com/wp-content/Media/2013/09/sausage_2001253c.jpg";
  polse.description = "Jeg liker milfs...";

groups.push(ntnu);
groups.push(gjovik);
groups.push(polse);

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
        <View>
            <View style={styles.navBar}></View>
          <TextInput
              style={{
              height:  DEVICE_HEIGHT / 15,
              width:  DEVICE_WIDTH,
              borderBottomWidth: 1,
              textAlign: 'center',
              fontSize: 20,
              borderColor: "black",
              backgroundColor: 'rgba(0,0,0,0)',
              borderRadius: 10,
            }}
            placeholder={"Search "}
            placeholderTextColor={"rgba(198,198,204,1)"}
            onChangeText={(text) => {this.setState({text})}}
            onSubmitEditing={() => {this.setState({text: ''})}}
            value={(this.state && this.state.text) || ''}
          />
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
    backgroundColor: '#f5f5f5',
  },
  navBar: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
  },
  group: {
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.06,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  groupImage: {
    marginLeft: 10,
    width: DEVICE_HEIGHT / 10,
    height: DEVICE_HEIGHT / 10,
    borderWidth: 0,
    borderColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  groupText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  scrollView: {
    flexDirection: 'column',
  },
  button: {
    marginBottom: DEVICE_HEIGHT / 60,
    marginLeft: DEVICE_WIDTH - (DEVICE_WIDTH / 1.03),
    height: DEVICE_HEIGHT / 8,
    width: DEVICE_WIDTH / 1.05,
  },
});

AppRegistry.registerComponent('social', () => social);
