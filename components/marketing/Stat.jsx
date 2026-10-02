import React from 'react';

/**
 * Stat — headline metric (Figma "Data" / "Valores"). Big light-weight number
 * with a caption; used in trust strips ("+30 años", "500k asegurados").
 */
export function Stat({ value, label, align = 'center', color = 'var(--color-brand-dark)', style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start', fontFamily: 'var(--font-brand)', ...style }}>
      <span style={{ fontWeight: 'var(--fw-light)', fontSize: 48, lineHeight: 1, color }}>{value}</span>
      <span style={{ fontWeight: 'var(--fw-medium)', fontSize: 15, color: 'var(--text-muted)' }}>{label}</span>
    </div>
  );
}

export default Stat;
