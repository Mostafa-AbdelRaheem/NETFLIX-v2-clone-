import {createSlice } from '@reduxjs/toolkit';


export const emailSlice = createSlice({
  name: 'email',
  initialState:{
    email:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    emailValue: (state, action) => {
      state.email = action.payload;
    },
  },
})

export const { emailValue } = emailSlice.actions;

export const selectEmail = (state) => state.email.email;


export default emailSlice.reducer;
