import { getAllOpenOffers } from "../../services/sessions-service";
import { Text, View } from 'react-native';
import { SessionsList } from "./sessions-list";
import { BASEURL } from "../../services/services-config";
import { useEffect, useState } from "react";

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
      <Text>In open offers page. Placeholder for sessions is an empty array</Text>
      <SessionsList sessions={openOffers} />
    </View>
  )
}