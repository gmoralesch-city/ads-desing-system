// RenovacionesTable — sortable data table of bond renewals + pagination
const ROWS = Array.from({ length: 10 }).map((_, i) => ({
  sucursal: ['Ambato', 'Quito', 'Guayaquil', 'Cuenca'][i % 4],
  aseguradora: 'Cifraseg S.A',
  ramo: 'Cumplimiento de contrato',
  poliza: 1046728 + i * 13,
  nren: (i % 5) + 1,
  inicio: '12/09/2024',
  fin: '12/09/2025',
  asegurado: ['Consorcio Central', 'Empudepro', 'Consorcio Tena', 'Hidroeléctrica Sur'][i % 4],
  monto: ['36.000,00', '76.542,67', '12.300,00', '250.152,14'][i % 4],
  contratista: ['Secretaría Oleoducto', 'Municipio de Ambato', 'Petroecuador EP', 'Consorcio Vial'][i % 4],
}));

const COLS = [
  { key: 'sucursal', label: 'Sucursal' },
  { key: 'aseguradora', label: 'Aseguradora' },
  { key: 'ramo', label: 'Ramo' },
  { key: 'poliza', label: 'Póliza' },
  { key: 'nren', label: 'N°' },
  { key: 'inicio', label: 'Inicio vigencia' },
  { key: 'fin', label: 'Fin vigencia' },
  { key: 'asegurado', label: 'Asegurado' },
  { key: 'monto', label: 'Monto' },
  { key: 'contratista', label: 'Contratista' },
];

function RowActions({ onDetails }) {
  const acts = [
    { icon: 'eye', title: 'Ver detalles', fn: onDetails },
    { icon: 'sparkles', title: 'Analizar pedido', fn: null },
    { icon: 'paperclip', title: 'Adjuntar', fn: null },
  ];
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {acts.map((a, i) => (
        <button key={i} type="button" title={a.title} onClick={a.fn} className="row-act">
          <i data-lucide={a.icon} style={{ width: 19, height: 19 }}></i>
        </button>
      ))}
    </div>
  );
}

function RenovacionesTable({ onDetails }) {
  const [page, setPage] = React.useState(1);
  const pages = [1, 2, 3, 4, '…', 8];
  return (
    <div>
      <div style={{ overflowX: 'auto', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-brand)', minWidth: 1100 }}>
          <thead>
            <tr style={{ background: 'var(--table-row-hover)' }}>
              <th style={{ ...thStyle, paddingLeft: 24 }}>Firma</th>
              {COLS.map(c => (
                <th key={c.key} style={thStyle}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                    {c.label}<i data-lucide="chevron-down" style={{ width: 14, height: 14, color: 'var(--neutral-400)' }}></i>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={i} className="ren-row">
                <td style={{ ...tdStyle, paddingLeft: 24 }}><RowActions onDetails={onDetails} /></td>
                {COLS.map(c => (
                  <td key={c.key} style={{ ...tdStyle, color: c.key === 'asegurado' || c.key === 'poliza' ? 'var(--text-strong)' : 'var(--text-body)', fontWeight: c.key === 'asegurado' ? 600 : 400 }}>
                    {r[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'var(--space-5)' }}>
        <span style={{ fontFamily: 'var(--font-brand)', fontSize: 14, color: 'var(--text-muted)' }}>Resultados 1-10 de 84</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button className="pg-arrow" onClick={() => setPage(p => Math.max(1, p - 1))}><i data-lucide="chevron-left" style={{ width: 18, height: 18 }}></i></button>
          {pages.map((p, i) => (
            <button key={i} disabled={p === '…'} onClick={() => typeof p === 'number' && setPage(p)} style={{
              minWidth: 34, height: 34, borderRadius: 'var(--radius-sm)', border: 'none', cursor: p === '…' ? 'default' : 'pointer',
              fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14,
              background: p === page ? 'var(--color-brand)' : 'transparent',
              color: p === page ? '#fff' : 'var(--text-body)',
            }}>{p}</button>
          ))}
          <button className="pg-arrow" onClick={() => setPage(p => p + 1)}><i data-lucide="chevron-right" style={{ width: 18, height: 18 }}></i></button>
        </div>
      </div>
    </div>
  );
}

const thStyle = { textAlign: 'left', padding: '16px 18px', fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14, color: 'var(--text-strong)', whiteSpace: 'nowrap' };
const tdStyle = { padding: '16px 18px', fontFamily: 'var(--font-brand)', fontSize: 14, borderTop: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' };

window.RenovacionesTable = RenovacionesTable;
