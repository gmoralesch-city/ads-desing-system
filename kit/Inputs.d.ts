import * as React from 'react';
export interface InputsProps {
  className?: string;
  style?: React.CSSProperties;
  icono?: "on" | "off";
  estado?: "default" | "focus" | "fill" | "fail" | "disabled empty" | "disabled fill";
  label?: string;
  placeholder?: string;
  help?: string;
  /** Text content; defaults to "l". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Inputs: React.FC<InputsProps>;
export default Inputs;
