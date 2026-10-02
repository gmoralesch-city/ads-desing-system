import * as React from 'react';
export interface PointProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active" | "disabled";
}
export declare const Point: React.FC<PointProps>;
export default Point;
