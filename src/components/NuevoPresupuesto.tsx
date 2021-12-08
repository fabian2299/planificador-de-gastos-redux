import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { newPresupuesto } from "../features/presupuesto/presupuestoSlice";
import Mensaje from "./Mensaje";

export default function NuevoPresupuesto() {
  const dispatch = useAppDispatch();
  const presupuesto = useAppSelector((state) => state.presupuesto.presupuesto);
  const [valor, setValor] = useState(presupuesto ?? 0);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!+valor || +valor <= 0) {
      return setMensaje("No es un presupuesto valido");
    }
    setMensaje("");
    dispatch(newPresupuesto(+valor));
  };

  return (
    <div className=" contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu presupuesto"
            value={valor}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}
