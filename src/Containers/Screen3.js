import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class Screen3 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen Three',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=3`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  onNavigate () {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'tabHomeStack' })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen3</Text>
        <TouchableOpacity onPress={()=> this.onNavigate()} style={{padding: 10, borderWidth: 1}}>
          <Text>Navigate</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
