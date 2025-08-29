import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")); // Загружаем корзину из localStorage

const saveCartToLocalStorage = (cart)=>{
   localStorage.setItem("cart", JSON.stringify(cart))
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart || {
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
          title: action.payload.title,
          price: action.payload.price,
          image: action.payload.image,
          count: 1,
        };
      }
      state.totalPrice =
        Math.round((state.totalPrice + action.payload.price) * 100) / 100;
      state.totalCount += 1;
      saveCartToLocalStorage(state)
    },
    removeProduct: (state, action) => {
      if (state.cartProducts[action.payload]) {
        const removedCount = state.cartProducts[action.payload].count;
        const removedPrice =
          state.cartProducts[action.payload].price * removedCount;
        delete state.cartProducts[action.payload];
        state.totalPrice =
          Math.round((state.totalPrice - removedPrice) * 100) / 100;
        state.totalCount -= removedCount;
      }
       saveCartToLocalStorage(state)
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
       saveCartToLocalStorage(state)
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
       saveCartToLocalStorage(state)
    },
  },
});

export const { addProduct, removeProduct, incrementProduct, decrementProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
