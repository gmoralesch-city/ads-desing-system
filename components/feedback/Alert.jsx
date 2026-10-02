import React from 'react';
import { Icon } from '../display/Icon.jsx';

const TONES = {
  info:    { light: 'var(--feedback-info-light)',    base: 'var(--feedback-info-base)',    dark: 'var(--feedback-info-dark)',    bw: 'var(--feedback-border-info)',    glyph: 'InformativoCircleInformation' },
  warning: { light: 'var(--feedback-warning-light)', base: 'var(--feedback-warning-base)', dark: 'var(--feedback-warning-dark)', bw: 'var(--feedback-border-warning)', glyph: 'InformativoCircleWarning' },
  success: { light: 'var(--feedback-success-light)', base: 'var(--feedback-success-base)', dark: 'var(--feedback-success-dark)', bw: 'var(--feedback-border-success)', glyph: 'InformativoCircleCheck' },
  danger:  { light: 'var(--feedback-danger-light)',  base: 'var(--feedback-danger-base)',  dark: 'var(--feedback-danger-dark)',  bw: 'var(--feedback-border-danger)',  glyph: 'InformativoCircleError' },
};

/**
 * Alert — inline banner, Figma "Feedback › Alerts".
 * White card with a tone-tinted border (NOT a tinted fill — that is Snackbar),
 * 4px radius, 12px 20px padding, 24px gap, 24px circle glyph in the tone base
 * color and Body copy in the tone dark color. Button / link / close are all
 * hidden in the default variant and opt-in via props.
 */
export function Alert({
  tone = 'info',
  children,
  icon,
  action,     // { label, onClick } -> outline button (grows the row to 64px)
  link,       // { label, href, onClick } -> underlined cyan link
  onClose,
  style = {},
}) {
  const c = TONES[tone] || TONES.info;
  const glyph = icon === undefined
    ? <Icon name={c.glyph} size={24} color={c.base} />
    : icon;
  return (
    <div role="alert" style={{
      display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24,
      padding: '12px 20px', boxSizing: 'border-box',
      minHeight: action ? 'var(--feedback-alert-h-btn)' : 'var(--feedback-alert-h)',
      background: 'var(--white)',
      border: `${c.bw} solid ${c.light}`,
      borderRadius: 'var(--feedback-radius)',
      fontFamily: 'var(--font-brand)', ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, flex: 1, minWidth: 0 }}>
        {glyph && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{glyph}</span>}
        <span style={{
          fontSize: 16, lineHeight: '19px', fontWeight: 'var(--fw-medium)', color: c.dark,
        }}>{children}</span>
      </div>
      {action && (
        <button onClick={action.onClick} style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          padding: '8px 20px', height: 40, flexShrink: 0, cursor: 'pointer',
          background: 'var(--white)', border: '1px solid var(--cyan-500)', borderRadius: 8,
          fontFamily: 'var(--font-brand)', fontSize: 16, lineHeight: '19px',
          fontWeight: 'var(--fw-medium)', color: 'var(--cyan-500)', textAlign: 'center',
        }}>{action.label}</button>
      )}
      {link && (
        <a href={link.href || '#'} onClick={link.onClick} style={{
          flexShrink: 0, fontFamily: 'var(--font-brand)', fontSize: 16, lineHeight: '19px',
          fontWeight: 'var(--fw-medium)', color: 'var(--cyan-500)', textDecoration: 'underline',
        }}>{link.label}</a>
      )}
      {onClose && (
        <button onClick={onClose} aria-label="Cerrar" style={{
          border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
          display: 'inline-flex', flexShrink: 0,
        }}><Icon name="FuncionesClose" size={24} color="var(--neutral-400)" /></button>
      )}
    </div>
  );
}

export default Alert;
