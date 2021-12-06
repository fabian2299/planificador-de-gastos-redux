import { useAppSelector } from "../app/hooks";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

export default function Header() {
  const validacion = useAppSelector((state) => state.validacion.validar);

  return (
    <header>
      <h1>Planificador de gastos</h1>
      {validacion ? <ControlPresupuesto /> : <NuevoPresupuesto />}
    </header>
  );
}
