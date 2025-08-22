import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/products/all`,
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    return products;
  },
);
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: "",
    showDiscount: false,
  },
  reducers: {
    showDiscount(state, action) {
      // is waiting for true/false
      state.showDiscount = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { showDiscount } = productsSlice.actions;
export default productsSlice.reducer;
