import {
  combineReducers,
  configureStore,
  createReducer,
} from "@reduxjs/toolkit";
const intialState = {};
const rootReducer = createReducer(intialState, (builder) => {
    
});
const combinereduer = { rootReducer };
export const store = configureStore(combineReducers(combinereduer));
