import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetGastos } from "../gastos/gastosSlice";
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
  reducers: {
    validar: (state, action) => {
      state.validar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newPresupuesto, (state, action) => {
      state.validar = true;
    });
    builder.addCase(resetGastos, (state, action) => {
      state.validar = false;
    });
  },
});

export const { validar } = validacionSlice.actions;

export default validacionSlice.reducer;
