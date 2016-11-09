import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

//Constants
const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH = Dimensions.get('window').width;
const MARGIN = 10;

var groups;
var searchUp;

// Blueprints
function Group(){
  this.name = "";
  this.picturePath = "";
  this.description = "";
}

var ntnu = new Group();
  ntnu.name = "NTNU TRONDHEIM";
  ntnu.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
  ntnu.description = "Offentlig gruppe for NTNU!";

  var ntnu1 = new Group();
    ntnu1.name = "NTNU GJØVIK";
    ntnu1.picturePath = "https://pbs.twimg.com/profile_images/661115078964412416/T9t1CC_W.png";
    ntnu1.description = "Offentlig gruppe for NTNU Gjøvik!";

var gjovik = new Group();
  gjovik.name = "GJØVIK";
  gjovik.picturePath = "http://pilegrimsleden.no/uploads/made/uploads/images/Om/POI/Kommunevaapen/390px-Gjoevik_komm.svg_600_738_s.png";
  gjovik.description = "Vi utfordrer Gjøvik!";

var polse = new Group();
  polse.name = "PØLSEFEST";
  polse.picturePath = "http://blog.etundra.com/wp-content/Media/2013/09/sausage_2001253c.jpg";
  polse.description = "Jeg liker milfs...";


groups = [ntnu, ntnu1, gjovik, polse];

export default class social extends Component {

  constructor(){
    super();
    this.state = {showGroups: []};
  }

  render() {
    let searchedGroups = this.state.showGroups.map((a,b) => {
        return <TouchableHighlight
          onPress = {() => {}}
          key = {b}
          activeOpacity={71 / 100}
          underlayColor={"rgb(210,210,210)"}
          style = { [styles.button] }>
          <View style={styles.group}>
              <Image style={styles.groupImage} source={{uri: a.picturePath}}></Image>
              <Text style={styles.groupText}> {a.name} </Text>
          </View>
        </TouchableHighlight>

      })

    return (
      <View style={styles.container}>
        <View style={styles.navBar}></View>

        <View style={styles.body}>

          <TextInput
          style={styles.searchBar}
          placeholder={'Search'}
          placeholderTextColor={'#999999'}
          onChangeText={(text) => {
            searchUp = text;  // SEARCH TO SERVER FOR FILTERING

            // LOCAL SEARCH FOR TESTING
            let match = [];

            if (text == '') {
              match = [];
            } else {
              groups.map((a) => {
                if ((a.name.search(text) != -1) && (match.indexOf(a) == -1)) {
                  match.push(a);
                }
              })
            }
            this.setState({showGroups: match});
          }}
          />

          <ScrollView>
            {searchedGroups}
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
    backgroundColor: '#f0f0f0',
  },
  searchBar: {
    fontSize: 20,
    textAlign: 'center',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  groupImage: {
    marginTop: MARGIN,
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  groupText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  button: {
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },
});

AppRegistry.registerComponent('social', () => social);
