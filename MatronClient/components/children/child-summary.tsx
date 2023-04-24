import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function ChildSummary ({child, includeChecker = ''}) {
  return (
    <WrappedChildSummary child={child} includeChecker={includeChecker} navigation={useNavigation()}/>
  )
}

function WrappedChildSummary ({child, includeChecker, navigation}) {

  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <Text>{child.name}</Text>
        <Text>{child.sex[0]}{child.age}</Text>
      </View>
      {includeChecker ? <Button
        title={`${includeChecker} ${child.name}`}
        onPress={()=> {
          // console.log(child, 'ChiSumm');
          navigation.navigate('AddChild', {
            childToModify: child,
            existing: true
          })
        }
      }
      /> : <></>
      }
    </View>
  )


}

const styles = StyleSheet.create({
  outer: {
    flexDirection: 'row'
  },
  inner: {
    flexDirection: 'column'
  }
})