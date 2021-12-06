import { configureStore } from "@reduxjs/toolkit";
import presupuestoReducer from "../features/presupuesto/presupuestoSlice";
import validacionReducer from "../features/validacion/validacionSlice";
import modalReducer from "../features/modal/modalSlice";
import gastosReducer from "../features/gasto/gastosSlice";

export const store = configureStore({
  reducer: {
    presupuesto: presupuestoReducer,
    validacion: validacionReducer,
    modal: modalReducer,
    gastos: gastosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
