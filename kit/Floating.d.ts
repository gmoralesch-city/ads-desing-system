import * as React from 'react';
export interface FloatingProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Floating: React.FC<FloatingProps>;
export default Floating;
