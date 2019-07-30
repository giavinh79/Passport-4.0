import React from 'react'
import { Page } from '../components/PageContainer'
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';
import { theme } from '../Theme';
import { Button } from 'react-native-elements';


export class Home extends React.Component {
  render() {
    return (
      <Page>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <Kohana
            style={{ backgroundColor: theme.secondary }}
            label={'Username'}
            iconClass={FontAwesome}
            iconName={'user'}
            iconColor={theme.primary}
            labelStyle={{ color: theme.primary }}
            inputStyle={{ color: theme.primary }}
            useNativeDriver
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <Kohana
            style={{ backgroundColor: theme.secondary }}
            label={'Password'}
            iconClass={FontAwesome}
            iconName={'key'}
            iconColor={theme.primary}
            labelStyle={{ color: theme.primary }}
            inputStyle={{ color: theme.primary }}
            useNativeDriver
          />
        </View>
        <View>
          <Button
            buttonStyle={{
              backgroundColor: theme.secondary
            }}
            titleStyle={{
              color: theme.primary
            }}
            iconContainerStyle={{
              marginLeft: 10
            }}
            title="Login"
            iconRight
            icon={
              <FontAwesome
                name="arrow-right"
                size={15}
                color={theme.primary}
              />
            }
            onPress={this.props.goToCamera}
          />
        </View>
        <View
          style={{
            flex: 5,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        ></View>
      </Page>
    )
  }
}