import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import LoginForm from './components/Login-Form';
import RegistrationForm from './components/Registration-Form';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeUserId, setActiveUserId] = useState(-1);

  if (!loggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >MATRON</Text>
        <Text>Find trusted childcare, anytime, anywhere</Text>
        <StatusBar style="auto" />
        <RegistrationForm registerFunc={() => setLoggedIn(true)}/>
        <LoginForm loginFunc={() => {setLoggedIn(true);
          setActiveUserId(1)}}/>
        <Dashboard />
      </View>
    );
  }
  if (loggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >MATRON</Text>
        <Text>Find trusted childcare, anytime, anywhere</Text>
        <StatusBar style="auto" />
        <Text>Logged in as user #{activeUserId}</Text>
        <Dashboard />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 50
  },
  slogan: {
    color: 'black',
    fontSize: 12
  },
});
