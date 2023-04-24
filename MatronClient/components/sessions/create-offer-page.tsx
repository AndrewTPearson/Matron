import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { ChildrenList } from '../children/children-list';

export function CreateOfferPage () {
  const [offer, setOffer] = useState({
    parent: useSelector((state) => state.activeUser.userDetails.username),
    ID: useSelector((state) => state.activeUser.userDetails.ID),
    location: '',
    startTime: null,
    endTime: null,
    children: []
  });
  const allUserChildren = useSelector((state) => state.activeUser.userDetails.children);
  function handleSubmit () {
    console.log(offer);
  }

  function handleChange (property, value) {
    let newOffer = {
      parent: offer.parent,
      ID: offer.ID,
      location: offer.location,
      startTime: offer.startTime,
      endTime: offer.startTime,
      children: offer.children
    }
    newOffer[property] = value;
    setOffer(newOffer);
  }

  return (
    <View>
      <Text>Placeholder inside Create Offer Page</Text>
      <Text>Location:</Text>
      <TextInput
        value={offer.location}
        onChangeText={(value)=>{
          handleChange('location', value)}}
        />
      {/* <ChildrenList children={allUserChildren} includeCheckers={true} /> */}
      <Button
        title='Log the offer to console'
        onPress={handleSubmit} />
    </View>
  )
}