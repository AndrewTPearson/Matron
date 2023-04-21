import {StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';
import { Button, Alert } from 'react-native';
import { logIn } from '../services/users-service';
import { useDispatch, useSelector } from 'react-redux';
import { newActiveUser } from '../redux-slices/activeUserSlice';
import HeaderNoProfile from './headers/header-no-profile';


export default function LoginForm ({navigation}) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  async function handleLoginAttempt (username: string) {
    // console.log('attempting to log in, LF', username);
    let success = await logIn(username);
    // console.log(success, 'LF') ;
    if (success) {
      dispatch(newActiveUser(success));
      navigation.navigate('LoggedInHome');
    } else {
      Alert.alert('No user found with that username');
    }
  }

  return (
    <View style={styles.formContainer}>
      <HeaderNoProfile/>
      <Text style={styles.text}>Log in as existing user:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.inputArea}
        />
      <Button
        title='Login as an existing user'
        onPress={() => handleLoginAttempt(username)}
      />
      <Button
        title='Back to home'
        onPress={() => navigation.navigate('LoggedOutHome')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'blue',
    width: '90%',
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    color: 'white'
  },
  inputArea: {
    backgroundColor: 'white',
    width: '80%'
  }
})