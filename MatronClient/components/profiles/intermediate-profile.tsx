import { View, Text } from "react-native"
import { styles } from "../../styleSheet";


export default function IntermediateProfile ({user}) {
  return (
    <View>
      <Text>{`Username: ${user.username}`}</Text>
      <Text>{`ID: ${user.ID}`}</Text>
      {/* <Text>{`Children: ${!!user.children[0]}`}</Text> */}
      {/* <Text>{`Parent: ${user.isParent}`}</Text> */}
      {/* <Text>{`Carer: ${user.isCarer}`}</Text> */}
    </View>
  )
}