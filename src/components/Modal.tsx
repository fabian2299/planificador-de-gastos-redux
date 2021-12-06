import { ChangeEvent, useState } from "react";
import CerrarModal from "../img/cerrar.svg";
import Mensaje from "./Mensaje";

export default function Modal({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
}: any) {
  const [mensaje, setMensaje] = useState("");
  const [values, setValues] = useState({
    nombre: "",
    cantidad: "",
    categoria: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const ocultarModal = () => {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSumbit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(values).includes("")) {
      setMensaje("todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }
    guardarGasto(values);
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSumbit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el nombre del Gasto"
            id="nombre"
            name="nombre"
            value={values.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300 "
            id="cantidad"
            name="cantidad"
            value={values.cantidad}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
}
