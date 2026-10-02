import * as React from 'react';
export interface ImagotipoADSProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "b&n" | "full";
  tipo?: "principal" | "variante";
}
export declare const ImagotipoADS: React.FC<ImagotipoADSProps>;
export default ImagotipoADS;
