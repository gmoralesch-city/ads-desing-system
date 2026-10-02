import * as React from 'react';

export interface TooltipProps {
  /** Figma "Titulo" axis — omit for Titulo=Off. Body Bold 16/19. */
  title?: React.ReactNode;
  /** The description line. Body 16/19. */
  label?: React.ReactNode;
  /** Figma "Flecha" axis: which edge of the panel carries the 8×4 arrow. */
  arrow?: 'arriba' | 'abajo' | 'izquierda' | 'derecha';
  /** Force visibility (specimen cards); omit for hover/focus behaviour. */
  open?: boolean;
  /** The trigger element. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Hover/focus tooltip (Figma "Feedback › Tooltips"): navy #002C8D panel, 112px
 * wide, 4px radius, optional bold title, 8×4 arrow on any of four edges.
 */
export function Tooltip(props: TooltipProps): JSX.Element;
export default Tooltip;
