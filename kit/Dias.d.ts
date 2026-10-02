import * as React from 'react';
export interface DiasProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active" | "focus" | "disabled";
  /** Text content; defaults to "1". */
  text1?: string;
}
export declare const Dias: React.FC<DiasProps>;
export default Dias;
