import { createSlice } from '@reduxjs/toolkit';
import { createSessionFromParent } from '../services/sessions-service';

let today = new Date();
const currentDate = {
  day: today.getDate(),
  month: today.getMonth(),
  year: today.getFullYear(),
}
const emptyOffer = {
  parent: '',
  ID: -1,
  location: '',
  date: currentDate,
  startTime: {
    hours: 18,
    minutes: 0
  },
  endTime: {
    hours: 22,
    minutes: 0
  },
  children: []
}

export const newOfferSlice = createSlice({
  name: 'newOffer',
  initialState: emptyOffer,
  reducers: {
    startNewOffer: (state, action) => {
      let offer = { ...state };
      offer.parent = action.payload.parent;
      offer.ID = action.payload.parentID;
      return offer;
    },
    modifyOffer: (state, action) => {
      let offer = { ...state };
      offer[action.payload.param] = action.payload.value;
      return offer;
    },
    sendOffer: (state, action) => {

      let payload = {
        parent: action.payload.parent,
        ID: action.payload.ID,
        location: action.payload.location,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime,
        children: action.payload.children,
        carer: null,
        carerOptions: []
      }
      createSessionFromParent(payload);
      return emptyOffer;
    }
  }
})

export const { startNewOffer, modifyOffer, sendOffer } = newOfferSlice.actions;
export default newOfferSlice.reducer;