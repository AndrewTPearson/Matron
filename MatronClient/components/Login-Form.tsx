import {StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';
import { Button, Alert } from 'react-native';

export default function LoginForm ({ loginFunc }: { loginFunc: ()=> void }) {
  const [newUsername, setNewUsername] = useState('');

  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Log in as existing user:</Text>
      <TextInput
        value={newUsername}
        onChangeText={setNewUsername}
        style={styles.inputArea}
        />
      <Button
        title='Login as existing user'
        onPress={loginFunc}
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