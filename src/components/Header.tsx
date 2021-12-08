import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { validar } from "../features/validacion/validacionSlice";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

export default function Header() {
  const dispatch = useAppDispatch();
  const validacion = useAppSelector((state) => state.validacion.validar);
  const presupuesto = useAppSelector((state) => state.presupuesto.presupuesto);

  useEffect(() => {
    if (presupuesto > 0) {
      dispatch(validar(true));
    }
  }, []);

  return (
    <header>
      <h1>Planificador de gastos</h1>
      {validacion ? <ControlPresupuesto /> : <NuevoPresupuesto />}
    </header>
  );
}
