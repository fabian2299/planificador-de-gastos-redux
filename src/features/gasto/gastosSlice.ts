import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generarId } from "../../helpers";

export interface IGasto {
  nombre: string;
  cantidad: string;
  categoria: string;
  id?: string;
  fecha?: number;
}

interface GastoState {
  gastos: IGasto[];
}

const initialState: GastoState = {
  gastos: [],
};

export const gastosSlice = createSlice({
  name: "gastos",
  initialState,
  reducers: {
    newGasto: {
      reducer(state, action: PayloadAction<IGasto>) {
        state.gastos.push(action.payload);
      },
      prepare(nombre, cantidad, categoria) {
        return {
          payload: {
            id: generarId(),
            fecha: Date.now(),
            nombre,
            cantidad,
            categoria,
          },
        };
      },
    },
  },
});

export const { newGasto } = gastosSlice.actions;

export default gastosSlice.reducer;
