import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { Button, Alert } from 'react-native';
import { logIn } from '../../services/users-service';
import { useDispatch, useSelector } from 'react-redux';
import { newActiveUser } from '../../redux-slices/activeUserSlice';
import HeaderNoProfile from '../headers/header-no-profile';
import { styles } from '../../styleSheet';


export default function LoginForm({ navigation }) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  async function handleLoginAttempt(username: string) {
    let success = await logIn(username);
    if (success) {
      dispatch(newActiveUser(success));
      navigation.navigate('LoggedInHome');
    } else {
      Alert.alert('No user found with that username');
    }
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.formContainer}>
        <HeaderNoProfile />
        <Text style={styles.formText}>Log in as existing user:</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.formInputArea}
        />
        <Button
          title='Login as an existing user'
          onPress={() => handleLoginAttempt(username)}
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
