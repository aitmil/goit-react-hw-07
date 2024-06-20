import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filtersReducer = filterSlice.reducer;
