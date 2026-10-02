import * as React from 'react';
export interface CollapsedsProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover";
  /** Text content; defaults to "Desplegado 1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Collapseds: React.FC<CollapsedsProps>;
export default Collapseds;
