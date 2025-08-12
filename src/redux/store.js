import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
});
