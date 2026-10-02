import * as React from 'react';
export interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler;
  iconRight?: React.ReactNode;
  muted?: boolean;
  style?: React.CSSProperties;
}
/** Text link (Figma "Links"). */
export function Link(props: LinkProps): JSX.Element;
export default Link;
