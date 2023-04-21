import { View, Text, StyleSheet } from "react-native";
import MiniProfile from "../profiles/mini-profile";
import { useSelector } from 'react-redux';


export default function HeaderWithProfile () {
  const activeUserDetails = useSelector((state) => state.activeUser.userDetails);
  // console.log(activeUserDetails, 'HWP');
  return (
    <View style={styles.outer}>
      <View>
        <Text style={styles.title} >MATRON</Text>
        <Text>Find trusted childcare, anytime, anywhere</Text>
      </View>
      <View>
        <MiniProfile user={activeUserDetails}></MiniProfile>
      </View>
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
  outer: {
    flexDirection: 'row',
  },
  inner: {
    flexDirection: 'column',
  }
});