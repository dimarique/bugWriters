import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
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
    priceTo: 3000000,
    status: "idle",
    error: "",
    showDiscount: false,
  },
  reducers: {
    setPriceFrom: (state, action) => {
      state.priceFrom = action.payload;
      state.filteredByPriceProducts = state.products.filter((product) => {
        return (
          product.price >= state.priceFrom &&
          product.price <= (state.priceTo || 3000000)
        );
      });
      console.log(state.filteredByPriceProducts);
    },
    setPriceTo: (state, action) => {
      state.priceTo = action.payload;
      state.filteredByPriceProducts = state.products.filter((product) => {
        return (
          product.price <= state.priceTo &&
          product.price >= (state.priceFrom || 0)
        );
      });
      console.log(state.filteredByPriceProducts);
    },
    showDiscount: (state, action) => {
      // is waiting for true/false
      state.showDiscount = action.payload;
    },
    compareProducts: (state, action) => {
      const { sortBy } = action.payload; //Это динамическое значение: оно меняется каждый раз в зависимости от выбора.
      //  console.log( sortBy);  !!!!! таки меняется
      state.products.sort((a, b) => {
        //.sort мутирует массив
        if (sortBy === "nameAsc") return a.title.localeCompare(b.title); // сравниваю строки по алфавиту
        if (sortBy === "nameDesc") return b.title.localeCompare(a.title);
        if (sortBy === "priceAsc") return a.price - b.price;
        if (sortBy === "priceDesc") return b.price - a.price;
        return 0;
      });
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
        state.filteredByPriceProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const {
  showDiscount,
  compareProducts,
  setPriceFrom,
  setPriceTo,
  filterByPrice,
} = productsSlice.actions;
export default productsSlice.reducer;
