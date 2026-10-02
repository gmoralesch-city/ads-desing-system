import React from 'react';

/**
 * Breadcrumb — path navigation (Figma "Breadcrumb"). Muted links, cyan hover,
 * navy current page, chevron separators.
 */
export function Breadcrumb({ items = [], style = {} }) {
  return (
    <nav aria-label="Ruta" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6, fontFamily: 'var(--font-brand)', fontSize: 14, ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last
              ? <span aria-current="page" style={{ color: 'var(--text-strong)', fontWeight: 'var(--fw-medium)' }}>{it.label}</span>
              : <a href={it.href || '#'} onClick={it.onClick} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--color-brand-dark)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>{it.label}</a>}
            {!last && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--border-strong)" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;
