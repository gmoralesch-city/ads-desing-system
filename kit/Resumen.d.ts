import * as React from 'react';
export interface ResumenProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "información" | "proceso";
  /** Text content; defaults to "Estado". */
  text1?: string;
  /** Text content; defaults to "Sub-estado". */
  text2?: string;
  /** Text content; defaults to "Vigente". */
  text3?: string;
  /** Text content; defaults to "Exitoso". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Resumen: React.FC<ResumenProps>;
export default Resumen;
