import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { styles } from "../../styleSheet";


export function ChildSummary ({child, includeChecker = ''}) {
  return (
    <WrappedChildSummary child={child} includeChecker={includeChecker} navigation={useNavigation()}/>
  )
}

function WrappedChildSummary ({child, includeChecker, navigation}) {

  return (
    <View style={styles.childSummaryOuter}>
      <View style={styles.childSummaryInner}>
        <Text>{child.name}</Text>
        <Text>{child.sex[0]}{child.age}</Text>
      </View>
      {includeChecker === 'Modify' ? <Button
        title={`Modify ${child.name}`}
        color='#9e1316'
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
      {includeChecker === 'Include' ? <Button
        title={`Include ${child.name}`}
        color='#9e1316'
        onPress={()=> {
          Alert.alert(`This app does not yet have functionality to include some
          but not all of your children in a request. We will include all your children.`)
          
        }
      }
      /> : <></>
      }
    </View>
  )


}