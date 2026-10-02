import * as React from 'react';
export interface PestaAProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "active" | "defaud" | "hover";
  /** Text content; defaults to "Protones". */
  text1?: string;
}
export declare const PestaA: React.FC<PestaAProps>;
export default PestaA;
