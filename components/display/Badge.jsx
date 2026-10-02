import React from 'react';

/**
 * Badge — small pill label for statuses, tags, and counts.
 * tone: 'brand' | 'success' | 'warning' | 'danger' | 'teal' | 'neutral'
 * variant: 'soft' (tinted bg) | 'solid' (filled)
 */
export function Badge({ children, tone = 'brand', variant = 'soft', iconLeft, style = {} }) {
  const map = {
    brand:   { fg: 'var(--cyan-700)',   bg: 'var(--cyan-100)',   solid: 'var(--color-brand)' },
    success: { fg: 'var(--green-500)',  bg: 'var(--green-100)',  solid: 'var(--green-500)' },
    warning: { fg: 'var(--gold-500)',   bg: 'var(--gold-100)',   solid: 'var(--gold-500)' },
    danger:  { fg: 'var(--red-500)',    bg: 'var(--red-100)',    solid: 'var(--red-500)' },
    teal:    { fg: 'var(--teal-500)',   bg: 'var(--teal-100)',   solid: 'var(--teal-500)' },
    neutral: { fg: 'var(--neutral-700)',bg: 'var(--neutral-100)',solid: 'var(--neutral-600)' },
  };
  const c = map[tone] || map.brand;
  const solid = variant === 'solid';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)',
      padding: '3px 10px', borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-bold)', fontSize: 'var(--fs-caption)',
      lineHeight: 1.4,
      color: solid ? '#fff' : c.fg,
      background: solid ? c.solid : c.bg,
      ...style,
    }}>
      {iconLeft}
      {children}
    </span>
  );
}

export default Badge;
