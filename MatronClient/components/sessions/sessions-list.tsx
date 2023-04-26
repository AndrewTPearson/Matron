import { SessionSummary } from "./session-summary"
import {View, Text} from 'react-native';
import { styles } from "../../styleSheet";


export function SessionsList ({sessions, includeRespondButton = false}) {
  // console.log(sessions, "SL");
  if (!sessions[0]) {
    return (
      <View>
        <Text>No upcoming sessions!</Text>
      </View>
    )
  }
  const sortedSessions = sessions.sort((a, b) => {
    return a.startTime <= b.startTime ? 1 : -1;
  })
  const sessionsList = sortedSessions.map((session) => {
    // console.log(session.carer, 'session in Session list');
    // return (<SessionSummary session={session} />);
    return (<SessionSummary session={session} includeRespondButton={includeRespondButton && !session.carer} />);
  })

  return (
    <View>
      {/* <Text>List of sessions below:</Text> */}
      {sessionsList}
    </View>
  )

}