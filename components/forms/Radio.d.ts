import * as React from 'react';
/** Radio — circular selector, cyan ring + dot when on. */
export interface RadioProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  name?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
export default Radio;
