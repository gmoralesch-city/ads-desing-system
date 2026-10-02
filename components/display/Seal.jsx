import React from 'react';

/**
 * Seal — trust/quality seal (Figma "Sellos" / "Insignia"). Circular emblem
 * with a bold value and caption; tiered accent for Bronce/Plata/Oro.
 */
export function Seal({ value, caption, tier = 'oro', size = 96, style = {} }) {
  const map = {
    bronce: 'var(--tier-bronce)',
    plata:  'var(--tier-plata)',
    oro:    'var(--tier-oro)',
    brand:  'var(--color-brand)',
  };
  const color = map[tier] || map.oro;
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%',
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2,
      border: `3px solid ${color}`, color,
      background: '#fff', boxShadow: 'var(--shadow-sm)', textAlign: 'center', ...style,
    }}>
      <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-black)', fontSize: size * 0.26, lineHeight: 1 }}>{value}</span>
      {caption && <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: size * 0.11, textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--text-muted)' }}>{caption}</span>}
    </span>
  );
}

export default Seal;
