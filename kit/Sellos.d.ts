import * as React from 'react';
export interface SellosProps {
  className?: string;
  style?: React.CSSProperties;
  simbolo?: "datafast" | "pci" | "pago" | "protección";
}
export declare const Sellos: React.FC<SellosProps>;
export default Sellos;
