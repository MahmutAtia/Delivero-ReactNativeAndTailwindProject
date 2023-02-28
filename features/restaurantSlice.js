import { createSlice } from "@reduxjs/toolkit";

export const RestauantSlice = createSlice({
  name: "res",
  initialState: {
    items: [],
  },
  reducers: {
    
  },
});

// Action creators are generated for each case reducer function
export const selectRes = (state) => state.basket.items;


export default RestauantSlice.reducer;