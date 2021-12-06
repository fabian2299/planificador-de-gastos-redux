// helpers funciones que nos ayudan en una o varias partes de la app

export const generarId = () => {
  const random = Math.random().toString(36).substr(2);
  const fecha = Date.now().toString(36);
  return random + fecha;
};

export const formatearFecha = (fecha: number) => {
  const fechaNueva = new Date(fecha);
  return fechaNueva.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export const formatearCantidad = (cantidad: number) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
