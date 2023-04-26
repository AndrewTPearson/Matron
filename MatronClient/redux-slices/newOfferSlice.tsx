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
      let offer = {...state};
      offer.parent = action.payload.parent;
      offer.ID = action.payload.parentID;
      return offer;
    },
    modifyOffer: (state, action) => {
      // console.log('in modifyOffer, NOS')
      // console.log(action.payload, 'NOS');
      let offer = {...state};
      offer[action.payload.param] = action.payload.value;
      // console.log(offer, 'offer at end of NOS');
      return offer;
    },
    sendOffer: (state, action) => {
      // console.log('NOS sending a request 1', action);
      // console.log('NOS sending a request 2', action.payload);

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
      console.log(payload, 'payload sent');
      createSessionFromParent(payload);
      return emptyOffer;
    }
  }
})

export const {startNewOffer, modifyOffer, sendOffer} = newOfferSlice.actions;
export default newOfferSlice.reducer;