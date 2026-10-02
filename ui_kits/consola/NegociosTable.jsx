const { Badge: TBadge, Icon: TIcon, Dropdown: TDropdown, Pagination: TPagination, Select: TSelect } = window.AseguradoraDelSurDesignSystem_031691;

const COLS = [
  { key: 'tipo', label: 'Tipo', sortable: false },
  { key: 'identificacion', label: 'N° de Identificación', sortable: true },
  { key: 'cliente', label: 'Nombre del Cliente', sortable: true },
  { key: 'cotizacion', label: 'N° de Cotización', sortable: true },
  { key: 'estado', label: 'Estado', sortable: false },
  { key: 'valor', label: 'Valor de Cotización', sortable: true, align: 'right' },
  { key: 'canal', label: 'Canal', sortable: false },
  { key: 'ejecutivo', label: 'Ejecutivo', sortable: true },
];

function SortCaret({ dir }) {
  return <TIcon name="FlechasCaretDown" size={14} color={dir ? 'var(--color-brand)' : 'var(--text-muted)'} style={{ transform: dir === 'asc' ? 'rotate(180deg)' : 'none', flexShrink: 0 }} />;
}

/* Tabla de negocios — organismo Figma "Tablas": cabecera con wash teal,
   orden por columna, acciones por fila y pie con resultados + paginación. */
function NegociosTable({ rows, sort, onSort, page, pageCount, onPage, perPage, onPerPage, total, rangeFrom, rangeTo, onView, onAction }) {
  const D = window.ADSConsola;
  const menu = r => [
    { label: 'Ver detalle', icon: <TIcon name="FuncionesEye" size={16} />, onClick: () => onView(r) },
    { label: 'Descargar póliza', icon: <TIcon name="FuncionesDownload" size={16} />, onClick: () => onAction('Descargamos la póliza ' + r.cotizacion + '.') },
    { label: 'Reportar siniestro', icon: <TIcon name="ObjetosClipboardList" size={16} />, onClick: () => onAction('Abrimos el reporte de siniestro de ' + r.cliente + '.') },
    { divider: true },
    { label: 'Cancelar cotización', icon: <TIcon name="FuncionesDelete" size={16} />, danger: true, onClick: () => onAction('Cancelamos la cotización ' + r.cotizacion + '.') },
  ];
  return (
    <div>
      {/* ---------- desktop / tablet: tabla ---------- */}
      <div className="tabla-wrap">
        <table className="tabla">
          <thead>
            <tr>
              {COLS.map(c => (
                <th key={c.key} style={{ textAlign: c.align || 'left' }}>
                  {c.sortable ? (
                    <button className="th-sort" onClick={() => onSort(c.key)} style={{ justifyContent: c.align === 'right' ? 'flex-end' : 'flex-start' }}>
                      <span>{c.label}</span><SortCaret dir={sort.key === c.key ? sort.dir : null} />
                    </button>
                  ) : <span>{c.label}</span>}
                </th>
              ))}
              <th style={{ textAlign: 'right' }}><span>Acciones</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td><TBadge tone="warning">{r.tipo}</TBadge></td>
                <td>{r.identificacion}</td>
                <td>{r.cliente}</td>
                <td>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>{r.cotizacion}
                    <button className="row-eye" onClick={() => onView(r)} aria-label={'Ver ' + r.cotizacion}><TIcon name="FuncionesEye" size={18} /></button>
                  </span>
                </td>
                <td><TBadge tone={D.estadoTone(r.estado)}>{r.estado}</TBadge></td>
                <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>{D.money(r.valor)}</td>
                <td>{r.canal}</td>
                <td>{r.ejecutivo}</td>
                <td style={{ textAlign: 'right' }}>
                  <TDropdown align="right" items={menu(r)} trigger={<span className="row-kebab" aria-label="Más acciones"><TIcon name="FuncionesOptionsVertical" size={18} /></span>} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className="tabla-vacia">No encontramos negocios con esos filtros. Prueba quitando alguno.</p>}
      </div>

      {/* ---------- mobile: lista de tarjetas ---------- */}
      <div className="tabla-cards">
        {rows.map(r => (
          <article key={r.id} className="neg-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'space-between' }}>
              <TBadge tone="warning">{r.tipo}</TBadge>
              <TBadge tone={D.estadoTone(r.estado)}>{r.estado}</TBadge>
            </div>
            <h3>{r.cliente}</h3>
            <dl>
              <dt>N° de Identificación</dt><dd>{r.identificacion}</dd>
              <dt>N° de Cotización</dt><dd>{r.cotizacion}</dd>
              <dt>Valor</dt><dd>{D.money(r.valor)}</dd>
              <dt>Canal</dt><dd>{r.canal}</dd>
              <dt>Ejecutivo</dt><dd>{r.ejecutivo}</dd>
            </dl>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="link-clear" onClick={() => onView(r)}>Ver detalle</button>
              <TDropdown align="right" items={menu(r)} trigger={<span className="row-kebab"><TIcon name="FuncionesOptionsVertical" size={18} /></span>} />
            </div>
          </article>
        ))}
        {rows.length === 0 && <p className="tabla-vacia">No encontramos negocios con esos filtros.</p>}
      </div>

      {/* ---------- pie: resultados + paginación + registros por página ---------- */}
      <div className="tabla-pie">
        <span className="pie-res">Resultados {rangeFrom}-{rangeTo} de {total}</span>
        <div className="pie-nav">
          <TPagination page={page} pageCount={pageCount} onChange={onPage} />
          <label className="pie-per">
            <span>Registros</span>
            <TSelect value={String(perPage)} onChange={e => onPerPage(Number(e.target.value))} options={['10', '20', '50', '100'].map(v => ({ value: v, label: v }))} style={{ width: 96 }} />
            <span>por página</span>
          </label>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NegociosTable, COLS });
