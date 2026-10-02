import * as React from 'react';
export interface PGinaProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "active" | "defauld" | "hover";
  /** Text content; defaults to "Tipografía". */
  text1?: string;
}
export declare const PGina: React.FC<PGinaProps>;
export default PGina;
