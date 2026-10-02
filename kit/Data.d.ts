import * as React from 'react';
export interface DataProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "card" | "torres" | "pastel" | "diagrama";
  /** Text content; defaults to "Análisis". */
  text1?: string;
  /** Text content; defaults to "Este mes". */
  text2?: string;
  /** Text content; defaults to "Anterior mes". */
  text3?: string;
  /** Text content; defaults to "20k". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Data: React.FC<DataProps>;
export default Data;
