import { createSlice } from '@reduxjs/toolkit';

export const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState: {
    loggedIn: false,
    userDetails: {
      ID: -1,
      username: '',
      isParent: false,
      isCarer: false,
      children: []
    }},
  reducers: {
    newActiveUser: (state, action) => {
      // console.log('logging in with redux, AUS');
      // console.log(action, 'AUS');
      return {
        loggedIn: true,
        userDetails: {
        ID: action.payload.ID,
        username: action.payload.username,
        isParent: action.payload.isParent,
        isCarer: action.payload.isCarer,
        children: action.payload.children
      }};
    },
    removeActiveUser: (state) => {
      return {
        loggedIn: false,
        userDetails: {
          ID: -1,
          username: '',
          isParent: false,
          isCarer: false,
          children: []
        }}
    },
    newChild: (state, action: {
      payload: {
        age: number,
        childID: number,
        name: string,
        sex: string
      },
      type: string
    }) => {
      state.userDetails.children.push(action.payload);
    }
  }
})
export const {newActiveUser, removeActiveUser, newChild} = activeUserSlice.actions
export default activeUserSlice.reducer