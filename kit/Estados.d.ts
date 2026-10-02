import * as React from 'react';
export interface EstadosProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "proceso" | "aprobado" | "revisión" | "bloqueado";
}
export declare const Estados: React.FC<EstadosProps>;
export default Estados;
