import React from 'react';

/**
 * Banner — full-width promotional / notification band (Figma "Banner").
 * Cyan or navy brand band with a headline, optional body and a CTA slot.
 */
export function Banner({ tone = 'brand', title, children, action, icon, style = {} }) {
  const tones = {
    brand: { bg: 'var(--surface-brand)', fg: '#fff', sub: 'rgba(255,255,255,0.9)' },
    navy:  { bg: 'var(--surface-navy)',  fg: '#fff', sub: 'rgba(255,255,255,0.82)' },
    teal:  { bg: 'var(--surface-teal)',  fg: 'var(--text-strong)', sub: 'var(--text-body)' },
  };
  const c = tones[tone] || tones.brand;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
      background: c.bg, color: c.fg, borderRadius: 'var(--radius-lg)',
      padding: '24px 28px', fontFamily: 'var(--font-brand)', ...style,
    }}>
      {icon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{icon}</span>}
      <div style={{ flex: 1, minWidth: 200 }}>
        {title && <div style={{ fontWeight: 'var(--fw-bold)', fontSize: 20, lineHeight: 1.2 }}>{title}</div>}
        {children && <div style={{ fontSize: 15, color: c.sub, marginTop: 4, lineHeight: 1.5 }}>{children}</div>}
      </div>
      {action && <div style={{ flexShrink: 0 }}>{action}</div>}
    </div>
  );
}

export default Banner;
