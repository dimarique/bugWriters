import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
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
  },
  reducers: {},
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
        state.error = action.error.message
      });
  },
});
export default productsSlice.reducer;
