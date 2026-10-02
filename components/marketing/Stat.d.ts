import * as React from 'react';
export interface StatProps {
  value: React.ReactNode;
  label: React.ReactNode;
  align?: 'center' | 'left';
  color?: string;
  style?: React.CSSProperties;
}
/** Headline metric (Figma "Data" / "Valores"). */
export function Stat(props: StatProps): JSX.Element;
export default Stat;
