import * as React from 'react';
export interface LogsProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active";
}
export declare const Logs: React.FC<LogsProps>;
export default Logs;
