import { useAppSelector } from "../app/hooks";
import { selectPresupuesto } from "../features/presupuesto/presupuestoSlice";
import { formatearCantidad } from "../helpers";

export default function ControlPresupuesto() {
  const presupuesto = useAppSelector(selectPresupuesto);

  return (
    <div className="control-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> {formatearCantidad(0)}
        </p>{" "}
        <p>
          <span>Gastado:</span> {formatearCantidad(0)}
        </p>
      </div>
    </div>
  );
}
