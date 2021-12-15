import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import myListReducer from '../features/myListSlice'

export default combineReducers({
    user:userReducer,
    myList:myListReducer,
})