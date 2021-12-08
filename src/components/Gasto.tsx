import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../helpers";
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";
import {
  editGasto,
  IGasto,
  removeGasto,
  updateGasto,
} from "../features/gasto/gastosSlice";
import { useAppDispatch } from "../app/hooks";
import { animateModal, toggleModal } from "../features/modal/modalSlice";

interface ListaIconos {
  [key: string]: string;
}

const listaIconos: ListaIconos = {
  ahorro: IconoAhorro,
  comida: IconoComida,
  casa: IconoCasa,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscripciones,
};

interface GastoProps {
  gasto: IGasto;
}

export default function Gasto({ gasto }: GastoProps) {
  const dispatch = useAppDispatch();
  const { categoria, nombre, cantidad, id, fecha } = gasto;

  const handleLeadingAction = () => {
    dispatch(editGasto(gasto));
    dispatch(toggleModal(true));
    setTimeout(() => {
      dispatch(animateModal(true));
    }, 500);
  };

  const handleTrailingAction = () => {
    if (id) {
      dispatch(removeGasto({ id }));
    }
  };

  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction onClick={handleLeadingAction}>Editar</SwipeAction>
      </LeadingActions>
    );
  };

  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction destructive={true} onClick={handleTrailingAction}>
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={listaIconos[categoria]} alt="icono gasto" />
            <div className="descripcion-gasto">
              <p className="categoria">{categoria}</p>
              <p className="nombre-gasto">{nombre}</p>
              <p className="fecha-gasto">
                Agregado el : <span>{formatearFecha(fecha ?? Date.now())}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}
