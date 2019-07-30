import React from "react";
import { View, Text, Platform } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

import styles from "./styles";
import Toolbar from "./toolbar.component";

const DESIRED_RATIO = "2:1";

export class CameraComponent extends React.Component {
  camera = null;

  state = {
    captures: [],
    capturing: null,
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off
  };

  setFlashMode = flashMode => this.setState({ flashMode });
  setCameraType = cameraType => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  readImageAsBase64 = async imagePath => {
    return imagePath;
  };

  handleCaptureOut = () => {
    if (this.state.capturing) this.camera.stopRecording();
  };

  handleShortCapture = async () => {
    const photoData = await this.camera.takePictureAsync();
    console.log(photoData);
    this.setState({
      capturing: false,
      captures: [photoData, ...this.state.captures]
    });
  };
  
  prepareRatio = async () => {
    if (Platform.OS === 'android' && this.camera) {
         const ratios = await this.camera.getSupportedRatiosAsync();

         // See if the current device has your desired ratio, otherwise get the maximum supported one
         // Usually the last element of "ratios" is the maximum supported ratio
         const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];
         
         this.setState({ ratio });
    }
}

  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission =
      camera.status === "granted" && audio.status === "granted";

    this.setState({ hasCameraPermission });
  }

  render() {
    const {
      hasCameraPermission,
      flashMode,
      cameraType,
      capturing,
      captures
    } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Access to camera has been denied.</Text>;
    }

    return (
      <React.Fragment>
        <View>
          <Camera
            type={cameraType}
            flashMode={flashMode}
            onCameraReady={this.prepareRatio}
            ratio={this.state.ratio}
            style={styles.preview}
            ref={camera => (this.camera = camera)}
          />
        </View>
        <Toolbar
          capturing={capturing}
          flashMode={flashMode}
          cameraType={cameraType}
          setFlashMode={this.setFlashMode}
          setCameraType={this.setCameraType}
          onCaptureIn={this.handleCaptureIn}
          onCaptureOut={this.handleCaptureOut}
          onShortCapture={this.handleShortCapture}
          ratio={this.state.ratio}
        />
      </React.Fragment>
    );
  }
}
