import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation'
import LoginScreen from './src/Containers/LoginScreen'
import SignupScreen from './src/Containers/SignupScreen'
import ForgottenPasswordScreen from './src/Containers/ForgottenPasswordScreen'
import Screen1 from './src/Containers/Screen1'
import Screen2 from './src/Containers/Screen2'
import Screen3 from './src/Containers/Screen3'
import DrawerContainer from './src/Containers/DrawerContainer'
import Feed from './src/screen/Feed'
import FeedTwo from './src/screen/FeedTwo'
import UserDetail from './src/screen/UserDetail'
import Me from './src/screen/Me'
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const nameScreen = {
  login: 'login',
  signUp: 'signUp',
  forgottenPassword: 'forgottenPassword',
  home: 'home',
  tabHome: 'tabHome',
  screen1: 'screen1',
  screen2: 'screen2',
  screen3: 'screen3',
}

export const resetAction = (name) => NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: name })],
});

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const SettingsStack = StackNavigator({
  settings: { screen: FeedTwo },
  details: { screen: Screen1 }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  [nameScreen.login]: { screen: LoginScreen },
  [nameScreen.signUp]: { screen: SignupScreen },
  [nameScreen.forgottenPassword]: {
    screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' }
  },
  [nameScreen.screen1]: {
    screen: Screen1,
    navigationOptions: {
      title: 'Screen 1 of Child Stack 2'
    }
  },
  [nameScreen.screen2]: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen 2 of Child Stack 2'
    }
  },
  [nameScreen.screen3]: {
    screen: Screen3,
    navigationOptions: {
      title: 'Screen 3 of Child Stack 2'
    }
  },
  [nameScreen.home]: {
    screen: DrawerNavigator({
      // screen2: { screen: FeedStack },
      [nameScreen.screen3]: { screen: Screen3 },
      [nameScreen.tabHome]: {
        screen: TabNavigator(
          {
            home: { screen: Feed },
            settings: { screen: FeedTwo }
          },
          {
            navigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state
                let iconName
                if (routeName === 'Home') {
                  iconName = `ios-information-circle${focused ? '' : '-outline'}`
                } else if (routeName === 'Settings') {
                  iconName = `ios-options${focused ? '' : '-outline'}`
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />
              }
            }),
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            tabBarOptions: {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray'
            },
            animationEnabled: false,
            swipeEnabled: false
          }
        )
      }
    }, {
        initialRouteName: nameScreen.tabHome,
        headerMode: 'none',
        gesturesEnabled: true,
        contentComponent: (props) => <DrawerContainer {...props} />
      })
  }
}, {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: nameScreen.login,
    transitionConfig: noTransitionConfig
  })

export default PrimaryNav
