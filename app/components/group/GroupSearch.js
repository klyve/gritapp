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
import {
  Blocks,
  FriendBlock,
  MainHeader
} from '../modules';
import { Actions } from 'react-native-router-flux';
import {
  SearchBar,
  Icon
} from 'react-native-elements'
import styles from './styles/groupsearch';

var groups;
var search;

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

export default class GroupSearch extends Component {

  constructor(){
    super();
    this.state = {showGroups: []};
  }

  render() {
    let searchedGroups = this.state.showGroups.map((a,b) => {
        return <FriendBlock
                  onPress={() => {Actions.groupjoin(b)}}
                  image={a.picturePath}
                  name={a.name}
                  key={b}
                />

      })

    return (
      <View style={styles.container}>
        <MainHeader
          color="green"
          title="Join group"
          leftBtn="chevron-left"
          left={() => { Actions.pop() }}
        />
        <View style={styles.body}>
          <SearchBar
            containerStyle={styles.searchContainer}
            inputStyle={styles.searchInput}
            icon={{
              color: '#86939e',
              name: 'search',
              style: styles.searchIcon
            }}
            placeholder='Enter Group name...'
            lightTheme
            onChangeText={(text) => {
              let match = [];

              search = text.toUpperCase();

              if (text == '') {
                match = [];
              } else {
                groups.map((a) => {
                  if ((a.name.search(search) != -1) && (match.indexOf(a) == -1)) {
                    match.push(a);
                  }
                })
              }
              this.setState({showGroups: match});
            }} />

          <ScrollView style = {styles.results}>
            {searchedGroups}
          </ScrollView>

        </View>

      </View>
    );
  }
}
