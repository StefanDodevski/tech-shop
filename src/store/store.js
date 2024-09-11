import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import favouriteSlice from "./favouriteSlice";

const store = configureStore({
  reducer: {
    categoryStore: categorySlice,
    productStore: productSlice,
    cartStore: cartSlice,
    favouriteStore: favouriteSlice,
  },
});

export default store;
