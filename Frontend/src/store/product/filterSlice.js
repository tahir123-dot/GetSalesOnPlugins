import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    selectedCategories: [],
    selectedBrands: [],
  },
  reducers: {
    toggleCategory: (state, action) => {
      const value = action.payload;
      if (state.selectedCategories.includes(value)) {
        state.selectedCategories = state.selectedCategories.filter(
          (c) => c !== value
        );
      } else {
        state.selectedCategories.push(value);
      }
    },
    toggleBrand: (state, action) => {
      const value = action.payload;
      if (state.selectedBrands.includes(value)) {
        state.selectedBrands = state.selectedBrands.filter((b) => b !== value);
      } else {
        state.selectedBrands.push(value);
      }
    },
    clearFilters: (state) => {
      state.selectedCategories = [];
      state.selectedBrands = [];
    },
  },
});

export const { toggleCategory, toggleBrand, clearFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
