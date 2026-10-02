import * as React from 'react';

export interface LoaderProps {
  size?: number;
  variant?: 'spinner' | 'dots';
  color?: string;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Brand loading indicator (Figma "Cargando"). */
export function Loader(props: LoaderProps): JSX.Element;
export default Loader;
