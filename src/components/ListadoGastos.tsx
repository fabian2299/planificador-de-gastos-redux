import Gasto from "./Gasto";

export default function ListadoGastos({ gastos }: any) {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos aun"} </h2>
      {gastos.map((gasto: any) => (
        <Gasto gasto={gasto} key={gasto.id} />
      ))}
    </div>
  );
}
