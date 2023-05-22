import { Alert, Button, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChildrenList from '../children/children-list';
import { Calendar } from '../timing/Calendar';
import { TimeSelector } from '../timing/TimeSelector';
import { MockCalendar } from '../timing/MockCalendar';
import { useNavigation } from '@react-navigation/native';
import HeaderWithProfile from '../headers/header-with-profile';
import { styles } from "../../styleSheet";


export function CreateOfferPage() {

  return (
    <WrappedCreateOfferPage navigation={useNavigation()} />
  )

}

function WrappedCreateOfferPage({ navigation }) {
  // let today = new Date();
  // const currentDate = {
  //   day: today.getDate(),
  //   month: today.getMonth(),
  //   year: today.getFullYear(),
  // }
  const allUserChildren = useSelector((state: any) => state.activeUser.userDetails.children);
  const [request, setRequest] = useState({
    children: allUserChildren,
    location: ''
  })
  // const [offer, setOffer] = useState(useSelector((state: any)=>state.newOffer));

  function handleSubmit() {
    // setOffer(useSelector((state: any)=>state.newOffer));
    navigation.navigate('ConfirmRequest', request);
  }
  function handleChangeLocation(value) {
    const newRequest = { ...request };
    newRequest.location = value;
    setRequest(newRequest);
  }

  return (
    <View style={styles.outerContainer}>
      <HeaderWithProfile />
      <Text>Create Offer Page</Text>
      <Text>Location:</Text>
      <TextInput
        value={request.location}
        onChangeText={(value) => {
          handleChangeLocation(value)
        }}
      />
      <ChildrenList children={allUserChildren} includeCheckers={'Remove'} />
      <Button
        title='Choose timing'
        onPress={handleSubmit}
        color='#9e1316'

      />
    </View>
  )
}