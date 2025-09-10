import { createSlice } from "@reduxjs/toolkit";


const saved = JSON.parse(localStorage.getItem('favorites') || '[]');



export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favProducts: saved,
    },

    reducers: {
        switchFavorites: (state, action) => {
            // reducer is waiting for { id, title, price, image, discont_price }

            const product = action.payload;
            const switchProduct = state.favProducts.filter((favProduct) => {
                return favProduct.id !== product.id
            })


            if (switchProduct.length === state.favProducts.length) {
                switchProduct.push(product)
            }


            state.favProducts = switchProduct;

            localStorage.setItem('favorites', JSON.stringify(switchProduct))

        }
    }

})

export const { switchFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;


