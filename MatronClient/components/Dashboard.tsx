// Simple dashboard for navigating to key pages. Appears at the
// bottom of the page when logged in

import {StyleSheet, View, Text, Button} from 'react-native';
import {withNavigation} from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {styles} from '../styleSheet';

function DashboardInner({navigation}) {
  // console.log(navigation, 'DB');
  return (
    <View style={styles.dashboardContainer}>
      <Button title='Home' color='#9e1316' onPress={() => navigation.navigate('LoggedInHome')}/>
      <Button title='Profile' color='#9e1316' onPress={() => navigation.navigate('ProfilePage')}/>
      <Button title='Browse' color='#9e1316' onPress={()=>navigation.navigate('BrowseOffers')}/>
      <Button title='New session' color='#9e1316' onPress={()=> navigation.navigate('CreateOffer')}/>
      {/* <Button title='Conversations' onPress={()=>console.log('pressed Conversations, DB')}/> */}
    </View>
  );
}

export default function Dashboard () {
  return (
    // <></>
    <DashboardInner navigation={useNavigation()}/>
  )
}
