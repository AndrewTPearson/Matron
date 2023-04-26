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
import { Provider} from 'react-redux';
import FullProfile from './components/profiles/full-profile';
import { CreateOfferPage } from './components/sessions/create-offer-page';
import { AllOpenOffersPage } from './components/sessions/all-sessions-page';
import { AddChildPage } from './components/children/add-child-page';
import { store } from './redux-slices/combine-reducers';
import { MockCalendar } from './components/timing/MockCalendar';
import { Calendar } from './components/timing/Calendar';
import { ViewSessionPage } from './components/sessions/view-session-page';
import {styles} from './styleSheet';

const Stack = createNativeStackNavigator();






export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName={store.getState().activeUser.loggedIn ? 'LoggedInHome' : 'LoggedOutHome'}>
          <Stack.Screen name='LoggedInHome' component={LoggedInHomePage} />
          <Stack.Screen name='LoggedOutHome' component={LoggedOutHomePage} />
          <Stack.Screen name='LogInPage' component={LoginForm} />
          <Stack.Screen name='RegistrationPage' component={RegistrationForm} />
          <Stack.Screen name='ProfilePage' component={FullProfile} />
          <Stack.Screen name='CreateOffer' component={CreateOfferPage} />
          <Stack.Screen name='BrowseOffers' component={AllOpenOffersPage} />
          <Stack.Screen name='AddChild' component={AddChildPage} />
          <Stack.Screen name='ConfirmRequest' component={Calendar} />
          <Stack.Screen name='RequestDetails' component={ViewSessionPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
