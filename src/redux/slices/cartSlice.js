import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")); // Загружаем корзину из localStorage

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart || {
    cartProducts: {},
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { id, title, price, discont_price, image, count = 1 } = action.payload;
      if (state.cartProducts[id]) {
        state.cartProducts[id].count += count;
      } else {
        state.cartProducts[id] = {
          title,
          price,
          image,
          count,
          discont_price,
        };
      }
      state.totalPrice =
        Math.round((state.totalPrice + price * count) * 100) / 100;
      state.totalCount += count;
      saveCartToLocalStorage(state);
    },
    removeProduct: (state, action) => {
      if (state.cartProducts[action.payload]) {
        const removedCount = state.cartProducts[action.payload].count;
        const removedPrice = state.cartProducts[action.payload].price * removedCount;
        delete state.cartProducts[action.payload];
        state.totalPrice =
          Math.round((state.totalPrice - removedPrice) * 100) / 100;
        state.totalCount -= removedCount;
      }
      saveCartToLocalStorage(state);
    },
    incrementProduct: (state, action) => {
      if (state.cartProducts[action.payload]) {
        state.cartProducts[action.payload].count += 1;
        state.totalPrice =
          Math.round(
            (state.totalPrice + state.cartProducts[action.payload].price) * 100
          ) / 100;
        state.totalCount += 1;
      }
      saveCartToLocalStorage(state);
    },
    decrementProduct: (state, action) => {
      if (state.cartProducts[action.payload]) {
        const price = state.cartProducts[action.payload].price;
        state.cartProducts[action.payload].count -= 1;
        state.totalPrice = Math.round((state.totalPrice - price) * 100) / 100;
        state.totalCount -= 1;

        if (state.cartProducts[action.payload].count <= 0) {
          delete state.cartProducts[action.payload];
        }
      }
      saveCartToLocalStorage(state);
    },
    clearCart: (state) => {
      state.cartProducts = {};
      state.totalPrice = 0;
      state.totalCount = 0;
      saveCartToLocalStorage(state);
    },
    switchCart: (state, action) => {
      const { id, title, price, discont_price, image, count = 1 } = action.payload;

      if (state.cartProducts[id]) {
        const removedCount = state.cartProducts[id].count;
        const removedPrice = state.cartProducts[id].price * removedCount;
        delete state.cartProducts[id];
        state.totalPrice =
          Math.round((state.totalPrice - removedPrice) * 100) / 100;
        state.totalCount -= removedCount;
      } else {
        state.cartProducts[id] = { title, price, discont_price, image, count };
        state.totalPrice =
          Math.round((state.totalPrice + price * count) * 100) / 100;
        state.totalCount += count;
      }
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
  clearCart,
  switchCart,
} = cartSlice.actions;
export default cartSlice.reducer;
