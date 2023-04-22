import { SessionSummary, sessionSummary } from "./session-summary"
import {View, Text} from 'react-native';

export function SessionsList ({sessions}) {
  // console.log(sessions, "SL");

  const sessionsList = sessions.map((session) => {
    return (<SessionSummary session={session} />);
  })

  return (
    <View>
      <Text>List of sessions below:</Text>
      {sessionsList}
    </View>
  )

}