import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlice'


// this is a store where we can pass through out the app
export const store = configureStore({
  reducer: todoReducer
})