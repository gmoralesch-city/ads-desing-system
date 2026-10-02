import * as React from 'react';
export interface AccessProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  cta?: React.ReactNode;
  onSubmit?: () => void;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
/**
 * Login / access card, the ADS "Ingresar" pattern (Figma "Access").
 */
export function Access(props: AccessProps): JSX.Element;
export default Access;
