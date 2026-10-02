import * as React from 'react';
export interface SnackBarsProps {
  className?: string;
  style?: React.CSSProperties;
  mensaje?: "informativo" | "advertencia" | "exitoso" | "fallido";
}
export declare const SnackBars: React.FC<SnackBarsProps>;
export default SnackBars;
