import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import LoginForm from './Login-Form';
import RegistrationForm from './Registration-Form';
import { createUser, logIn } from '../../services/users-service';
import { useState } from 'react';
import HeaderNoProfile from '../headers/header-no-profile';
import { styles } from '../../styleSheet';


export function LoggedOutHomePage({ navigation }) {
  return (
    <View style={styles.outerContainer}>
      <HeaderNoProfile />
      <Button
        title='Log in'
        onPress={() => navigation.navigate('LogInPage')}
        color='#9e1316'
      />
      <Text>OR</Text>
      <Button
        title='Register a new account'
        onPress={() => navigation.navigate('RegistrationPage')}
        color='#9e1316'
      />
    </View>
  )
}
export function NewTestComponent() {
  console.log('inTestComponent');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: '100%', height: 50 }}>
      <Text style={{ color: 'black' }}>Test working</Text>
    </View>
  )
}