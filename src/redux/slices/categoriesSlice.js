import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await fetch("http://localhost:3333/categories/all");
    const categories = await response.json();
    return categories;
  },
);
export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default categoriesSlice.reducer;
