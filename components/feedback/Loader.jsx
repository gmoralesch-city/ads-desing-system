import React from 'react';

/**
 * Loader — brand spinner (Figma "Cargando"). Cyan ring, 240ms linear spin.
 * Also supports an inline three-dot pulse variant.
 */
export function Loader({
  size = 32,
  variant = 'spinner',    // 'spinner' | 'dots'
  color = 'var(--color-brand)',
  label,
  style = {},
}) {
  const kf = 'ads-spin';
  if (variant === 'dots') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, ...style }} role="status" aria-label={label || 'Cargando'}>
        <style>{`@keyframes ads-pulse{0%,80%,100%{opacity:.25}40%{opacity:1}}`}</style>
        {[0, 1, 2].map(i => (
          <span key={i} style={{ width: size / 4, height: size / 4, borderRadius: '50%', background: color, animation: `ads-pulse 1.2s ${i * 0.16}s infinite ease-in-out` }} />
        ))}
      </span>
    );
  }
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 8, ...style }} role="status" aria-label={label || 'Cargando'}>
      <style>{`@keyframes ${kf}{to{transform:rotate(360deg)}}`}</style>
      <span style={{
        width: size, height: size, borderRadius: '50%',
        border: `${Math.max(2, size / 12)}px solid var(--neutral-200)`,
        borderTopColor: color,
        animation: `${kf} 0.72s linear infinite`,
      }} />
      {label && <span style={{ fontFamily: 'var(--font-brand)', fontSize: 13, color: 'var(--text-muted)' }}>{label}</span>}
    </span>
  );
}

export default Loader;
