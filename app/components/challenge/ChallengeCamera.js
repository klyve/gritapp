import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class ChallengeCamera extends Component {
  constructor(props) {
    super(props);

    this.state={
      camType: Camera.constants.Type.back,
      torch: Camera.constants.TorchMode.off,
      boltColor: '#fff',
      arrowColor: '#fff'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fit}
            captureTarget={Camera.constants.CaptureTarget.temp}
            captureAudio={false}

            type={this.state.camType}
            torchMode={this.state.torch}
          >
          <View style={styles.capture}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <TouchableHighlight
                underlayColor={'transparent'}
                style={{flex: 1, paddingTop: 15, paddingBottom: 15, marginLeft: 30, marginRight: 30}}
                onPress={() => {
                  this.lightToggle();
                }}
              >
                <View>
                  <Icon
                    name='bolt'
                    type='font-awesome'
                    color={this.state.boltColor}
                    underlayColor='transparent'
                    size={30}
                  />
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor={'transparent'}
                style={{flex: 1}}
                onPress={() => {
                  this.takePicture();
                }}
              >
                <View>
                  <Icon
                    name='circle-o'
                    type='font-awesome'
                    color='white'
                    underlayColor='transparent'
                    size={100}
                  />
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                underlayColor={'transparent'}
                style={{flex: 1, paddingTop: 15, paddingBottom: 15, marginLeft: 30, marginRight: 30}}
                onPress={() => {
                  this.typeToggle()
                }}
              >
                <View>
                  <Icon
                    name='mail-forward'
                    type='font-awesome'
                    color={this.state.arrowColor}
                    underlayColor='transparent'
                    size={30}
                  />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </Camera>

      </View>
    );
  }

  takePicture() {
    console.log("!!")
    this.camera.capture()
      .then((data) => {
        Actions.confirmpictureview({camera: this.props.camera, picture: data.path})

        console.log(data)
      })
      .catch(err => console.error(err));

  }

  typeToggle() {
    if (this.state.camType == Camera.constants.Type.back){
      this.setState({
                      camType: Camera.constants.Type.front,
                      arrowColor: '#2ecc71',
                    })
    } else {
      this.setState({
                      camType: Camera.constants.Type.back,
                      arrowColor: '#fff'
                    })
    }
  }

  lightToggle() {
    if (this.state.boltColor == '#fff'){
      this.setState({
                      torch: Camera.constants.TorchMode.on,
                      boltColor: '#2ecc71',
                    })
    } else {
      this.setState({
                      torch: Camera.constants.TorchMode.off,
                      boltColor: '#fff'
                    })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.4,
    backgroundColor: '#000',
    paddingTop: 20,
    paddingBottom: 20,
  }
});
