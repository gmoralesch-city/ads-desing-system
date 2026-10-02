import React from 'react';

/**
 * Box — neutral surface container (Figma "Box" / "Boxes"). A quieter card:
 * subtle border, small radius, optional header row. Used for grouped info.
 */
export function Box({ title, action, children, padded = true, style = {} }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
      overflow: 'hidden', fontFamily: 'var(--font-brand)', ...style,
    }}>
      {(title || action) && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '14px 18px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-subtle)' }}>
          {title && <span style={{ fontWeight: 'var(--fw-bold)', fontSize: 15, color: 'var(--text-strong)' }}>{title}</span>}
          {action}
        </div>
      )}
      <div style={{ padding: padded ? 18 : 0 }}>{children}</div>
    </div>
  );
}

export default Box;
