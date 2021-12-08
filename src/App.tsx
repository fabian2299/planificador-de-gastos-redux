import { useAppDispatch, useAppSelector } from "./app/hooks";
import { animateModal, toggleModal } from "./features/modal/modalSlice";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";
import Filtros from "./components/Filtros";

export default function App() {
  const dispatch = useAppDispatch();
  const validacion = useAppSelector((state) => state.validacion.validar);
  const modal = useAppSelector((state) => state.modal.modal);

  const handleNuevoGasto = () => {
    dispatch(toggleModal(true));
    setTimeout(() => {
      dispatch(animateModal(true));
    }, 500);
  };

  return (
    <div className={modal ? "fijar" : ""}>
      <Header />
      {validacion && (
        <>
          <main>
            <Filtros />
            <ListadoGastos />
          </main>
          <div className="nuevo-gasto">
            <img
              src={iconoNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal />}
    </div>
  );
}
