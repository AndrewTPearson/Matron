import {View, Text} from 'react-native';
import React, { useState, useEffect } from 'react';

export function SessionSummary ({session}) {
  console.log(session, 'SSum');
  console.log(typeof session.children, 'SSum');
  const [children, setChildren] = useState([]);

  useEffect(() => {
    async function getChildren() {
      // let childs = await session.children.json();
      // console.log(childs);
      // console.log(typeof childs);
      // setChildren(childs);
    }
    getChildren()}, []);
  

  // function summariseChildren(children: []) {
  //   console.log(children, 'inside summarise children SSum');
  //   if (!children[0]) {
  //     console.log('here');
  //     return 'None'};
  // }
  // const children2 = summariseChildren(children);
  // console.log(children2, 'SSum');

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
      <Text>Start time: {session.endTime}</Text>
    </View>
  )
}