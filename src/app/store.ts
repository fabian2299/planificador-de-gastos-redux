import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import presupuestoReducer from "../features/presupuesto/presupuestoSlice";
import validacionReducer from "../features/validacion/validacionSlice";
import modalReducer from "../features/modal/modalSlice";
import gastosReducer from "../features/gastos/gastosSlice";
import filtroReducer from "../features/filtro/filtroSlice";

const rootReducer = combineReducers({
  presupuesto: presupuestoReducer,
  validacion: validacionReducer,
  modal: modalReducer,
  gastos: gastosReducer,
  filtro: filtroReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["presupuesto", "gastos"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
