import * as React from 'react';
export interface ButtonsProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "principal" | "secuendario";
  tamaO?: "md" | "lg";
  icono?: "off" | "on";
  estado?: "default" | "hover" | "active" | "disabled";
}
export declare const Buttons: React.FC<ButtonsProps>;
export default Buttons;
