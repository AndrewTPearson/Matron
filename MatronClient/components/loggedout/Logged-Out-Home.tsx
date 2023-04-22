import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import LoginForm from './Login-Form';
import RegistrationForm from './Registration-Form';
import { createUser, logIn } from '../../services/users-service';
import { useState } from 'react';
import HeaderNoProfile from '../headers/header-no-profile';


export function LoggedOutHomePage ({navigation}) {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [activeUserId, setActiveUserId] = useState(-1);
  // const [activeUsername, setActiveUsername] = useState('');
  return (
    <View>
      <HeaderNoProfile/>
      <Button
        title='Log in'
        onPress={() => navigation.navigate('LogInPage')}
        />
      <Text>OR</Text>
      <Button
        title='Register a new account'
        onPress={() => navigation.navigate('RegistrationPage')}
        />
    </View>
  )
}
export function NewTestComponent () {
  console.log('inTestComponent');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', width: '100%', height: 50 }}>
      <Text style={{color: 'black'}}>Test working</Text>
    </View>
  )
}