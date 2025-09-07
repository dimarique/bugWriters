import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    priceFrom: 0,
    priceTo: Infinity,
    isDiscounted: false,
  },
  reducers: {
    setPriceFrom: (state, action) => {
      state.priceFrom = action.payload;
    },
    setPriceTo: (state, action) => {
      state.priceTo = action.payload;
    },
    setIsDiscounted: (state, action) => {
      state.isDiscounted = action.payload;
    },
  },
});

export const { setPriceFrom, setPriceTo, setIsDiscounted } =
  filtersSlice.actions;

export default filtersSlice.reducer;
