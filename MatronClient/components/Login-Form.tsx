import {StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';
import { Button, Alert } from 'react-native';

export default function LoginForm ({ loginFunc }: { loginFunc: (arg: string)=> void }) {
  const [username, setUsername] = useState('');

  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Log in as existing user:</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.inputArea}
        />
      <Button
        title='Login as an existing user'
        onPress={() => loginFunc(username)}
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