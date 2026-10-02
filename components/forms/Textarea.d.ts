import * as React from 'react';
export interface TextareaProps {
  label?: React.ReactNode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  rows?: number;
  helper?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
  maxLength?: number;
  style?: React.CSSProperties;
}
/** Multi-line boxed field with floating label (Figma "Text areas"): Default, Focus, Fill, Fail, Disabled. */
export function Textarea(props: TextareaProps): JSX.Element;
export default Textarea;
