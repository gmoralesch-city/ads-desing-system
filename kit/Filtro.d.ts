import * as React from 'react';
export interface FiltroProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Tipo de filtro". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Filtro: React.FC<FiltroProps>;
export default Filtro;
