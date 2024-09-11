import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    allFavourite: [],
    favouriteTotal: 0,
  },
  reducers: {
    updateFavouriteAction: (state, action) => {
      console.log(action.payload);
      let copyFavourite = [...state.allFavourite];
      let findIndex = null;

      copyFavourite.find((item, index) => {
        if (item.id === action.payload.id) {
          findIndex = index;
          return true;
        }
        return false;
      });

      if (findIndex === null) {
        copyFavourite.push(action.payload);
        state.favouriteTotal++;
      } else {
        copyFavourite.splice(findIndex, 1);
        state.favouriteTotal--;
      }

      state.allFavourite = copyFavourite;
    },
  },
});

export const { updateFavouriteAction } = favouriteSlice.actions;
export default favouriteSlice.reducer;
