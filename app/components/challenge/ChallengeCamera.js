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
      mirror: false,
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
            type={this.state.camType}
            mirrorImage={this.state.mirror}
          >
          <TouchableHighlight
            style={styles.capture}
            onPress={() => {
              this.takePicture();
            }}
          >
            <View>
            </View>
          </TouchableHighlight>
        </Camera>

        <View style={{position: 'absolute', top: 30, left: 30,}}>
          <Icon
            name='mail-forward'
            type='font-awesome'
            color='#ffffff'
            underlayColor='transparent'
            size={40}

            onPress={() => {
              this.typeToggle()
            }}
          />
        </View>

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
                      mirror: true,
                    })
    } else {
      this.setState({
                      camType: Camera.constants.Type.back,
                      mirror: false,
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
