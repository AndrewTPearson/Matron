// Landing page when logged in. Displays forthcoming sessions

import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { useState } from 'react';
import Dashboard from './Dashboard';
import { useSelector } from 'react-redux';
import activeUserSlice from '../redux-slices/activeUserSlice';
import HeaderWithProfile from './headers/header-with-profile';


export function LoggedInHomePage ({}) {
  const activeUserDetails = useSelector((state) => state.activeUser.userDetails);
  // console.log('aud:', activeUserDetails, 'LIH');
  return (
    <View style={styles.container}>
      <HeaderWithProfile/>
      <Text>Logged in Home Page</Text>
      <Text>Text placeholder: upcoming sessions as parent</Text>
      <Text>Text placeholder: upcoming sessions as carer</Text>
      <Dashboard/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 50
  },
  slogan: {
    color: 'black',
    fontSize: 12
  },
});