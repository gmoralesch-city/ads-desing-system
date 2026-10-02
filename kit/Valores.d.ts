import * as React from 'react';
export interface ValoresProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "focus";
  /** Text content; defaults to "$". */
  text1?: string;
  /** Text content; defaults to "l". */
  text2?: string;
  /** Text content; defaults to "6.43". */
  text3?: string;
  /** Text content; defaults to "7.54". */
  text4?: string;
}
export declare const Valores: React.FC<ValoresProps>;
export default Valores;
