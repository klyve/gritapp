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
import { connect } from 'react-redux';
import {
  SearchBar,
  Icon
} from 'react-native-elements'
import styles from './styles/groupsearch';
import * as Groups from '../../actions/groups';



class GroupSearch extends Component {

  constructor(props){
    super(props);
  }

  render() {
    let searchedGroups = this.props.groups.searchResults.map((a,b) => {
        return <FriendBlock
                  onPress={() => {Actions.groupjoin(b)}}
                  image={a.image}
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
              this.props.dispatch(Groups.findGroup({text}))
              this.setState({finding: true})
            }}
          />

          <ScrollView style = {styles.results}>
            {searchedGroups}
          </ScrollView>

        </View>

      </View>
    );
  }
}

export default connect(state => ({
    state,
    groups: state.groups,
  })
)(GroupSearch);
