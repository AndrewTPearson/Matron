import { View, Text, StyleSheet } from "react-native"

export default function HeaderNoProfile () {
  return (
    <View>
      <Text style={styles.title} >MATRON</Text>
      <Text>Find trusted childcare, anytime, anywhere</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: 'cyan',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 50
  },
  slogan: {
    color: 'black',
    fontSize: 12
  },
});