import { View, Text, StyleSheet } from "react-native"


export default function MiniProfile ({user}) {
  return (
    <View>
      <Text>{`Username: ${user.username}`}</Text>
      <Text>{`ID: ${user.ID}`}</Text>
    </View>
  )
}