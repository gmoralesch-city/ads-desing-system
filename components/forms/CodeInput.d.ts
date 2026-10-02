import * as React from 'react';
export interface CodeInputProps {
  length?: number;
  value?: string;
  onChange?: (code: string) => void;
  error?: boolean;
  /** lg = 65×80 boxes (default, Figma), sm = 52×64 */
  size?: 'lg' | 'sm';
  style?: React.CSSProperties;
}
/** Boxed one-time-code entry (Figma "Codes"). */
export function CodeInput(props: CodeInputProps): JSX.Element;
export default CodeInput;
