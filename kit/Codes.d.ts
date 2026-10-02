import * as React from 'react';
export interface CodesProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "focus" | "fill" | "fail";
}
export declare const Codes: React.FC<CodesProps>;
export default Codes;
