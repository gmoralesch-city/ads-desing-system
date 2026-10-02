import React from 'react';
import { Icon } from '../display/Icon.jsx';

const TONES = {
  info:    { light: 'var(--feedback-info-light)',    base: 'var(--feedback-info-base)',    dark: 'var(--feedback-info-dark)',    glyph: 'InformativoCircleInformation' },
  warning: { light: 'var(--feedback-warning-light)', base: 'var(--feedback-warning-base)', dark: 'var(--feedback-warning-dark)', glyph: 'InformativoWarning' },
  success: { light: 'var(--feedback-success-light)', base: 'var(--feedback-success-base)', dark: 'var(--feedback-success-dark)', glyph: 'FuncionesCheck' },
  danger:  { light: 'var(--feedback-danger-light)',  base: 'var(--feedback-danger-base)',  dark: 'var(--feedback-danger-dark)',  glyph: 'FuncionesClose' },
};

/**
 * Snackbar — transient toast, Figma "Feedback › Snack bars".
 * 350×70 tone-tinted card, 4px radius, box shadow, a 4px solid status bar down
 * the left edge, a 24px tone glyph, Body copy in the tone dark color and a
 * 20px white circular close button.
 */
export function Snackbar({
  tone = 'info',
  children,
  icon,
  onClose,
  style = {},
}) {
  const c = TONES[tone] || TONES.info;
  const glyph = icon === undefined
    ? <Icon name={c.glyph} size={24} color={c.base} />
    : icon;
  return (
    <div role="status" style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24,
      padding: '0 24px 0 0', boxSizing: 'border-box',
      width: 'var(--feedback-w)', maxWidth: '100%', minHeight: 'var(--feedback-h)',
      background: c.light, borderRadius: 'var(--feedback-radius)',
      boxShadow: 'var(--shadow-snackbar)', overflow: 'hidden',
      fontFamily: 'var(--font-brand)', ...style,
    }}>
      <span style={{ width: 'var(--feedback-bar)', alignSelf: 'stretch', background: c.base, flexShrink: 0 }} />
      {glyph && <span style={{ display: 'inline-flex', flexShrink: 0, marginLeft: 20 }}>{glyph}</span>}
      <span style={{
        flex: 1, minWidth: 0, padding: '16px 0',
        fontSize: 16, lineHeight: '19px', fontWeight: 'var(--fw-medium)', color: c.dark,
      }}>{children}</span>
      {onClose && (
        <button onClick={onClose} aria-label="Cerrar" style={{
          width: 20, height: 20, flexShrink: 0, padding: 0, cursor: 'pointer',
          border: 'none', borderRadius: '50%', background: 'var(--white)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        }}><Icon name="FuncionesClose" size={12} color="var(--neutral-400)" /></button>
      )}
    </div>
  );
}

export default Snackbar;
