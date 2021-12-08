import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface FiltroState {
  filtro: string;
}

const initialState: FiltroState = {
  filtro: "",
};

export const filtroSlice = createSlice({
  name: "filtro",
  initialState,
  reducers: {
    newFiltro: (state, action) => {
      state.filtro = action.payload;
    },
  },
});

export const { newFiltro } = filtroSlice.actions;

export default filtroSlice.reducer;
