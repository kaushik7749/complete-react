import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  //creating reduer function
  reducers: {
    //action is the data which is coming in, state is the initialState i.e. current state later which will modify
    addItem: (state, action) => {
      //the data that we pass on click of this (+) btn that we recieve in action.payload
      state.items.push(action.payload);
    },
    //ths will remove items from cart
    removeItem: (state, action) => {
      state.items.pop();
    },

    //this will clear the cart
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
