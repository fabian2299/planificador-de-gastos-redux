import { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { selectPresupuesto } from "../features/presupuesto/presupuestoSlice";
import { formatearCantidad } from "../helpers";

export default function ControlPresupuesto() {
  const presupuesto = useAppSelector(selectPresupuesto);
  const gastos = useAppSelector((state) => state.gastos.gastos);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;
    setGastado(totalGastado);
    setDisponible(totalDisponible);
  }, [gastos]);

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
          <span>Disponible:</span> {formatearCantidad(disponible)}
        </p>{" "}
        <p>
          <span>Gastado:</span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
}
