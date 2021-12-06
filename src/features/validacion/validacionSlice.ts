import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { newPresupuesto } from "../presupuesto/presupuestoSlice";
interface ValidacionState {
  validar: boolean;
}

const initialState: ValidacionState = {
  validar: false,
};

export const validacionSlice = createSlice({
  name: "validacion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newPresupuesto, (state, action) => {
      state.validar = true;
    });
  },
});

export default validacionSlice.reducer;
