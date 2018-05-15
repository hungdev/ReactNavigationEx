import React from 'react'
import { Text, Animated, Easing } from 'react-native'
import { StackNavigator, DrawerNavigator, TabNavigator, TabBarBottom } from 'react-navigation'
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

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const FirstChildStack = StackNavigator({
  screen1: {
    screen: Screen1,
    navigationOptions: {
      title: 'Screen 1 of Child Stack 1'
    }
  },
  screen2: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen 2 of Child Stack 1'
    }
  },
  screen3: {
    screen: Screen3,
    navigationOptions: {
      title: 'Screen 3 of Child Stack 1'
    }
  }
}, {
  navigationOptions: props => {
    // title: 'Transfer'
  },
  headerMode: 'none'
})
const SecondChildStack = StackNavigator({
  screen1: {
    screen: Screen1,
    navigationOptions: {
      title: 'Screen 1 of Child Stack 2'
    }
  },
  screen2: {
    screen: Screen2,
    navigationOptions: {
      title: 'Screen 2 of Child Stack 2'
    }
  },
  screen3: {
    screen: Screen3,
    navigationOptions: {
      title: 'Screen 3 of Child Stack 2'
    }
  }
})

const HomeStack = StackNavigator({
  tabHomeStack: {
    screen: Feed,
    navigationOptions: {
      title: 'HomeScreen'
    }
  },
  firstChildStack: {screen: FirstChildStack},
  SecondChildStack: {screen: SecondChildStack},
  details: { screen: UserDetail, navigationOptions: {tabBarVisible: false} }
})

const SettingsStack = StackNavigator({
  settings: { screen: FeedTwo },
  details: { screen: Screen1 }
})

const TabHome = TabNavigator(
  {
    home: { screen: HomeStack },
    settings: { screen: SettingsStack }
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

const DrawerStack = DrawerNavigator({
  home: { screen: TabHome },
  // screen2: { screen: FeedStack },
  screen3: { screen: Screen3 }
}, {
  headerMode: 'none',
  gesturesEnabled: false,
  contentComponent: (props) => <DrawerContainer {...props} />
})

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } },
  home: { screen: DrawerStack }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerStyle: { backgroundColor: 'red' },
    title: 'You are not logged in'
  }
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerStack }
}, {
    // Default config for all screens
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
