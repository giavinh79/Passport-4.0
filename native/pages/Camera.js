import React from 'react'
import { CameraComponent } from '../components/camera/camera.page';

export class Camera extends React.Component {
  render() {
    return (
      <CameraComponent
        goToLoginScreen={this.props.goToLoginScreen}
        socketId={this.props.socketId}
        restart={this.props.restart}
      />
    )
  }
}