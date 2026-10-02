import * as React from 'react';
export interface SteppersProps {
  className?: string;
  style?: React.CSSProperties;
  paso?: "primero" | "segundo" | "tercero" | "fin";
}
export declare const Steppers: React.FC<SteppersProps>;
export default Steppers;
