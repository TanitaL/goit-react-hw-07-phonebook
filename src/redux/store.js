import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./slice.js"

 
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

