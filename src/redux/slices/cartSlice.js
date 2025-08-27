import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")); // Загружаем корзину из localStorage

export const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart || {
    //"Если в localStorage уже есть сохранённая корзина → беру её (savedCart). Если нет → беру пустую корзину"
    cartProducts: {},
    totalPrice: 0,
    totalCount: 0,
  },

  reducers: {
    addProduct: (state, action) => {
      if (state.cartProducts[action.payload.id]) {
        state.cartProducts[action.payload.id].count += 1;
      } else {
        state.cartProducts[action.payload.id] = {
          name: action.payload.title,
          price: action.payload.price,
          count: 1
        };
      }
      state.totalPrice = Math.round((state.totalPrice + action.payload.price) * 100) / 100;
      state.totalCount += 1;
      console.log(JSON.parse(JSON.stringify(state)))
    },
    /**
     * Экшн для удаления товара. В payload ожидает идентификатор товара (чилос)
     */
    dropProduct: (state, action) => {
      if (state.cartProducts[action.payload]) {
        const price = state.cartProducts[action.payload].price;
        if (state.cartProducts[action.payload].count === 1) {
          delete state.cartProducts[action.payload];
        } else {
          state.cartProducts[action.payload].count -= 1;
        }
        state.totalPrice = Math.round((state.totalPrice - price) * 100) / 100;
        state.totalCount -= 1;
        console.log(JSON.parse(JSON.stringify(state)))
      }
    },

    clearCart: (state) => {
      state.cartProducts = {};
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const { addProduct, dropProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
