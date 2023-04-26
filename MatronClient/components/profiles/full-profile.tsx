import IntermediateProfile from "./intermediate-profile";
import HeaderWithProfile from "../headers/header-with-profile";
import { ScrollView, View, Text, Button } from "react-native"
import Dashboard from "../Dashboard";
import { useSelector } from 'react-redux';
import ChildrenList from "../children/children-list";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { SessionsList } from "../sessions/sessions-list";
import { getParentConfirmed, getParentOffers } from "../../services/sessions-service";
import { styles } from "../../styleSheet";

export default function FullProfile ({user = useSelector((state:any)=>
  state.activeUser.userDetails),
  navigation=useNavigation()}) {

  const [openOffers, setOpenOffers] = useState([]);
  const [confirmedSessions, setConfirmedSessions] = useState([]);
  useEffect(() => {
    async function fetchOffers() {
      let offers = await getParentOffers(user.ID);
      let confirmed = await getParentConfirmed(user.ID);
      // offers = offers.filter((offer)=>{return !!offer.parent});
      // console.log(offers, 'ASP inside useEffect');
      setOpenOffers(offers);
      setConfirmedSessions(confirmed);
      console.log(confirmed, 'confirmed in FP')
      // console.log(offers, 'offers in FP')
    }
    fetchOffers();
  }, []);
  // console.log('In full profile, FP')
  // console.log(user.children.length, 'FP')
  // console.log(user, 'FP')
  return (
    <ScrollView style={styles.outerContainer}>
      <HeaderWithProfile/>
      <IntermediateProfile user={user}/>
      <Text>Text placeholder: list of children</Text>
      <ChildrenList children={user.children} includeCheckers={'Modify'} />
      <Button
        title='Add another child'
        color='#9e1316'

        onPress={() => {
          const pseudoChild = {
            name: '',
            age: 0,
            sex: ''
          }
          // console.log(pseudoChild, 'FP);
          navigation.navigate('AddChild', {
            childToModify: pseudoChild,
            existing: false
          })
        }
        }
      />
      <Text style={styles.impact}>Your upcoming sessions with carers:</Text>
      <SessionsList sessions={confirmedSessions} />
      <Text style={styles.impact}>Your upcoming sessions with no carer arranged:</Text>
      <SessionsList sessions={openOffers} />
      <Dashboard/>
    </ScrollView>
  )
}