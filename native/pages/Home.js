import React from 'react'
import { Text, Icon } from 'react-native-elements'
import { View } from 'react-native'
import { theme } from '../Theme'
import { Page } from '../components/PageContainer'

export class Home extends React.Component {
  render() {
    return (
      <Page>
        <Text h4>How to use this app</Text>
        <Text
          style={{
            color: theme.text
          }}
        >
          Instructions
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
        >
          <Icon
            name='camera-alt'
            size={30}
            reverse
            raised
            reverseColor={theme.primary}
            color={theme.secondary}
          />
        </View>
      </Page>
    )
  }
}