import * as React from 'react';

export interface SnackbarProps {
  /** Figma "Mensaje" axis: Informativo | Advertencia | Exitoso | Fallido. */
  tone?: 'info' | 'warning' | 'success' | 'danger';
  children?: React.ReactNode;
  /** Overrides the tone's 24px glyph. Pass `null` to hide it. */
  icon?: React.ReactNode | null;
  /** Show the 20px white circular close button and handle dismissal. */
  onClose?: () => void;
  style?: React.CSSProperties;
}

/**
 * Transient toast (Figma "Feedback › Snack bars"): 350×70 tone-tinted card,
 * 4px left status bar, soft navy shadow, tone glyph and circular close.
 */
export function Snackbar(props: SnackbarProps): JSX.Element;
export default Snackbar;
