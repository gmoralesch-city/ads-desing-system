import * as React from 'react';
export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: React.ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  options?: (string | SelectOption)[];
  placeholder?: string;
  helper?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
/** Underline dropdown select (Figma "Selects"). */
export function Select(props: SelectProps): JSX.Element;
export default Select;
