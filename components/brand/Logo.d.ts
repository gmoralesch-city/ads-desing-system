import * as React from 'react';
export interface LogoProps {
  brand?: 'ads' | 'surone';
  /** 'light' inverts for dark/navy backgrounds. */
  color?: 'auto' | 'light';
  size?: number;
  /** Optional path to a real logo asset (assets/logos/*). */
  src?: string;
  style?: React.CSSProperties;
}
/** Brand wordmark (Figma "Imagotipo"). */
export function Logo(props: LogoProps): JSX.Element;
export default Logo;
