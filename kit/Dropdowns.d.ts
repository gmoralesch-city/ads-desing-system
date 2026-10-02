import * as React from 'react';
export interface DropdownsProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active";
}
export declare const Dropdowns: React.FC<DropdownsProps>;
export default Dropdowns;
