import React from 'react'
import { Header } from 'react-native-elements';

import { theme } from '../Theme'

export class AppHeader extends React.Component {
  render() {
    return (
      <Header
        containerStyle={{
          backgroundColor: theme.secondary
        }}
        centerComponent={{
          text: 'Passport',
          style: {
            color: theme.primary,
            fontSize: 24
          }
        }}
      />
    )
  }
}