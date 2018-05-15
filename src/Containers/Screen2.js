import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default class Screen2 extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen Two',
    drawerIcon: () => (
      <Image
        source={{uri: `https://dummyimage.com/60x60/000/fff.jpg&text=2`}}
        style={{width: 30, height: 30, borderRadius: 15}}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen2</Text>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('screen3')} style={{padding: 10, borderWidth: 1}}>
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
    flexDirection: 'column'
  },
})
