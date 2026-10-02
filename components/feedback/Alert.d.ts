import * as React from 'react';

export interface AlertProps {
  /** Figma "Mensaje" axis: Informativo | Advertencia | Exitoso | Fallido. */
  tone?: 'info' | 'warning' | 'success' | 'danger';
  /** The message. Body 16/19 in the tone's dark color. */
  children?: React.ReactNode;
  /** Overrides the tone's 24px circle glyph. Pass `null` to hide it. */
  icon?: React.ReactNode | null;
  /** Outline cyan button on the right; its presence grows the row to 64px. */
  action?: { label: string; onClick?: () => void };
  /** Underlined cyan link on the right. */
  link?: { label: string; href?: string; onClick?: () => void };
  /** Show the 24px close glyph and handle dismissal. */
  onClose?: () => void;
  style?: React.CSSProperties;
}

/**
 * Inline alert banner (Figma "Feedback › Alerts"): white card, tone-tinted
 * 1–2px border, 4px radius, 24px circle glyph, optional button / link / close.
 */
export function Alert(props: AlertProps): JSX.Element;
export default Alert;
