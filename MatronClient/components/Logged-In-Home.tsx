// Landing page when logged in. Displays forthcoming sessions

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { useSelector } from 'react-redux';
import activeUserSlice from '../redux-slices/activeUserSlice';
import HeaderWithProfile from './headers/header-with-profile';
import { SessionsList } from './sessions/sessions-list';
import { styles } from '../styleSheet';

export function LoggedInHomePage({ }) {
  const activeUserDetails = useSelector((state) => state.activeUser.userDetails);
  const [openOffers, setOpenOffers] = useState([]);
  useEffect(() => {
    async function fetchOffers() {
      let offers = await getParentOffers(user.ID);
      setOpenOffers(offers);
    }
    fetchOffers();
  }, []);

  return (
    <View style={styles.container}>
      <HeaderWithProfile />
      <Text>Your upcoming unfulfilled requests:</Text>
      <SessionsList sessions={[openOffers[0]]} />
      {/* <Text>Text placeholder: upcoming sessions as carer</Text> */}
      <Dashboard />
    </View>
  )
}

