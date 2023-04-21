import IntermediateProfile from "./intermediate-profile";
import HeaderWithProfile from "../headers/header-with-profile";
import { View, Text, StyleSheet } from "react-native"
import Dashboard from "../Dashboard";
import { useSelector } from 'react-redux';



export default function FullProfile ({user = useSelector((state) => state.activeUser.userDetails)}) {
  console.log('IN full profile, FP')
  return (
    <View>
      <HeaderWithProfile/>
      <IntermediateProfile user={user}/>
      <Text>Text placeholder: list of children</Text>
      <Text>Text placeholder: list of upcoming sessions</Text>
      <Text>Text placeholder: list of past sessions</Text>
      <Dashboard/>
    </View>
  )
}