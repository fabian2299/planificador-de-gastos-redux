import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  editGasto,
  newGasto,
  updateGasto,
} from "../features/gastos/gastosSlice";
import { animateModal, toggleModal } from "../features/modal/modalSlice";
import Mensaje from "./Mensaje";
import CerrarModal from "../img/cerrar.svg";

export default function Modal() {
  const dispatch = useAppDispatch();
  const editarGasto = useAppSelector((state) => state.gastos.gastoEditar);
  const animarModal = useAppSelector((state) => state.modal.animarModal);
  const [mensaje, setMensaje] = useState("");
  const [values, setValues] = useState({
    nombre: "",
    cantidad: 0,
    categoria: "",
  });
  const [id, setId] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const ocultarModal = () => {
    dispatch(animateModal(false));
    dispatch(editGasto({}));
    setTimeout(() => {
      dispatch(toggleModal(false));
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
    if (id) {
      const { nombre, cantidad, categoria } = values;
      dispatch(updateGasto({ nombre, cantidad, id, categoria }));
      dispatch(editGasto({}));
    } else {
      const { nombre, cantidad, categoria } = values;
      dispatch(newGasto(nombre, +cantidad, categoria));
    }
    dispatch(animateModal(true));
    setTimeout(() => {
      dispatch(toggleModal(false));
    }, 500);
    setValues({
      nombre: "",
      cantidad: 0,
      categoria: "",
    });
  };

  useEffect(() => {
    if (editarGasto.id) {
      setValues({
        ...values,
        nombre: editarGasto.nombre,
        cantidad: editarGasto.cantidad,
        categoria: editarGasto.categoria,
      });
      setId(editarGasto.id);
    }
  }, []);

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarModal} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSumbit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{editarGasto.nombre ? "Editar Gasto " : "Nuevo Gasto"}</legend>
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

        <input
          type="submit"
          value={editarGasto.nombre ? "Guardar Cambios" : "Añadir Gasto"}
        />
      </form>
    </div>
  );
}
