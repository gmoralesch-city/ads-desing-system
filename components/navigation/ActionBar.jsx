import React from 'react';

/**
 * ActionBar — trailing row of actions (Figma "Acciones"). Groups small
 * icon/label actions with consistent spacing; used in table rows & toolbars.
 */
export function ActionBar({ actions = [], align = 'flex-end', style = {} }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, justifyContent: align, ...style }}>
      {actions.map((a, i) => (
        <button key={i} onClick={a.onClick} title={a.label} aria-label={a.label} disabled={a.disabled} style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: a.label && !a.iconOnly ? '7px 12px' : 8,
          border: 'none', borderRadius: 'var(--radius-sm)', background: 'transparent',
          cursor: a.disabled ? 'not-allowed' : 'pointer', opacity: a.disabled ? 0.4 : 1,
          color: a.danger ? 'var(--color-danger)' : 'var(--color-brand-dark)',
          fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 14,
          transition: 'var(--transition-action)',
        }}
          onMouseEnter={e => { if (!a.disabled) e.currentTarget.style.background = a.danger ? 'var(--red-100)' : 'var(--color-brand-wash)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
          {a.icon}
          {a.label && !a.iconOnly && <span>{a.label}</span>}
        </button>
      ))}
    </div>
  );
}

export default ActionBar;
