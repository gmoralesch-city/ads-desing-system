import * as React from 'react';
export interface SubmenuProps {
  className?: string;
  style?: React.CSSProperties;
  icono?: boolean;
  imagen?: React.ReactNode;
  /** Text content; defaults to "Cultura de seguros". */
  text1?: string;
}
export declare const Submenu: React.FC<SubmenuProps>;
export default Submenu;
