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

export default class ChallengeCamera extends Component {
  constructor(props) {
    super(props);

    this.state={
      camType: Camera.constants.Type.back,
      torch: Camera.constants.TorchMode.off,
      boltColor: 'white',
      arrowColor: 'white'
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
            aspect={Camera.constants.Aspect.fill}
            captureTarget={Camera.constants.CaptureTarget.temp}
            captureAudio={false}

            type={this.state.camType}
            torchMode={this.state.torch}
          >
          <View style={styles.capture}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Icon
                  name='bolt'
                  type='font-awesome'
                  color={this.state.boltColor}
                  underlayColor='transparent'
                  size={40}

                  onPress={() => {
                    this.lightToggle();
                  }}
                />
              </View>

              <View style={{flex: 1}}>
                <Icon
                  name='camera'
                  type='font-awesome'
                  color='white'
                  underlayColor='transparent'
                  size={80}

                  onPress={() => {
                    this.takePicture();
                  }}
                />
              </View>

              <View style={{flex: 1}}>
                <Icon
                  name='mail-forward'
                  type='font-awesome'
                  color={this.state.arrowColor}
                  underlayColor='transparent'
                  size={40}
                  onPress={() => {
                    this.typeToggle()
                  }}
                />
              </View>

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
        this.props.camera(data.path)
        console.log(data)
      })
      .catch(err => console.error(err));
  }

  typeToggle() {
    if (this.state.camType == Camera.constants.Type.back){
      this.setState({
                      camType: Camera.constants.Type.front,
                      arrowColor: 'gold',
                    })
    } else {
      this.setState({
                      camType: Camera.constants.Type.back,
                      arrowColor: 'white'
                    })
    }
  }

  lightToggle() {
    if (this.state.boltColor == 'white'){
      this.setState({
                      torch: Camera.constants.TorchMode.on,
                      boltColor: 'gold',
                    })
    } else {
      this.setState({
                      torch: Camera.constants.TorchMode.off,
                      boltColor: 'white'
                    })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.4,
    backgroundColor: '#000',
    height: (Dimensions.get('window').height / 4),
    width: Dimensions.get('window').width
  }
});
