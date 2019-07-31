import React from "react";
import { View, Text, Platform, Animated } from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import * as FileSystem from 'expo-file-system';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../Theme';
import { Col, Row } from "react-native-easy-grid";
import styles from "./styles";
import Toolbar from "./toolbar.component";
import { Grid } from "native-base";

const DESIRED_RATIO = "2:1";

export class CameraComponent extends React.Component {
  camera = null;

  state = {
    captures: [],
    capturing: null,
    hasCameraPermission: null,
    cameraType: Camera.Constants.Type.back,
    flashMode: Camera.Constants.FlashMode.off,
    fadeAnim: new Animated.Value(1),
  };

  sendPictureToServer = async (image, socketId) => {
    let obj = {
      image,
      socketId
    }

    let body = JSON.stringify(obj)
    console.log(body.length)

    let url = "https://passport-redesign-248321.appspot.com/scan"
    let response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body
    })

    console.log(response);
  }

  setFlashMode = flashMode => this.setState({ flashMode })
  setCameraType = cameraType => this.setState({ cameraType })
  handleCaptureIn = () => this.setState({ capturing: true })

  handleCaptureOut = () => {
    if (this.state.capturing) this.camera.stopRecording();
  };

  handleShortCapture = async () => {
    const imagePath = await this.camera.takePictureAsync();
    console.log(imagePath.uri);
    FileSystem.readAsStringAsync(imagePath.uri, {
      encoding: FileSystem.EncodingType.Base64
    }).then((image => {
      console.log(image, this.props.socketId.data)
      this.sendPictureToServer(image, this.props.socketId.data)
      this.setState({
        capturing: false
        // captures: [photoData, ...this.state.captures]
      })
    }))


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

    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0.3,
        delay: 3000,                  // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start(); 
  }

  onBarCodeScanned = (obj) => {
    if (this.props.socketId == undefined) {
      this.props.goToLoginScreen(obj)
    }
  }

  handleBackArrow = () => {
    this.props.restart();
  }

  render() {
    const {
      hasCameraPermission,
      flashMode,
      cameraType,
      capturing,
      captures,
      fadeAnim
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
            onBarCodeScanned={this.onBarCodeScanned}
          />
        </View>
        <Grid>
          <Row>
            <Col> 
              {this.props.socketId !== undefined ?
              <View>
                <View style={{paddingLeft: 20, paddingTop: 50}}>
                  <FontAwesome
                    onPress={this.handleBackArrow}
                    name="arrow-left"
                    size={25}
                    color={theme.secondary}
                  />
                </View>
                <Animated.View style={{opacity: fadeAnim}}>
                  <Text style={{color:theme.secondary, textAlign: "center", padding:10, fontSize: 20, fontWeight:"bold"}}>Take a picture of the check you'd like to scan.</Text>
                </Animated.View>
              </View>
              : 
              <Animated.View style={{opacity: fadeAnim}}>
                <Text style={{color:theme.secondary, textAlign: "center", marginTop: 80, fontSize: 20, fontWeight:"bold"}}>Scan the deposit QR code.</Text>
              </Animated.View>
              }
            </Col>
          </Row>
        </Grid>
        <Toolbar
          showToolbar={this.props.socketId !== undefined}
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
