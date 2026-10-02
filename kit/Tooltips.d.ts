import * as React from 'react';
export interface TooltipsProps {
  className?: string;
  style?: React.CSSProperties;
  titulo?: "off" | "on";
  flecha?: "arriba" | "derecha" | "abajo" | "izquierda";
}
export declare const Tooltips: React.FC<TooltipsProps>;
export default Tooltips;
