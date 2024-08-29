import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalProduct: 0,
    totalPrice: 0,
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
        state.totalPrice += action.payload.price;
      } else {
        copyCart[findIndex].count++;
      }

      state.cart = copyCart;
    },

    deleteCartAction: (state, action) => {
      let copyCart = [...state.cart];
      console.log(action.payload);

      let findIndex = null;

      copyCart.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return;
        }
      });

      if (findIndex !== null) {
        copyCart.splice(findIndex, 1);
        state.totalProduct--;
        // state.totalPrice
      }
      state.cart = copyCart;
    },
  },
});

export const { addToCart, deleteCartAction } = cartSlice.actions;
export default cartSlice.reducer;
