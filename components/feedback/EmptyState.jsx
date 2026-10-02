import React from 'react';

/**
 * EmptyState — empty / confirmation state (Figma "Estados"). Centered
 * illustration slot over a light-cyan blob, title, body and optional action.
 */
export function EmptyState({ illustration, title, children, action, style = {} }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16, padding: 32, fontFamily: 'var(--font-brand)', ...style }}>
      <div style={{
        width: 120, height: 120, borderRadius: '50%', background: 'var(--color-brand-wash)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand)',
      }}>
        {illustration || (
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        )}
      </div>
      {title && <div style={{ fontWeight: 'var(--fw-bold)', fontSize: 20, color: 'var(--text-strong)' }}>{title}</div>}
      {children && <div style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: 340 }}>{children}</div>}
      {action && <div style={{ marginTop: 4 }}>{action}</div>}
    </div>
  );
}

export default EmptyState;
