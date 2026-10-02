import * as React from 'react';
export interface AccionesProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Acciones: React.FC<AccionesProps>;
export default Acciones;
