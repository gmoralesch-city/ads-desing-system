import * as React from 'react';
export interface ImagotipoSurUpProps {
  className?: string;
  style?: React.CSSProperties;
  fondo?: "claro" | "obscuro";
  marca?: "isotipo" | "completa" | "variante";
}
export declare const ImagotipoSurUp: React.FC<ImagotipoSurUpProps>;
export default ImagotipoSurUp;
