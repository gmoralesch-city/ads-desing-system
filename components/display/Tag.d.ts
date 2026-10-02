import * as React from 'react';
export interface TagProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'admin';
  iconLeft?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Square-cornered status label (Figma "Tags"). */
export function Tag(props: TagProps): JSX.Element;
export default Tag;
