import { ReactNode } from "react";

interface MensajeProps {
  children: ReactNode;
  tipo: string;
}
export default function Mensaje({ children, tipo }: MensajeProps) {
  return <div className={`alerta ${tipo}`}>{children}</div>;
}
