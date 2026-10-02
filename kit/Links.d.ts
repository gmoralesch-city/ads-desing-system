import * as React from 'react';
export interface LinksProps {
  className?: string;
  style?: React.CSSProperties;
  estado?: "default" | "hover" | "active" | "disabled";
  /** Text content; defaults to "Link". */
  text1?: string;
}
export declare const Links: React.FC<LinksProps>;
export default Links;
