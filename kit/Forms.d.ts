import * as React from 'react';
export interface FormsProps {
  className?: string;
  style?: React.CSSProperties;
  tipo?: "consulta" | "datos" | "factura" | "login" | "otp" | "pago" | "perfil" | "siniestro" | "contraseña";
  /** Text content; defaults to "Mínimo 1 número". */
  text1?: string;
  /** Text content; defaults to "Mínimo 1 mayúscula". */
  text2?: string;
  /** Text content; defaults to "Mínimo 1 símbolo". */
  text3?: string;
  /** Text content; defaults to "Mínimo 8 carácteres". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}
export declare const Forms: React.FC<FormsProps>;
export default Forms;
