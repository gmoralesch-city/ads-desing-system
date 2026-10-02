import * as React from 'react';
export interface TarjetaProps {
  className?: string;
  style?: React.CSSProperties;
  tamaO?: "grande" | "pequeño";
  imagen?: "frontal" | "posterior";
  /** Text content; defaults to "0(123)346-789". */
  text1?: string;
  /** Text content; defaults to "Valid Worldwide". */
  text2?: string;
  /** Text content; defaults to "123". */
  text3?: string;
  /** Text content; defaults to "Autorised Signature". */
  text4?: string;
}
export declare const Tarjeta: React.FC<TarjetaProps>;
export default Tarjeta;
