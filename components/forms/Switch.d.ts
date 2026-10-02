import * as React from 'react';
/** Switch — pill toggle, cyan track + sliding knob when on. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Switch(props: SwitchProps): JSX.Element;
export default Switch;
