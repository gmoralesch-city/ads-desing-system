import React from 'react';

/**
 * ServiceIcon — the bespoke "Servicios" brand icon treatment: a thin-line
 * subject centered in a circular cyan (or navy) chip. Figma "Servicios".
 * Pass a Lucide/line icon as `icon`; swap for exported Figma art in production.
 */
export function ServiceIcon({
  icon, size = 64, tone = 'cyan', label, style = {},
}) {
  const map = {
    cyan:  { bg: 'var(--color-brand)',   fg: '#fff' },
    navy:  { bg: 'var(--surface-navy)',  fg: 'var(--color-brand)' },
    wash:  { bg: 'var(--color-brand-wash)', fg: 'var(--color-brand-dark)' },
    teal:  { bg: 'var(--teal-100)',      fg: 'var(--teal-500)' },
  };
  const c = map[tone] || map.cyan;
  const chip = (
    <span style={{
      width: size, height: size, borderRadius: '50%',
      background: c.bg, color: c.fg,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    }}>
      {icon}
    </span>
  );
  if (!label) return <span style={style}>{chip}</span>;
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, ...style }}>
      {chip}
      <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 14, color: 'var(--text-strong)', textAlign: 'center' }}>{label}</span>
    </span>
  );
}

export default ServiceIcon;
