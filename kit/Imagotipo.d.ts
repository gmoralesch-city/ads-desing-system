import * as React from 'react';
export interface ImagotipoProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "b&n" | "full";
  tipo?: "principal" | "variante";
}
export declare const Imagotipo: React.FC<ImagotipoProps>;
export default Imagotipo;
