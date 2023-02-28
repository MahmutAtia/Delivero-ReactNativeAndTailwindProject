import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItim: (state, action) => {
    const index = state.items.findIndex(item=> item.id===action.payload.id);
    console.log(index)
    let newBasket = [...state.items];
    if(index>=0){
    newBasket.splice(index,1);
} else{console.log("there is no item" + action.payload.id   )}
    state.items = newBasket ;
   
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItim } = BasketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsById = (state, id) =>
  state.basket.items.filter((item) => item.id === id);
export const selectBasketTotal=  (state)=> state.basket.items.reduce((
    total,item
    )=>
   total+item.price
    ,0)

export default BasketSlice.reducer;
