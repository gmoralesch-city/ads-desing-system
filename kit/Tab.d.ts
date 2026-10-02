import * as React from 'react';
export interface TabProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active" | "disabled";
}
export declare const Tab: React.FC<TabProps>;
export default Tab;
