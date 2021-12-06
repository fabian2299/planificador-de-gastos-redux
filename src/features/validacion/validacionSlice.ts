import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { newPresupuesto } from "../presupuesto/presupuestoSlice";

export const validacionSlice = createSlice({
  name: "validacion",
  initialState: false,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newPresupuesto, (state, action) => {
      return (state = true);
    });
  },
});

export default validacionSlice.reducer;
