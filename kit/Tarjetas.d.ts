import * as React from 'react';
export interface TarjetasProps {
  className?: string;
  style?: React.CSSProperties;
  marca?: "american express" | "diners club" | "mastercard" | "visa" | "discover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Tarjetas: React.FC<TarjetasProps>;
export default Tarjetas;
