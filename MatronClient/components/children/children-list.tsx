import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import { ChildSummary } from './child-summary';
// import { Child } from '../../types/child';
import { styles } from '../../styleSheet';

export default function ChildrenList ({children, includeCheckers = false}) {
// export default function ChildrenList () {
  // console.log('CL');
  // console.log(children, includeCheckers, 'CL');
  const childrenList = children.map((child) => {
    return (
      <ChildSummary child={child} includeChecker={includeCheckers} />
    )
  })
  
  return (
    <View>
      <Text>List of children:</Text>
      {childrenList}
    </View>
  )
}

