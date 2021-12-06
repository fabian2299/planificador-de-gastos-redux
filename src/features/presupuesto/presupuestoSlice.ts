import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface PresupuestoState {
  presupuesto: number;
}

const initialState: PresupuestoState = {
  presupuesto: 0,
};

export const presupuestoSlice = createSlice({
  name: "presupuesto",
  initialState,
  reducers: {
    newPresupuesto: (state, action: PayloadAction<number>) => {
      if (!+action.payload || +action.payload <= 0) {
        state.presupuesto = 0;
        return;
      }
      state.presupuesto = +action.payload;
    },
  },
});

export const { newPresupuesto } = presupuestoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPresupuesto = (state: RootState) =>
  state.presupuesto.presupuesto;

export default presupuestoSlice.reducer;
