import * as React from 'react';
export interface FlechasProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "derecha" | "izquierda";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Flechas: React.FC<FlechasProps>;
export default Flechas;
