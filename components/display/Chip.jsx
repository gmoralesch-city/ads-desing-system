import React from 'react';

/**
 * Chip — compact, optionally-selectable pill (Figma "Chips").
 * Used for filters, categories, and selectable options. Cyan when selected.
 */
export function Chip({
  children, selected = false, onClick, iconLeft, onRemove, disabled = false, style = {},
}) {
  const interactive = !!onClick && !disabled;
  const [hover, setHover] = React.useState(false);
  const bg = selected ? 'var(--color-brand)' : hover && interactive ? 'var(--color-brand-wash)' : 'var(--white)';
  const fg = selected ? '#fff' : 'var(--text-strong)';
  const bd = selected ? 'var(--color-brand)' : 'var(--border-default)';
  return (
    <span
      onClick={interactive ? onClick : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '6px 14px', borderRadius: 'var(--radius-pill)',
        border: `1.5px solid ${bd}`, background: bg, color: fg,
        fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 14,
        cursor: interactive ? 'pointer' : 'default', opacity: disabled ? 0.5 : 1,
        transition: 'var(--transition-action)', userSelect: 'none', ...style,
      }}>
      {iconLeft}
      {children}
      {onRemove && <button onClick={e => { e.stopPropagation(); onRemove(); }} aria-label="Quitar" style={{ border: 'none', background: 'transparent', color: 'inherit', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: 0, marginLeft: 2 }}>×</button>}
    </span>
  );
}

export default Chip;
