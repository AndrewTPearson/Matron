// Simple dashboard for navigating to key pages. Appears at the
// bottom of the page when logged in

import {StyleSheet, View, Text, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

function DashboardInner({navigation}) {
  // console.log(navigation, 'DB');
  return (
    <View style={styles.dashboardContainer}>
      <Button title='Home' onPress={() => navigation.navigate('LoggedInHome')}/>
      <Button title='Profile' onPress={() => navigation.navigate('ProfilePage')}/>
      <Button title='Browse' onPress={()=>console.log('pressed Browse, DB')}/>
      <Button title='New session' onPress={()=> navigation.navigate('CreateOffer')}/>
      <Button title='Conversations' onPress={()=>console.log('pressed Conversations, DB')}/>
    </View>
  );
}

export default function Dashboard () {
  return (
    // <></>
    <DashboardInner navigation={useNavigation()}/>
  )
}

const styles = StyleSheet.create({
  dashboardContainer : {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardText: {
    color: 'white',
    fontSize: 20
  }
})