import {StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';
import { Button, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { newActiveUser } from '../../redux-slices/activeUserSlice';
import { createUser } from '../../services/users-service';
import HeaderNoProfile from '../headers/header-no-profile';
import { styles } from '../../styleSheet';

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
    <View style={styles.outerContainer}>
    <View style={styles.formContainer}>
      <HeaderNoProfile/>
      <Text style={styles.formText}>Add your preferred username:</Text>
      <TextInput
        value={newUsername}
        onChangeText={setNewUsername}
        style={styles.formInputArea}
        />
      <Button
        title='Confirm new account'
        onPress={handleNewAccountCreation}
        color='#9e1316'
      />
      <Button
        title='Back to home'
        onPress={() => navigation.navigate('LoggedOutHome')}
        color='#9e1316'
      />
    </View>
    </View>
  );
}
