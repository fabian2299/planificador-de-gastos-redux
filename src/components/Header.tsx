import { useAppSelector } from "../app/hooks";
import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

export default function Header() {
  const validacion = useAppSelector((state) => state.validacion);
  const isValid = validacion === true;
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValid ? <ControlPresupuesto /> : <NuevoPresupuesto />}
    </header>
  );
}
