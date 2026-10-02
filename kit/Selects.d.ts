import * as React from 'react';
export interface SelectsProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active";
  /** Text content; defaults to "Opción 1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Selects: React.FC<SelectsProps>;
export default Selects;
