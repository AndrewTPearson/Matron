import { getAllOpenOffers } from "../../services/sessions-service";
import { Text, View } from 'react-native';
import { SessionsList } from "./sessions-list";
import { BASEURL } from "../../services/services-config";
import React, { useEffect, useState } from "react";
import HeaderWithProfile from "../headers/header-with-profile";
import Dashboard from "../Dashboard";

export function AllOpenOffersPage () {
  const [openOffers, setOpenOffers] = useState([]);

  useEffect(() => {
    async function fetchOffers() {
      let offers = await getAllOpenOffers();
      // console.log(offers, 'ASP inside useEffect');
      setOpenOffers(offers);
    }
    fetchOffers();
  }, []);

  
  // console.log('in open offers page, ASP')
  return (
    <View>
      <HeaderWithProfile/>
      <Text>In open offers page. Placeholder for sessions is an empty array</Text>
      <SessionsList sessions={openOffers} />
      <Dashboard/>
    </View>
  )
}