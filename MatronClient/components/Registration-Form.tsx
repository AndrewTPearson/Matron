import {StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';
import { Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { newActiveUser } from '../redux-slices/activeUserSlice';
import { createUser } from '../services/users-service';
import HeaderNoProfile from './headers/header-no-profile';

export default function RegistrationForm ({navigation}) {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState('');

  async function handleNewAccountCreation () {
    // console.log('handleNewAccountCreation called, RF');
    let user = await createUser(newUsername);
    dispatch(newActiveUser(user));
    // console.log(user, 'RF');
    navigation.navigate('LoggedInHome');
  }

  return (
    <View style={styles.formContainer}>
      <HeaderNoProfile/>
      <Text style={styles.text}>Add your preferred username:</Text>
      <TextInput
        value={newUsername}
        onChangeText={setNewUsername}
        style={styles.inputArea}
        />
      <Button
        title='Confirm new account'
        onPress={handleNewAccountCreation}
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