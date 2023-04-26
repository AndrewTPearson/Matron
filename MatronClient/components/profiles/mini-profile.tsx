import { View, Text, TouchableHighlight } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../../styleSheet";


export default function MiniProfile ({user}) {
  return (
    <WrappedMiniProfile user={user} navigation={useNavigation} />
  )
}


function WrappedMiniProfile ({user, navigation}) {
  return (
    <View>
      {/* <TouchableHighlight */}
        {/* // onPress={()=>navigation.navigate('ProfilePage')} */}
        {/* // underlayColor='green'> */}
        <Text>{`Username: ${user.username}`}</Text>
        <Text>{`ID: ${user.ID}`}</Text>
      {/* </TouchableHighlight> */}
    </View>
  )
}