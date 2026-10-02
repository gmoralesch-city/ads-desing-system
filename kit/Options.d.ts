import * as React from 'react';
export interface OptionsProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "checkbox" | "radio" | "toogle";
  selector?: "off" | "on";
  estado?: "default" | "disabled";
  /** Text content; defaults to "Opción". */
  text1?: string;
}
export declare const Options: React.FC<OptionsProps>;
export default Options;
