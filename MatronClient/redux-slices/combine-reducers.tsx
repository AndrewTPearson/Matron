import activeUserSlice from "./activeUserSlice";
import newOfferSlice from "./newOfferSlice";
import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore,combineReducers } from 'redux';

export const reducers = combineReducers({
  activeUser: activeUserSlice,
  newOffer: newOfferSlice
})

export const store = legacy_createStore(reducers);
