import { getAllOpenOffers } from "../../services/sessions-service";
import { Text, ScrollView } from 'react-native';
import { SessionsList } from "./sessions-list";
import { BASEURL } from "../../services/services-config";
import React, { useEffect, useState } from "react";
import HeaderWithProfile from "../headers/header-with-profile";
import Dashboard from "../Dashboard";
import { styles } from "../../styleSheet";


export function AllOpenOffersPage() {
  const [openOffers, setOpenOffers] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      let offers = await getAllOpenOffers();
      setOpenOffers(offers);
    }
    fetchOffers();
  }, []);


  return (
    <ScrollView style={styles.outerContainer}>
      <HeaderWithProfile />
      <SessionsList sessions={openOffers} includeRespondButton={true} />
      <Dashboard />
    </ScrollView>
  )
}