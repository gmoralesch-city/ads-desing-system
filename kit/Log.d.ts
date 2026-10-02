import * as React from 'react';
export interface LogProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Victor". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const Log: React.FC<LogProps>;
export default Log;
