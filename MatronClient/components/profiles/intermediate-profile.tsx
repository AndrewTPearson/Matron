import { View, Text, StyleSheet } from "react-native"


export default function IntermediateProfile ({user}) {
  return (
    <View>
      <Text>{`Username: ${user.username}`}</Text>
      <Text>{`ID: ${user.ID}`}</Text>
      <Text>{`Parent: ${user.isParent}`}</Text>
      <Text>{`Carer: ${user.isCarer}`}</Text>
    </View>
  )
}