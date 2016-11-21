import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';

import styles from './styles/ConfirmPictureView';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';


export default class ConfirmPictureView extends Component {

  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {

    return (
      <View style={styles.container}>
        <Image
        style = {styles.preview}
        source = {{uri: this.props.picture}}
        />
        <View style = {styles.bottomBar}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight
              underlayColor={'transparent'}
              style={{flex: 1, paddingTop: 15, paddingBottom: 15, marginLeft: 30, marginRight: 30}}
              onPress={() => {
                Actions.pop();
              }}
            >
              <View>
                <Icon
                  name='repeat'
                  type='font-awesome'
                  color={'#FFF'}
                  underlayColor='transparent'
                  size={30}
                />
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'transparent'}
              style={{flex: 1}}>
              <View>
                <Icon
                  name='circle-o'
                  type='font-awesome'
                  color='transparent'
                  underlayColor='transparent'
                  size={100}
                />
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={'transparent'}
              style={{flex: 1, paddingTop: 15, paddingBottom: 15, marginLeft: 30, marginRight: 30}}
              onPress={() => {
                this.props.camera(this.props.picture)
                Actions.pop({popNum: 2})
              }}>
              <View>
                <Icon
                  name='check'
                  type='font-awesome'
                  color={'#FFF'}
                  underlayColor='transparent'
                  size={30}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
