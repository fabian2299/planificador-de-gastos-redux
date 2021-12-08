import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generarId } from "../../helpers";

export interface IGasto {
  nombre: string;
  cantidad: number;
  categoria: string;
  id?: string;
  fecha?: number;
}

interface GastoState {
  gastos: IGasto[];
  gastoEditar: IGasto;
  gastosFiltrados: IGasto[];
}

const initialState: GastoState = {
  gastos: [],
  gastoEditar: {} as IGasto,
  gastosFiltrados: [],
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
    updateGasto: (state, action: PayloadAction<IGasto>) => {
      const { id, nombre, cantidad, categoria } = action.payload;
      const existingGasto = state.gastos.find((gasto) => gasto.id === id);
      if (existingGasto) {
        existingGasto.nombre = nombre;
        existingGasto.cantidad = +cantidad;
        existingGasto.categoria = categoria;
      }
    },
    editGasto: (state, action) => {
      state.gastoEditar = action.payload;
    },
    removeGasto: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const removeGasto = state.gastos.findIndex((gastos) => gastos.id === id);
      if (removeGasto !== -1) {
        state.gastos.splice(removeGasto, 1);
        state.gastoEditar = {} as IGasto;
      }
    },
    filterGastos: (state, action) => {
      const { filtro } = action.payload;
      const filterGastos = state.gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      state.gastosFiltrados = filterGastos;
    },
    resetGastos: (state, action) => {
      state.gastos = action.payload;
    },
  },
});

export const {
  newGasto,
  updateGasto,
  editGasto,
  removeGasto,
  filterGastos,
  resetGastos,
} = gastosSlice.actions;

export default gastosSlice.reducer;
