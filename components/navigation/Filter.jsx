import React from 'react';

/**
 * Filter — collapsible filter panel (Figma "Filtros"). Header toggles an open
 * body of chip/checkbox groups; cyan "Aplicar" affordance in consumers.
 */
export function Filter({ title = 'Filtros', defaultOpen = true, count, onClear, children, style = {} }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', fontFamily: 'var(--font-brand)', overflow: 'hidden', ...style }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        padding: '14px 18px', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left',
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 'var(--fw-bold)', fontSize: 15, color: 'var(--text-strong)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          {title}
          {count != null && count > 0 && <span style={{ fontSize: 12, fontWeight: 'var(--fw-bold)', color: '#fff', background: 'var(--color-brand)', borderRadius: 999, padding: '1px 8px' }}>{count}</span>}
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-action) var(--ease-standard)' }}><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {open && (
        <div style={{ padding: '4px 18px 18px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {children}
          {onClear && <button onClick={onClear} style={{ alignSelf: 'flex-start', border: 'none', background: 'transparent', color: 'var(--text-link)', cursor: 'pointer', fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 14, padding: 0, textDecoration: 'underline', textUnderlineOffset: 3 }}>Limpiar filtros</button>}
        </div>
      )}
    </div>
  );
}

export default Filter;
