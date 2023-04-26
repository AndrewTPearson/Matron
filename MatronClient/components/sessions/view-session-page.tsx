import HeaderWithProfile from "../headers/header-with-profile";
import { styles } from "../../styleSheet";


export function ViewSessionPage (session) {

  const parentOptions = (
    <View>
      <Text>Placeholder: accept offer from carer</Text>
    </View>
  )

  return (
    <View style={styles.outerContainer}>
      <HeaderWithProfile/>
      <Text>Session</Text>
    </View>
  )
}