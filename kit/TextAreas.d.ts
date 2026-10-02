import * as React from 'react';
export interface TextAreasProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  estado?: "default" | "focus" | "fill" | "fail" | "disabled empty" | "disabled fill";
  placeholder?: string;
  help?: string;
  /** Text content; defaults to "l". */
  text1?: string;
}
export declare const TextAreas: React.FC<TextAreasProps>;
export default TextAreas;
