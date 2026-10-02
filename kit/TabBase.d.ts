import * as React from 'react';
export interface TabBaseProps {
  className?: string;
  style?: React.CSSProperties;
  icono?: boolean;
  /** Text content; defaults to "Tab 1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TabBase: React.FC<TabBaseProps>;
export default TabBase;
