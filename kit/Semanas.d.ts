import * as React from 'react';
export interface SemanasProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active" | "focus" | "disabled";
  /** Text content; defaults to "21". */
  text1?: string;
}
export declare const Semanas: React.FC<SemanasProps>;
export default Semanas;
