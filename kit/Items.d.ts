import * as React from 'react';
export interface ItemsProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "siniestros" | "usuarios" | "negocios" | "ventas";
  /** Text content; defaults to "marialopez@aps.com". */
  text1?: string;
  /** Text content; defaults to "1723456809". */
  text2?: string;
  /** Text content; defaults to "Maria Sol Lopez Ruiz". */
  text3?: string;
  /** Text content; defaults to "Administrador". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Items: React.FC<ItemsProps>;
export default Items;
