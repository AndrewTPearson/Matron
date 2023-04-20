import {StyleSheet, View, Text, Button} from 'react-native';


export default function Dashboard () {
  return (
    <View style={styles.dashboardContainer}>
      {/* <Text style={styles.dashboardText}>This is a dashboard</Text> */}
      <Button title='Messages'/>
      <Button title='Your sessions'/>
      <Button title='Browse'/>
      <Button title='Create'/>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboardContainer : {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dashboardText: {
    color: 'white',
    fontSize: 20
  },
  // dashboardButton: {
  //   margin: 5
  // }
})