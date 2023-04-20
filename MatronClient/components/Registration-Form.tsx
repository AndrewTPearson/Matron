import {StyleSheet, View, Text, TextInput} from 'react-native';
import { useState } from 'react';
import { Button, Alert } from 'react-native';

export default function RegistrationForm ({registerFunc } : {registerFunc: () => void}) {
  const [newUsername, setNewUsername] = useState('');

  return (
    <View style={styles.formContainer}>
      <Text style={styles.text}>Add your preferred username:</Text>
      <TextInput
        value={newUsername}
        onChangeText={setNewUsername}
        style={styles.inputArea}
        />
      <Button
        title='Confirm new account'
        onPress={registerFunc}
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