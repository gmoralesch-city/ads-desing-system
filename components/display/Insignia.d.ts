import * as React from 'react';
export interface InsigniaProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  tone?: 'brand' | 'navy' | 'oro' | 'teal';
  variant?: 'ribbon' | 'pill';
  style?: React.CSSProperties;
}
/** Labelled ribbon/badge emblem for certifications (Figma "Insignia"). */
export function Insignia(props: InsigniaProps): JSX.Element;
export default Insignia;
