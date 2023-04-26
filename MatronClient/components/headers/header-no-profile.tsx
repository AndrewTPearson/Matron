import { View, Text} from "react-native"
import { styles } from '../../styleSheet';



export default function HeaderNoProfile () {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.childSummaryInner}>
      <Text style={styles.title} >MATRON</Text>
      {/* <Text  >MATRON</Text> */}
      <Text style={styles.slogan}>Find trusted childcare, anytime, anywhere</Text>
      </View>
    </View>
  )
}
