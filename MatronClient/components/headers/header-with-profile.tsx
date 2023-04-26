import { View, Text} from "react-native";
import MiniProfile from "../profiles/mini-profile";
import { useSelector } from 'react-redux';
import { styles } from '../../styleSheet';


export default function HeaderWithProfile () {
  const activeUserDetails = useSelector((state) => state.activeUser.userDetails);
  // console.log(activeUserDetails, 'HWP');
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.title} >MATRON</Text>
        <Text style={styles.slogan}>Find trusted childcare, anytime, anywhere</Text>
      </View>
      <View style={styles.headerProfileText}>
        <MiniProfile user={activeUserDetails}> </MiniProfile>
      </View>
    </View>
  )
}
