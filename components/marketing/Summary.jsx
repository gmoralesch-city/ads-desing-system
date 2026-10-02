import React from 'react';

/**
 * Summary — key/value summary panel (Figma "Resumen"). Rows of label/value with
 * a highlighted total; used in checkout, quotes and policy summaries.
 */
export function Summary({ title, rows = [], total, style = {} }) {
  return (
    <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', padding: 20, fontFamily: 'var(--font-brand)', ...style }}>
      {title && <div style={{ fontWeight: 'var(--fw-bold)', fontSize: 16, color: 'var(--text-strong)', marginBottom: 14 }}>{title}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>{r.label}</span>
            <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 14, color: 'var(--text-strong)', textAlign: 'right' }}>{r.value}</span>
          </div>
        ))}
      </div>
      {total && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border-subtle)' }}>
          <span style={{ fontWeight: 'var(--fw-bold)', fontSize: 15, color: 'var(--text-strong)' }}>{total.label || 'Total'}</span>
          <span style={{ fontWeight: 'var(--fw-black)', fontSize: 24, color: 'var(--color-brand-dark)' }}>{total.value}</span>
        </div>
      )}
    </div>
  );
}

export default Summary;
