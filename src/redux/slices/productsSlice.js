import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
/**
 * Thunk for fetching all products from the API.
 *
 * @async
 * @function fetchProducts
 * @returns {Promise<Object[]>} Array of product objects
 * @throws {Error} If the server response is not ok
 */
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
/**
 * Slice for managing products state.
 *
 * @property {Object[]} products - List of products
 * @property {"idle"|"loading"|"succeeded"|"failed"} status - Current request status
 * @property {string} error - Error message if the request failed
 */
export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: "",
  },
  reducers: {
    /**
     * Filters products by price range.
     *
     * @param {Object} state - Current slice state
     * @param {Object} action - Action with filter data
     * @param {number} action.payload.from - Lower price limit
     * @param {number} action.payload.to - Upper price limit
     */
    filterByPrice: (state, action) => {
      console.log(current(state.products));
      console.log(action.payload);
    },
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
export const { filterByPrice } = productsSlice.actions;
export default productsSlice.reducer;
