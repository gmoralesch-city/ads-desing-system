import * as React from 'react';
export interface AlertsProps {
  className?: string;
  style?: React.CSSProperties;
  mensaje?: "informativo" | "advertencia" | "exitoso" | "fallido";
}
export declare const Alerts: React.FC<AlertsProps>;
export default Alerts;
