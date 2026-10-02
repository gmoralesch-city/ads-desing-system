import * as React from 'react';
export interface StepperBaseHProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "completo" | "actual" | "pendiente";
  /** Text content; defaults to "1". */
  text1?: string;
  /** Text content; defaults to "Paso". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const StepperBaseH: React.FC<StepperBaseHProps>;
export default StepperBaseH;
