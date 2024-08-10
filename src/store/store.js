import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    categoryStore: categorySlice,
  },
});

export default store;
