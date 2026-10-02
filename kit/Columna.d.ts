import * as React from 'react';
export interface ColumnaProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover1" | "active" | "hover2";
  /** Text content; defaults to "Columna 2". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Columna: React.FC<ColumnaProps>;
export default Columna;
