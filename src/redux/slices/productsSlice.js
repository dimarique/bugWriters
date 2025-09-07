import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Async thunk for fetching all products from API.
 *
 * Dispatches three lifecycle actions automatically:
 * - pending → when request starts
 * - fulfilled → when request succeeds (returns Product[])
 * - rejected → when request fails (returns error)
 *
 * @async
 * @function fetchProducts
 * @returns {Promise<Product[]>} List of products from API
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
 * @typedef {Object} Product
 * @property {number} id - Unique product ID
 * @property {string} title - Product title/name
 * @property {number} price - Base product price
 * @property {string} image - Image URL
 * @property {number} [discont_price] - Discounted price (optional)
 */

/**
 * @typedef {Object} ProductsState
 * @property {Product[]} products - All fetched products
 * @property {Product[]} filteredByPriceProducts - Products filtered by price range
 * @property {number} priceFrom - Minimum price for filtering
 * @property {number} priceTo - Maximum price for filtering
 * @property {"idle"|"loading"|"succeeded"|"failed"} status - Fetch request status
 * @property {string} error - Error message if request fails
 * @property {boolean} showDiscount - Flag for showing only discounted products
 */

/**
 * Redux slice for products state.
 * Handles fetching, filtering, sorting and discount toggle.
 */
export const productsSlice = createSlice({
  name: "products",
  /** @type {ProductsState} */
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
    /**
     * Sets the minimum price and updates filtered products.
     * @param {ProductsState} state
     * @param {{payload: number}} action - Minimum price value
     */
    /* setPriceFrom: (state, action) => {
      state.priceFrom = action.payload;
      state.filteredByPriceProducts = state.products.filter((product) => {
        return (
          product.price >= state.priceFrom &&
          product.price <= (state.priceTo || Infinity)
        );
      });
    }, */

    /**
     * Sets the maximum price and updates filtered products.
     * @param {ProductsState} state
     * @param {{payload: number}} action - Maximum price value
     */
    /* setPriceTo: (state, action) => {
      state.priceTo = action.payload;
      state.filteredByPriceProducts = state.products.filter((product) => {
        return (
          product.price <= state.priceTo &&
          product.price >= (state.priceFrom || 0)
        );
      });
    }, */

    /**
     * Toggles discount mode (true = only discounted products).
     * @param {ProductsState} state
     * @param {{payload: boolean}} action - Whether to show discounts
     */
    /* showDiscount: (state, action) => {
      state.showDiscount = action.payload;
    }, */

    /**
     * Sorts products in place by different criteria.
     * @param {ProductsState} state
     * @param {{payload: {sortBy: "nameAsc"|"nameDesc"|"priceAsc"|"priceDesc"}}} action
     */
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
      /**
       * Handles pending state of fetchProducts.
       * @param {ProductsState} state
       */
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      /**
       * Handles fulfilled state of fetchProducts.
       * Stores fetched products in both products and filtered list.
       * @param {ProductsState} state
       * @param {{payload: Product[]}} action
       */
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredByPriceProducts = action.payload;
      })
      /**
       * Handles rejected state of fetchProducts.
       * Saves error message to state.
       * @param {ProductsState} state
       * @param {{error: {message: string}}} action
       */
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { showDiscount, compareProducts, setPriceFrom, setPriceTo } =
  productsSlice.actions;

export default productsSlice.reducer;
