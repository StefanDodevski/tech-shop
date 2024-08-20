import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      let copyCart = [...state.cart];
      let findIndex = null;

      copyCart.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return true;
        }
        return false;
      });

      if (findIndex === null) {
        copyCart.push({
          ...action.payload,
          count: 1,
          cartTotal: action.payload.price,
        });
        state.totalProduct++;
        console.log(state.totalProduct);
      } else {
        copyCart[findIndex].count++;
      }

      state.cart = copyCart;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
