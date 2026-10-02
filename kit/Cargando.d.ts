import * as React from 'react';
export interface CargandoProps {
  className?: string;
  style?: React.CSSProperties;
  movimiento?: "1" | "2" | "3" | "4";
}
export declare const Cargando: React.FC<CargandoProps>;
export default Cargando;
