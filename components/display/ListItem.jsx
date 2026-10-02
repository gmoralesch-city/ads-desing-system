import React from 'react';

/**
 * ListItem — list row (Figma "Items"). Optional leading icon/avatar slot,
 * title + subtitle, trailing meta/chevron. White row with hover wash.
 */
export function ListItem({ leading, title, subtitle, trailing, onClick, divider = true, style = {} }) {
  const interactive = !!onClick;
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '14px 4px',
      borderBottom: divider ? '1px solid var(--border-subtle)' : 'none',
      cursor: interactive ? 'pointer' : 'default', fontFamily: 'var(--font-brand)',
      transition: 'var(--transition-action)', borderRadius: 8, ...style,
    }}
      onMouseEnter={e => { if (interactive) e.currentTarget.style.background = 'var(--surface-subtle)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
      {leading && <span style={{ display: 'inline-flex', flexShrink: 0 }}>{leading}</span>}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 'var(--fw-medium)', fontSize: 15, color: 'var(--text-strong)' }}>{title}</div>
        {subtitle && <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{subtitle}</div>}
      </div>
      {trailing && <span style={{ display: 'inline-flex', flexShrink: 0, color: 'var(--text-muted)', fontSize: 14 }}>{trailing}</span>}
    </div>
  );
}

export default ListItem;
