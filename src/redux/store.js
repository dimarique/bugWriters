import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import favoritesReducer from "./slices/favoritesSlice";
import cartReducer from "./slices/cartSlice";
import filtersReducer from "./slices/filtersSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    filters: filtersReducer,
  },
});
