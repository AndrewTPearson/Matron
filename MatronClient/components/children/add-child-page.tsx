import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { createNewChild } from "../../services/users-service";
import { newChild } from '../../redux-slices/activeUserSlice';
import HeaderWithProfile from "../headers/header-with-profile";
import { styles } from "../../styleSheet";

export function AddChildPage({ route }) {
  return (
    <WrappedAddChildPage route={route} navigation={useNavigation()} />
  )
}

// export function AddChildPage() {
function WrappedAddChildPage({ route, navigation }) {
  const dispatch = useDispatch();
  const { childToModify, existing } = route.params;
  const [child, setChild] = useState({ childToModify }.childToModify);
  const parentID = useSelector((state) => state.activeUser.userDetails.ID)
  function handleChange(property, value) {
    let newChild = {
      name: child.name,
      age: child.age,
      sex: child.age
    }
    newChild[property] = value;
    setChild(newChild);
  }
  async function handleNew() {
    let addedChild = await createNewChild(parentID, child);
    dispatch(newChild(addedChild))
  }
  function handleModify() {
    console.log('in function to modify child, ACP');
  }
  return (
    <View style={styles.outerContainer}>
      <HeaderWithProfile />
      <Text>{existing ? 'Modifying child:' : 'Adding new child'}</Text>
      <Text>Name:</Text>
      <TextInput
        value={child.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      <Text>Child age:</Text>
      <TextInput
        value={child.age}
        keyboardType='numeric'
        onChangeText={(value) => handleChange('age', value)}
      />
      <Text>Child sex:</Text>
      <TextInput
        value={child.sex}
        onChangeText={(value) => handleChange('sex', value)}
      />
      <Button
        color='#9e1316'
        title='Confirm child details'
        onPress={() => {
          existing ? handleModify() : handleNew();
          navigation.navigate('ProfilePage');
        }
        }
      />
    </View>
  )

}