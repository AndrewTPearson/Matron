// The core of the app. Stores the following state information:
// - whether a user is logged in
// - the key details of the user, if one is logged in: specifically their username,
//    ID, whether they are a parent, and whether they are a carer

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';
import LoginForm from './components/loggedout/Login-Form';
import RegistrationForm from './components/loggedout/Registration-Form';
import { createUser, logIn } from './services/users-service';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoggedInHomePage } from './components/Logged-In-Home';
import { LoggedOutHomePage } from './components/loggedout/Logged-Out-Home';
import { configureStore } from '@reduxjs/toolkit';
import { Provider} from 'react-redux';
import activeUserReducer from './redux-slices/activeUserSlice';
import FullProfile from './components/profiles/full-profile';
import { CreateOfferPage } from './components/sessions/create-offer-page';
import { AllOpenOffersPage } from './components/sessions/all-sessions-page';
import { AddChildPage } from './components/children/add-child-page';

const Stack = createNativeStackNavigator();


let activeUserStore = configureStore({
  reducer: {
    activeUser: activeUserReducer
  }
});


export default function App() {

  return (
    <Provider store={activeUserStore}>
      <NavigationContainer >
        {}
        {/* <Text style={styles.title} >MATRON</Text>
        <Text>Find trusted childcare, anytime, anywhere</Text> */}
        {/* <Stack.Navigator initialRouteName={FullProfile}> */}
        <Stack.Navigator initialRouteName={activeUserStore.getState()[0] ? 'LoggedInHome' : 'LoggedOutHome'}>
          <Stack.Screen name='LoggedInHome' component={LoggedInHomePage} />
          <Stack.Screen name='LoggedOutHome' component={LoggedOutHomePage} />
          <Stack.Screen name='LogInPage' component={LoginForm} />
          <Stack.Screen name='RegistrationPage' component={RegistrationForm} />
          <Stack.Screen name='ProfilePage' component={FullProfile} />
          <Stack.Screen name='CreateOffer' component={CreateOfferPage} />
          <Stack.Screen name='BrowseOffers' component={AllOpenOffersPage} />
          <Stack.Screen name='AddChild' component={AddChildPage} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
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
