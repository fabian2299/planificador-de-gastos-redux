import { useState } from "react";
import { useAppSelector } from "./app/hooks";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

export default function App() {
  const validacion = useAppSelector((state) => state.validacion);
  const isValid = validacion === true;
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([] as any);

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto: any) => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  console.log(gastos);

  return (
    <div className={modal ? "fijar" : ""}>
      <Header />

      {isValid && (
        <>
          <main>
            <ListadoGastos gastos={gastos} />
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

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />
      )}
    </div>
  );
}
