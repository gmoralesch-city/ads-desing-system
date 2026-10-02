import * as React from 'react';
export interface ControlsProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active" | "disabled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Controls: React.FC<ControlsProps>;
export default Controls;
