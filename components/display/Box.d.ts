import * as React from 'react';
export interface BoxProps {
  title?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  padded?: boolean;
  style?: React.CSSProperties;
}
/** Neutral bordered surface container (Figma "Box" / "Boxes"). */
export function Box(props: BoxProps): JSX.Element;
export default Box;
