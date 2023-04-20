import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import LoginForm from './Login-Form';
import RegistrationForm from './Registration-Form';
import { createUser, logIn } from '../services/users-service';
import { useState } from 'react';


export default function LoggedOutHomePage () {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [activeUserId, setActiveUserId] = useState(-1);
  // const [activeUsername, setActiveUsername] = useState('');
  return (
    <View>
      <Button title='Log in'></Button>
      <Text>OR</Text>
      <Button title='Register a new account'></Button>
    </View>
  )
}