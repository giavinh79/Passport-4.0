import React from 'react'
import { View } from 'react-native'
import { AppHeader } from './Appheader'
import { theme } from '../Theme'

export class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AppHeader/>
        <View
          style={{
            backgroundColor: theme.primary,
            flex: 1,
            borderLeftColor: theme.primary,
            borderLeftWidth: 20,
            borderRightColor: theme.primary,
            borderRightWidth: 20,
            borderTopColor: theme.primary,
            borderTopWidth: 20,
            borderBottomColor: theme.primary,
            borderBottomWidth: 20
          }}
        >
          {this.props.children}
        </View>
      </React.Fragment>
    )
  }
}