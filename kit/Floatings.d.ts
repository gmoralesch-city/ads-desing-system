import * as React from 'react';
export interface FloatingsProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "principal" | "secuendario";
  tamaO?: "lg" | "md";
  estado?: "default" | "hover" | "active" | "disabled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Floatings: React.FC<FloatingsProps>;
export default Floatings;
