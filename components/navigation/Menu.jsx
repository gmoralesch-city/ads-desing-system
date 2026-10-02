import React from 'react';

/**
 * Menu — vertical navigation list (Figma "1Menus" / "Submenus"). Item rows with
 * optional icon; active item gets a cyan left bar + wash; used in sidebars.
 */
export function Menu({ items = [], value, onChange, style = {} }) {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, ...style }}>
      {items.map((it, i) => {
        const key = it.value ?? i;
        const active = value === key;
        return (
          <button key={key} onClick={() => onChange && onChange(key)} style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
            padding: '11px 16px', border: 'none', cursor: 'pointer', position: 'relative',
            borderRadius: 'var(--radius-sm)',
            background: active ? 'var(--color-brand-wash)' : 'transparent',
            color: active ? 'var(--color-brand-dark)' : 'var(--text-body)',
            fontFamily: 'var(--font-brand)', fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)', fontSize: 15,
            transition: 'var(--transition-action)',
          }}
            onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--neutral-100)'; }}
            onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
            {active && <span style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, borderRadius: 3, background: 'var(--color-brand)' }} />}
            {it.icon && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{it.icon}</span>}
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.badge != null && <span style={{ fontSize: 12, fontWeight: 'var(--fw-bold)', color: 'var(--color-brand)' }}>{it.badge}</span>}
          </button>
        );
      })}
    </nav>
  );
}

export default Menu;
