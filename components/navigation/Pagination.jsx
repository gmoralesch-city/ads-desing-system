import React from 'react';

/**
 * Pagination — page navigation (Figma "Página"). Round page buttons, cyan
 * for the active page, chevron prev/next.
 */
export function Pagination({ page = 1, pageCount = 1, onChange, style = {} }) {
  const go = p => { if (p >= 1 && p <= pageCount && p !== page) onChange && onChange(p); };
  const pages = [];
  const add = p => pages.push(p);
  add(1);
  const from = Math.max(2, page - 1), to = Math.min(pageCount - 1, page + 1);
  if (from > 2) pages.push('…');
  for (let p = from; p <= to; p++) add(p);
  if (to < pageCount - 1) pages.push('…');
  if (pageCount > 1) add(pageCount);

  const btn = (active) => ({
    minWidth: 36, height: 36, padding: '0 8px', borderRadius: 'var(--radius-pill)',
    border: `1.5px solid ${active ? 'var(--color-brand)' : 'transparent'}`,
    background: active ? 'var(--color-brand)' : 'transparent',
    color: active ? '#fff' : 'var(--text-body)',
    fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 14,
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    transition: 'var(--transition-action)',
  });
  const arrow = enabled => ({ ...btn(false), color: enabled ? 'var(--text-strong)' : 'var(--neutral-300)', cursor: enabled ? 'pointer' : 'not-allowed' });

  return (
    <nav aria-label="Paginación" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, ...style }}>
      <button style={arrow(page > 1)} onClick={() => go(page - 1)} aria-label="Anterior"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg></button>
      {pages.map((p, i) => p === '…'
        ? <span key={i} style={{ color: 'var(--text-muted)', padding: '0 4px' }}>…</span>
        : <button key={i} style={btn(p === page)} onClick={() => go(p)} aria-current={p === page ? 'page' : undefined}>{p}</button>)}
      <button style={arrow(page < pageCount)} onClick={() => go(page + 1)} aria-label="Siguiente"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></button>
    </nav>
  );
}

export default Pagination;
