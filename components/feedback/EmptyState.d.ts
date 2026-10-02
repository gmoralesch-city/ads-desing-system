import * as React from 'react';
export interface EmptyStateProps {
  /** Illustration / icon slot; defaults to a document glyph on a cyan blob. */
  illustration?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
/** Empty / confirmation state (Figma "Estados"). */
export function EmptyState(props: EmptyStateProps): JSX.Element;
export default EmptyState;
