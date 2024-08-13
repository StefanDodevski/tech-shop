import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    allProducts: [],
    loading: false,
  },
  reducers: {
    saveAllProductAction: (state, action) => {
      state.allProducts = action.payload;
      state.loading = true;
    },
  },
});

export const { saveAllProductAction } = productSlice.actions;
export default productSlice.reducer;
