import {createSlice } from '@reduxjs/toolkit';


export const myListSlice = createSlice({
  name: 'myList',
  initialState:{
    myList:[],
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToMyList: (state, action) => {
      state.myList = [...state.myList,action.payload] ;
    },
    removeFromMyList: (state, action) => {
      state.myList= state.myList.filter( (item)=>item.id !== action.payload.id)
      
    },
  },
})

export const { addToMyList,removeFromMyList } = myListSlice.actions;

export const selectMyList = (state) => state.myList.myList;


export default myListSlice.reducer;
