import React from 'react';

/**
 * Tag — square-cornered status label (Figma "Tags").
 * Flatter than Badge; used in tables and cards for states/categories.
 */
export function Tag({ children, tone = 'neutral', iconLeft, style = {} }) {
  const map = {
    neutral: { fg: 'var(--neutral-700)', bg: 'var(--neutral-100)' },
    brand:   { fg: 'var(--cyan-700)',    bg: 'var(--cyan-100)' },
    success: { fg: 'var(--green-500)',   bg: 'var(--green-100)' },
    warning: { fg: 'var(--gold-500)',    bg: 'var(--gold-100)' },
    danger:  { fg: 'var(--red-500)',     bg: 'var(--red-100)' },
    admin:   { fg: 'var(--admin-green)', bg: 'var(--admin-green-bg)' },
  };
  const c = map[tone] || map.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '2px 8px', borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 12,
      lineHeight: 1.5, color: c.fg, background: c.bg, ...style,
    }}>
      {iconLeft}{children}
    </span>
  );
}

export default Tag;
