import { sessionSummary } from "./session-summary"
import {View, Text} from 'react-native';

export function SessionsList ({sessions}) {

  const sessionsList = sessions.map((session) => {
    return sessionSummary(session);
  })

  return (
    <View>
      <Text>List of sessions below:</Text>
      {sessionsList}
    </View>
  )

}