import { Children } from 'react';
import {View, Text} from 'react-native';

export function SessionSummary ({session}) {
  console.log(session, 'SSum');
  console.log(typeof session.children, 'SSum');

  function summariseChildren(children: []) {
    console.log(children[0], 'inside summarise children SSum');
    if (!children[0]) {
      console.log('here');
      return 'None'};

  }
  const children = summariseChildren(session.children);
  console.log(children, 'SSum');

  return (
    <View>
      <Text>Parent: {session.parent}</Text>
      <Text>Children: {children}</Text>
    </View>
  )
}