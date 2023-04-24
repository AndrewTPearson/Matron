import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { createNewChild } from "../../services/users-service";
import { newChild } from '../../redux-slices/activeUserSlice';


export function AddChildPage({route}) {
  return (
    <WrappedAddChildPage route={route} navigation={useNavigation()} />
  )
}

// export function AddChildPage() {
function WrappedAddChildPage({route, navigation}) {
  const dispatch = useDispatch();
// export function AddChildPage({route, childToModify}) {
  // console.log('route params ACP', route.params);
  const {childToModify, existing} = route.params;
  // console.log('in AddChildPage', childToModify, existing);
  const [child, setChild] = useState({childToModify}.childToModify);
  const parentID = useSelector((state)=> state.activeUser.userDetails.ID)
  // console.log(parentID);
  function handleChange (property, value) {
  // function handleChange (value) {
    // console.log('here in ACP handle change func 1', value);
    let newChild = {
      name: child.name,
      age: child.age,
      sex: child.age
    }
    newChild[property] = value;
    setChild(newChild);
    // console.log('here in ACP handle change func 2', value);
  }
  // console.log(child, 'ACP');
  async function handleNew () {
    let addedChild = await createNewChild(parentID, child);
    console.log('added Child in ACP', addedChild);
    dispatch(newChild(addedChild))
  }
  function handleModify () {
    console.log('in function to modify child, ACP');
  }
  return (
    <View>
      <Text>{existing ? 'Modifying child:' : 'Adding new child'}</Text>
      <Text>Name:</Text>
      <TextInput
        value={child.name}
        onChangeText={(value)=>handleChange('name', value)}
        // onChangeText={handleChange}
        />
      <Text>Child age:</Text>
      <TextInput
        value={child.age}
        keyboardType='numeric'
        onChangeText={(value)=>handleChange('age', value)}
        />
      <Text>Child sex:</Text>
      <TextInput
        value={child.sex}
        onChangeText={(value)=>handleChange('sex', value)}
        />
      <Button
        title='Confirm child details'
        onPress={()=>{
          // console.log(existing, 'existing in ACP');
          existing ? handleModify() : handleNew();
          navigation.navigate('ProfilePage');
        }
        }
        // onPress={()=>console.log('here in ACP', child)}
      />
    </View>
  )

}