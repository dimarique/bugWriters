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
      const value = action.payload;
      if (value < 0) state.priceFrom = 0;
      else if (state.priceTo !== null && value > state.priceTo)
        state.priceFrom = state.priceTo; // не больше priceTo
      else state.priceFrom = value;
    },
    setPriceTo: (state, action) => {
      const value = action.payload;
      if (value !== null && value < state.priceFrom)
        state.priceTo = state.priceFrom; // не меньше priceFrom
      else state.priceTo = value;
    },
    setIsDiscounted: (state, action) => {
      state.isDiscounted = action.payload;
    },
  },
});

export const { setPriceFrom, setPriceTo, setIsDiscounted } =
  filtersSlice.actions;

export default filtersSlice.reducer;
