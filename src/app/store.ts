import { configureStore } from "@reduxjs/toolkit";
import presupuestoReducer from "../features/presupuesto/presupuestoSlice";
import validacionReducer from "../features/validacion/validacionSlice";

export const store = configureStore({
  reducer: {
    presupuesto: presupuestoReducer,
    validacion: validacionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
