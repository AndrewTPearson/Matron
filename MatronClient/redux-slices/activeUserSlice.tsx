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
        isCarer: action.payload.isCarer
      }};
    },
    removeActiveUser: (state) => {
      return [false, {}]
    }
  }
})
export const {newActiveUser, removeActiveUser} = activeUserSlice.actions
export default activeUserSlice.reducer