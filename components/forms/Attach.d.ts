import * as React from 'react';
export interface AttachProps {
  label?: React.ReactNode;
  files?: (File | string | { name: string })[];
  onAdd?: (files: File[]) => void;
  onRemove?: (index: number) => void;
  hint?: React.ReactNode;
  style?: React.CSSProperties;
}
/** File attachment trigger + list (Figma "Attach"). */
export function Attach(props: AttachProps): JSX.Element;
export default Attach;
