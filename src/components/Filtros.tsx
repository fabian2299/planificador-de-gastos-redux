import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { newFiltro } from "../features/filtro/filtroSlice";
import { filterGastos } from "../features/gastos/gastosSlice";

export default function Filtros() {
  const dispatch = useAppDispatch();
  const filtro = useAppSelector((state) => state.filtro.filtro);

  useEffect(() => {
    if (filtro) {
      dispatch(filterGastos({ filtro }));
    }
  }, [filtro]);

  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select
            value={filtro}
            onChange={(e) => dispatch(newFiltro(e.target.value))}
          >
            <option value="">-- Todos los gastos --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
}
