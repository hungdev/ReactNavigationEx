import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import CustomNavbar from '../CustomNavbar'

class Feed extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerTitle: <CustomNavbar onPressLeft={()=> navigation.navigate('DrawerOpen')}/>
    }
  }

  onLearnMore = (user) => {
    // this.props.navigation.navigate('Details', { ...user });
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('screen2')} style={{padding: 10, borderWidth: 1}}>
          <Text>Stack 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10, borderWidth: 1}}>
          <Text>Stack 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Feed;
