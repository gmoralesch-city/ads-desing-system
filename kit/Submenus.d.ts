import * as React from 'react';
export interface SubmenusProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active" | "focus" | "disabled";
}
export declare const Submenus: React.FC<SubmenusProps>;
export default Submenus;
