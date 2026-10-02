import * as React from 'react';
export interface SnackBarProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Aquí va el mensaje que se quiere comunicar.". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const SnackBar: React.FC<SnackBarProps>;
export default SnackBar;
