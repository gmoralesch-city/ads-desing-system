import React from 'react';

/**
 * Insignia — labelled ribbon/badge emblem (Figma "Insignia"). A pill or
 * ribbon with a leading mark; used for certifications and highlights.
 */
export function Insignia({ children, icon, tone = 'brand', variant = 'ribbon', style = {} }) {
  const tones = {
    brand: { bg: 'var(--color-brand)', fg: '#fff' },
    navy:  { bg: 'var(--surface-navy)', fg: 'var(--color-brand)' },
    oro:   { bg: 'var(--tier-oro)', fg: '#fff' },
    teal:  { bg: 'var(--teal-500)', fg: '#fff' },
  };
  const c = tones[tone] || tones.brand;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '8px 16px 8px 12px',
      background: c.bg, color: c.fg,
      borderRadius: variant === 'ribbon' ? '4px 999px 999px 4px' : 'var(--radius-pill)',
      fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-bold)', fontSize: 13,
      boxShadow: 'var(--shadow-sm)', ...style,
    }}>
      <span style={{ display: 'inline-flex', flexShrink: 0 }}>
        {icon || <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1"/></svg>}
      </span>
      {children}
    </span>
  );
}

export default Insignia;
