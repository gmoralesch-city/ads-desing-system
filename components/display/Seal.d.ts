import * as React from 'react';
export interface SealProps {
  value: React.ReactNode;
  caption?: React.ReactNode;
  tier?: 'bronce' | 'plata' | 'oro' | 'brand';
  size?: number;
  style?: React.CSSProperties;
}
/** Circular trust/tier seal (Figma "Sellos" / "Insignia"). */
export function Seal(props: SealProps): JSX.Element;
export default Seal;
