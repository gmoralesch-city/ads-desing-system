import * as React from 'react';
export interface ServiceIconProps {
  /** Thin-line glyph (Lucide recommended) or exported Figma "Servicios" art. */
  icon: React.ReactNode;
  size?: number;
  tone?: 'cyan' | 'navy' | 'wash' | 'teal';
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Circular brand service-icon chip (Figma "Servicios"). */
export function ServiceIcon(props: ServiceIconProps): JSX.Element;
export default ServiceIcon;
