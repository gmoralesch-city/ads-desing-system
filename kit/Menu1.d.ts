import * as React from 'react';
export interface Menu1Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Comisiones". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Menu1: React.FC<Menu1Props>;
export default Menu1;
