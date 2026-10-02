import * as React from 'react';
export interface CabeceraProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "siniestros" | "usuarios" | "negocios" | "ventas";
}
export declare const Cabecera: React.FC<CabeceraProps>;
export default Cabecera;
