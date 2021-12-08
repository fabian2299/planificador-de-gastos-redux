import { useAppSelector } from "../app/hooks";
import Gasto from "./Gasto";

export default function ListadoGastos() {
  const gastos = useAppSelector((state) => state.gastos.gastos);
  const filtro = useAppSelector((state) => state.filtro.filtro);
  const gastosFiltrados = useAppSelector(
    (state) => state.gastos.gastosFiltrados
  );

  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? "Gastos"
              : "No hay gastos en esta categoria"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto gasto={gasto} key={gasto.id} />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos" : "No hay gastos aun"} </h2>
          {gastos.map((gasto) => (
            <Gasto gasto={gasto} key={gasto.id} />
          ))}
        </>
      )}
    </div>
  );
}
