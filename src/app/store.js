import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import myListReducer from '../features/myListSlice'

export const store = configureStore({
  reducer: {
     user: userReducer,
     myList: myListReducer,
  },
});
