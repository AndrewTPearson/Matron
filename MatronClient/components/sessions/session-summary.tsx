import {View, Text, Button} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { volunteerAsCarer } from '../../services/sessions-service';
import { useSelector } from 'react-redux';
import { styles } from "../../styleSheet";


export function SessionSummary ({session, includeRespondButton = false, navigation=useNavigation()}) {
  // console.log(session.children, 'SSum');
  // console.log(Array.isArray(session.children[0]), 'SSum');
  // console.log(session.children, 'SSum');
  // console.log(session.carer, 'session in Sesh summary');
  const user = useSelector((state)=>state.activeUser.userDetails);
  const childList = session.children;
  let children = childList.length;
  if (Array.isArray(childList)) {
    childList.map((child) => {
      children = children + ` (${child.sex[0]}${child.age})`
    })
  }
  // childList.reduce((accum, child) => {
  //   accum.concat(child.sex[0]);
  //   accum.concat(child.age);
  //   return accum;
  // }, '')

  // let children = session.children[0].map(child => {
  //   console.log(child);
  //   return child.name;
  // })
    // return `${child.sex[0]}${child.age}`}
  // ).join(' ');
  

  // function summariseChildren(children: []) {
  //   console.log(children, 'inside summarise children SSum');
  //   if (!children[0]) {
  //     console.log('here');
  //     return 'None'};
  // }
  // const children2 = summariseChildren(children);
  // console.log(children2, 'SSum');

  function RespondButton () {
    return (
      <View>
        <Button 
        color='#9e1316'
        title='Offer to help'
          onPress={() => {
            volunteerAsCarer(user, session.sessionID, session.parent);
            console.log(session);
            // navigation.navigate()
          }}
        />
      </View>
    )
  }

  return (
    <View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: '80%',
          alignSelf: 'center'
        }}
      />
      <Text>Parent: {session.parent}</Text>
      <Text>Children: {children}</Text>
      <Text>Start time: {session.startTime}</Text>
      <Text>End time: {session.endTime}</Text>
      <Text>{session.carer? `Carer: ${session.carer.username}` : 'No carer yet!'}</Text>
      {includeRespondButton ? <RespondButton/> : <></>}
    </View>
  )
}