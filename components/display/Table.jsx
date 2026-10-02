import React from 'react';

/**
 * Table — data table (Figma "Data" / "Columna"). Light-blue header wash,
 * row hover, right-aligned numeric columns. Columns: {key,label,align,render}.
 */
export function Table({ columns = [], rows = [], keyField, onRowClick, style = {} }) {
  return (
    <div style={{ overflowX: 'auto', background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-brand)' }}>
        <thead>
          <tr style={{ background: 'var(--table-row-hover)' }}>
            {columns.map((c, i) => (
              <th key={i} style={{ textAlign: c.align || 'left', padding: '12px 16px', fontSize: 12, fontWeight: 'var(--fw-bold)', textTransform: 'uppercase', letterSpacing: '.03em', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={keyField ? r[keyField] : ri}
              onClick={onRowClick ? () => onRowClick(r) : undefined}
              style={{ borderTop: '1px solid var(--border-subtle)', cursor: onRowClick ? 'pointer' : 'default', transition: 'var(--transition-action)' }}
              onMouseEnter={e => { if (onRowClick) e.currentTarget.style.background = 'var(--table-row-hover)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
              {columns.map((c, ci) => (
                <td key={ci} style={{ textAlign: c.align || 'left', padding: '13px 16px', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)' }}>
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
