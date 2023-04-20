import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import LoginForm from './components/Login-Form';
import RegistrationForm from './components/Registration-Form';
import { createUser, logIn } from './services/users-service';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoggedOutHomePage from './components/Logged-Out-Home';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeUserId, setActiveUserId] = useState(-1);
  const [activeUsername, setActiveUsername] = useState('');
  // NB Arguably more efficient to collapse the two below, and more, under a single
  // activeUserDetails useState variable. 
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
  <View style={styles.container}>
  <Text style={styles.title} >MATRON</Text>
  <Text>Find trusted childcare, anytime, anywhere</Text>
    <Stack.Navigator initialRouteName='LoggedOutHome'>
      <Stack.Screen name='LoggedOutHome' component={LoggedOutHomePage} />
      {/* <Stack.Screen name='LogInPage' component={LoginForm} /> */}
      {/* <Stack.Screen name='LogInPage' component={LoginForm (async (username: string) => {
          console.log('attempting to log in', username);
          let success = await logIn(username);
          if (success) {
            setLoggedIn(true);
            setActiveUsername(username);
            setActiveUserId(1)
          } else {
            Alert.alert('No user found with that username');
          }
          }
        )} /> */}
      {/* <Stack.Screen name='RegistrationPage' component={RegistrationForm} /> */}
    </Stack.Navigator>
    <StatusBar style="auto" />
      {loggedIn ? <Dashboard /> : <></>}
    </View>
  </NavigationContainer>
  );

  // if (!loggedIn) {
  //   return (
  //       <View style={styles.container}>
  //       <Text style={styles.title} >MATRON</Text>
  //       <Text>Find trusted childcare, anytime, anywhere</Text>
  //         <StatusBar style="auto" />
  //         <RegistrationForm registerFunc={ async (username: string) => {
  //           setLoggedIn(true);
  //           let newUserID = await createUser(username);
  //           setActiveUserId(newUserID);
  //           setActiveUsername(username)}}/>
  //         <LoginForm loginFunc={async (username: string) => {
  //           console.log('attempting to log in', username);
  //           let success = await logIn(username);
  //           if (success) {
  //             setLoggedIn(true);
  //             setActiveUsername(username);
  //             setActiveUserId(1)
  //           } else {
  //             Alert.alert('No user found with that username');
  //           }
  //           }
  //           }/>
  //           {loggedIn ? <Dashboard /> : <></>}
  //         </View>
  //   );
  // }
  // if (loggedIn) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title} >MATRON</Text>
  //       <Text>Find trusted childcare, anytime, anywhere</Text>
  //       <StatusBar style="auto" />
  //       <Text>Logged in as {activeUsername}</Text>
  //       <Button
  //         title='Logout'
  //         onPress={() => setLoggedIn(false)}
  //         />
  //       <Dashboard />
  //     </View>
  //   );
  // }

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
