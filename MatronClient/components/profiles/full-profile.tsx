import IntermediateProfile from "./intermediate-profile";
import HeaderWithProfile from "../headers/header-with-profile";
import { View, Text, StyleSheet, Button } from "react-native"
import Dashboard from "../Dashboard";
import { useSelector } from 'react-redux';
import ChildrenList from "../children/children-list";
import { useNavigation } from "@react-navigation/native";
import React from 'react';



export default function FullProfile ({user = useSelector((state) => state.activeUser.userDetails), navigation=useNavigation()}) {
  // console.log('In full profile, FP')
  // console.log(user.children.length, 'FP')
  // console.log(user.children[0], 'FP')
  return (
    <View>
      <HeaderWithProfile/>
      <IntermediateProfile user={user}/>
      <Text>Text placeholder: list of children</Text>
      <ChildrenList children={user.children} includeCheckers={'Modify'} />
      <Button
        title='Add another child'
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
      <Text>Text placeholder: list of upcoming sessions</Text>
      <Text>Text placeholder: list of past sessions</Text>
      <Dashboard/>
    </View>
  )
}