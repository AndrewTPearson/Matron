import { getAllOpenOffers } from "../../services/sessions-service";
import { Text, ScrollView } from 'react-native';
import { SessionsList } from "./sessions-list";
import { BASEURL } from "../../services/services-config";
import React, { useEffect, useState } from "react";
import HeaderWithProfile from "../headers/header-with-profile";
import Dashboard from "../Dashboard";
import { styles } from "../../styleSheet";


export function AllOpenOffersPage () {
  const [openOffers, setOpenOffers] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      let offers = await getAllOpenOffers();
      // offers = offers.filter((offer)=>{return !!offer.parent});
      // console.log(offers, 'ASP inside useEffect');
      setOpenOffers(offers);
    }
    fetchOffers();
  }, []);

  
  // console.log('in open offers page, ASP')
  return (
    <ScrollView style={styles.outerContainer}>
      <HeaderWithProfile/>
      <SessionsList sessions={openOffers} includeRespondButton={true} />
      {/* <SessionsList sessions={openOffers} /> */}
      <Dashboard/>
    </ScrollView>
  )
}