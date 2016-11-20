import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';

import * as Route from '../actions/route';

import { Actions } from 'react-native-router-flux';

import {
  MainHeader,
  Blocks,
  FriendBlock
} from './modules'

import {
  SearchBar,
  Icon
} from 'react-native-elements'

import styles from './styles/Friends';


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

    let showFriends = (this.props.user.friends || []).map((a,b) => {
        return <FriendBlock
                onPress={() => {
                  Actions.profile({user: a})
                }}
                image={a.image}
                name={a.nick}
                key={b}
                />
      })

    return (
      <View style={styles.container}>

        <View style={styles.body}>
          <ScrollView>
            <TouchableHighlight style={styles.meButton}>
              <View style={styles.me}>
                <Image style={styles.myImage} source={{uri: this.props.user.image}}></Image>
                <Text style={styles.meText}> {this.props.user.nick}</Text>
                <TouchableHighlight
                  onPress = {() => {
                    this.props.dispatch(Route.to("profilesettingsmain"));
                  }}
                  activeOpacity={71 / 100}
                  underlayColor={"rgb(210,210,210)"}
                >
                  <View style = {styles.cogIcon}>
                    <Icon
                      name='cog'
                      type='font-awesome'
                      color='black'
                    />
                  </View>
                </TouchableHighlight>
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
