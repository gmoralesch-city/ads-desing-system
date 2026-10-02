import * as React from 'react';
export interface DetallesProps {
  className?: string;
  style?: React.CSSProperties;
  abierto?: "on" | "off";
  /** Text content; defaults to "Coberturas adicionales". */
  text1?: string;
  /** Text content; defaults to "Responsabilidad Civil: $25.000". */
  text2?: string;
  /** Text content; defaults to "Responsabilidad Civil: $25.000". */
  text3?: string;
  /** Text content; defaults to "Responsabilidad Civil: $25.000". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Detalles: React.FC<DetallesProps>;
export default Detalles;
