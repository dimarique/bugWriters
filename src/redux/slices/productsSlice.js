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
    filteredByPriceProducts: [],
    priceFrom: 0,
    priceTo: Infinity,
    status: "idle",
    error: "",
    showDiscount: false,
  },
  reducers: {
    compareProducts: (state, action) => {
      const { sortBy } = action.payload;
      state.products.sort((a, b) => {
        if (sortBy === "nameAsc") return a.title.localeCompare(b.title);
        if (sortBy === "nameDesc") return b.title.localeCompare(a.title);
        if (sortBy === "priceAsc") return a.price - b.price;
        if (sortBy === "priceDesc") return b.price - a.price;
        return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredByPriceProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { showDiscount, compareProducts, setPriceFrom, setPriceTo } =
  productsSlice.actions;

export default productsSlice.reducer;
