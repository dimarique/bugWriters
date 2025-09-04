import { createSlice } from "@reduxjs/toolkit";
export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    priceFrom: null,
    priceTo: Infinity,
    discounted: false,
  },
  reducers: {
    setPriceFrom: (state, action) => {
      state.priceFrom = action.payload;
    },
    setPriceTo: (state, action) => {
      state.priceTo = action.payload;
    },
    setDiscounted: (state, action) => {
      state.discounted = action.payload;
    },
  },
});

export const { setPriceFrom, setPriceTo, setDiscounted } = filtersSlice.actions;

export default filtersSlice.reducer;
