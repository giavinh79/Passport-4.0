import React from "react";
import { Home } from "./pages/Home";
import { Camera } from "./pages/Camera";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isCameraOpen: true,
      qrCode: undefined
    }
  }

  goToCamera = () => {
    this.setState({ isCameraOpen: true })
  }

  goToLoginScreen = (qrCode) => {
    this.setState({ isCameraOpen: false, qrCode })
  }

  render() {
    return (
      <>
        {this.state.isCameraOpen === true ?
          <Camera
            goToLoginScreen={this.goToLoginScreen}
            socketId={this.state.qrCode}
          />
          :
          <Home
            goToCamera={this.goToCamera}
          />
        }
      </>
    );
  }

}
