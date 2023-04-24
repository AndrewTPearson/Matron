import { createSlice } from '@reduxjs/toolkit';

export const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState: {
    loggedIn: false,
    userDetails: {}},
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
      return [false, {}]
    },
    newChild: (state, action) => {
      let newState = {...state};
      console.log(newState.userDetails, 'AUS1');
      console.log(typeof newState.userDetails, 'AUS3');
      console.log(action, 'AUS2');
      // newState.userDetails.children.push(action.payload.child);
      return newState;
    }
  }
})
export const {newActiveUser, removeActiveUser, newChild} = activeUserSlice.actions
export default activeUserSlice.reducer