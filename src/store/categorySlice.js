import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    allCategory: [],
    categoryLoader: false,
  },
  reducers: {
    saveAllCategoryAction: (state, action) => {
      console.log(action.payload);
      state.allCategory = action.payload;
      state.categoryLoader = true;
    },
  },
});

export const { saveAllCategoryAction } = categorySlice.actions;
export default categorySlice.reducer;
