import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Blocks,
  FriendBlock
} from './modules'

import {
  SearchBar,
  Icon
} from 'react-native-elements'

import styles from './styles/Friends';
function person(){
  this.name = "";
  this.picturePath = "";
  this.friends = [];
}
var me = new person();
  me.name = "Jørgen";
  me.picturePath = "http://facebookcraze.com/wp-content/uploads/2009/12/funny_profile_pic_for_facebook_rape.jpg";

var f1 = new person();
  f1.name = "Atbin";
  f1.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/13450786_1166169403435324_6701603115698877888_n.jpg?oh=8deb29a29e5d8a0a74a7bf5527317fea&oe=588AD4EE";

var f2 = new person();
  f2.name = "Bjarte";
  f2.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/534545_10151000508639230_719468928_n.jpg?oh=2dfc2295927eb46651e733279090a26d&oe=589533F5";

var f3 = new person();
  f3.name = "Henrik";
  f3.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1484606_10204683850909326_7450466084526933181_n.jpg?oh=36174d2356a1d6d7c8685bcd4c367103&oe=589633B4";

var f4 = new person();
  f4.name = "Karoline";
  f4.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12541098_1218109328203241_3639725756279389260_n.jpg?oh=d72325b4e0cb78a1baddbe70d3e2950a&oe=58D1DCDC";

var f5 = new person();
  f5.name = "Morten";
  f5.picturePath = "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/11892209_1180715341944580_8031166336427477610_n.jpg?oh=bc73eba1c5d4c2815d3f2d4f464c251a&oe=58CD8ADD";

me.friends = [f1,f2,f3,f4,f5];

export default class Friends extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchbar: false
    }
  }
  changeBar(state) {
    this.setState({
      searchbar: state
    })
  }
  renderSearch() {
    if(!this.state.searchbar) {
      return (
          <TouchableHighlight style={styles.addButton}
            onPress={() => this.changeBar(true)}
          >
            <View style={styles.add}>
              <Text style={styles.addText}> ADD FRIEND </Text>
            </View>
          </TouchableHighlight>
      )
    }
    return (
      <View>
        <SearchBar
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
          ref={"search"}
          textInputRef={"searchbar"}
          icon={{
            color: '#86939e',
            name: 'search',
            style: styles.searchIcon
          }}
          lightTheme
          onChangeText={() => console.log("this.refs")}
          placeholder='Type Here...' />

          <View style={styles.searchClose}>
            <Icon
              onPress={() => this.changeBar(false)}
              color={'#999'}
              name='close' />
          </View>
      </View>
    )

  }
  componentDidUpdate() {
    if(this.refs.search)
      this.refs.search.refs.searchbar.focus()
  }

  render() {

    let showFriends = me.friends.map((a,b) => {
        return <FriendBlock
                onPress={() => {
                  Actions.profile()
                }}
                image={a.picturePath}
                name={a.name}
                key={b}
                />
      })

    return (
      <View style={styles.container}>


        <View style={styles.body}>
          <ScrollView style={{flex: 1,}}>
            <TouchableHighlight style={styles.meButton}>
              <View style={styles.me}>
                <Image style={styles.myImage} source={{uri: me.picturePath}}></Image>
                <Text style={styles.meText}> {me.name}</Text>
                <View style = {styles.cogIcon}>
                  <Icon
                    name='cog'
                    type='font-awesome'
                    color='black'
                  />
                </View>
              </View>
            </TouchableHighlight>

            <View>
              {this.renderSearch()}
            </View>

            <Blocks>
              {showFriends}
            </Blocks>
          </ScrollView>
        </View>

      </View>
    );
  }
}
