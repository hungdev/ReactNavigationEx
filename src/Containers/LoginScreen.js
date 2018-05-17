import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { nameScreen, resetAction } from '../../App'

export default class LoginScreen extends React.Component {
  onResetNavigate() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'home' })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I am Login Screen</Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate(nameScreen.signUp)} >
          Go to Signup
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate(nameScreen.forgottenPassword)} >
          Go to Forgot Password
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.dispatch(resetAction(nameScreen.home))} >
          Pretend we logged in
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  linky: {
    color: 'blue',
    paddingTop: 10
  }
})
