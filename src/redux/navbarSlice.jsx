import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    language: "ru",
  };

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
        state.language = payload;
      },
  },
})

// Action creators are generated for each case reducer function
export const {setLanguage } = navbarSlice.actions

export default navbarSlice.reducer