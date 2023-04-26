import { View, Text, StyleSheet, Alert, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { sendOffer } from '../../redux-slices/newOfferSlice';
import { styles } from "../../styleSheet";

export function MockCalendar () {
  const dispatch = useDispatch();
  const user = useSelector((state)=>state.activeUser.userDetails);

  //params: gives location
  const payload = {
    parent: user.username,
    ID: user.ID,
    location: 'upstairs',
    startTime: 'Wed Apr 26 2023 18:30:00 GMT+0100 (British Summer Time)',
    endTime: 'Wed Apr 26 2023 22:30:00 GMT+0100 (British Summer Time)',
    children: user.children
  }
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  
  function timeParametersToString (days = 0, months = 0, years = 0) {
    let arr = Date().split(' ');
    arr[0] = days[]

  }

  return (
    <View>
      <Text>When do you want your children looked after?</Text>
      <View style={styles.container}>
        <Button
          title='Today'
          onPress={()=>{
            payload.startTime = timeParametersToString()
            dispatch(sendOffer(payload));
          }}
          />
        <Button
          title='Tomorrow'
          onPress={()=>Alert.alert('Pressed')}
          />
        <Button
          title='Later'
          onPress={()=>Alert.alert('Please make your request closer to the time')}
          />
        
      </View>
    </View>
  )
}

