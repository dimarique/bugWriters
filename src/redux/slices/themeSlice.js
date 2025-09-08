import { createSlice } from "@reduxjs/toolkit";


const theme = localStorage.getItem('theme') || 'light'

export const themeSlice = createSlice({
name:'theme',
initialState: {
    selectedTheme: theme,
},
reducers: {
    switchTheme: (state, action)=>{
       state.selectedTheme = state.selectedTheme === 'light' ? 'dark' : 'light' 

localStorage.setItem('theme', state.selectedTheme)
        

    }
}

})

export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;

