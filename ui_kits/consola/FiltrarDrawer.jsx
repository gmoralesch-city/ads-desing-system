const { Chip: FChip, Button: FButton, Icon: FIcon, Calendar: FCalendar, Badge: FBadge } = window.AseguradoraDelSurDesignSystem_031691;

/* Grupo colapsable — molécula Figma "Filtros / Abierto=On": título 16px navy,
   caret up, contenido de chips 4 por fila, línea inferior 1px. */
function FiltroGroup({ title, children, count, defaultOpen = true }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ width: '100%', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 12 }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left' }}>
        <span style={{ flexGrow: 1, fontFamily: 'var(--font-brand)', fontWeight: 500, fontSize: 16, lineHeight: '100%', color: 'var(--text-strong)' }}>{title}</span>
        {count > 0 && <FBadge tone="brand">{count}</FBadge>}
        <FIcon name={open ? 'FlechasCaretDown' : 'FlechasCaretDown'} size={16} color="var(--text-strong)" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 180ms ease' }} />
      </button>
      {open && <div style={{ paddingTop: 4 }}>{children}</div>}
    </div>
  );
}

function ChipGroup({ options, value, onToggle }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map(o => (
        <FChip key={o} selected={value.includes(o)} onClick={() => onToggle(o)}>{o}</FChip>
      ))}
    </div>
  );
}

/* Rango dual con validación min < max (Figma "Slider" con dos manijas y
   etiquetas $ 5.32 / $ 24.80). */
function RangoValor({ value, onChange, min, max }) {
  const [lo, hi] = value;
  const pct = v => ((v - min) / (max - min)) * 100;
  const err = lo >= hi;
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: 500, color: 'var(--text-strong)', background: 'var(--teal-100, #E8F4F4)', borderRadius: 4, padding: '4px 8px', whiteSpace: 'nowrap' }}>$ {lo.toFixed(2)}</span>
        <div style={{ position: 'relative', flexGrow: 1, height: 24 }}>
          <div style={{ position: 'absolute', left: 0, right: 0, top: 10, height: 4, borderRadius: 2, background: 'var(--border-subtle)' }}></div>
          <div style={{ position: 'absolute', top: 10, height: 4, borderRadius: 2, left: pct(lo) + '%', width: Math.max(0, pct(hi) - pct(lo)) + '%', background: err ? 'var(--color-danger, #D92D20)' : 'var(--color-brand)' }}></div>
          <input type="range" min={min} max={max} step={0.01} value={lo} onChange={e => onChange([Math.min(+e.target.value, hi), hi])} aria-label="Valor mínimo" style={{ position: 'absolute', inset: 0, width: '100%', margin: 0, appearance: 'none', background: 'transparent', pointerEvents: 'auto' }} />
          <input type="range" min={min} max={max} step={0.01} value={hi} onChange={e => onChange([lo, Math.max(+e.target.value, lo)])} aria-label="Valor máximo" style={{ position: 'absolute', inset: 0, width: '100%', margin: 0, appearance: 'none', background: 'transparent' }} />
        </div>
        <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: 500, color: 'var(--text-strong)', background: 'var(--teal-100, #E8F4F4)', borderRadius: 4, padding: '4px 8px', whiteSpace: 'nowrap' }}>$ {hi.toFixed(2)}</span>
      </div>
      {err && <p style={{ margin: '8px 0 0', fontFamily: 'var(--font-brand)', fontSize: 12, color: 'var(--color-danger, #D92D20)' }}>El valor mínimo debe ser menor al máximo.</p>}
    </div>
  );
}

/* Panel "Filtrar por:" — 420px lateral en desktop, pantalla completa en mobile. */
function FiltrarDrawer({ open, draft, setDraft, onApply, onRestore, onClose }) {
  const D = window.ADSConsola;
  const toggle = (key, v) => setDraft(d => ({ ...d, [key]: d[key].includes(v) ? d[key].filter(x => x !== v) : [...d[key], v] }));
  const total = draft.canal.length + draft.sucursal.length + draft.vendedor.length + draft.tipo.length + draft.plan.length + (draft.fecha ? 1 : 0);
  const invalid = draft.valor[0] >= draft.valor[1];
  return (
    <React.Fragment>
      <div className={'drawer-scrim' + (open ? ' is-open' : '')} onClick={onClose}></div>
      <aside className={'filtrar-panel' + (open ? ' is-open' : '')} aria-hidden={!open} aria-label="Filtrar por">
        <header style={{ height: 80, flexShrink: 0, display: 'flex', flexDirection: 'row', gap: 12, padding: '20px 20px', alignItems: 'center', background: '#fff' }}>
          <span style={{ flexGrow: 1, fontFamily: 'var(--font-brand)', fontWeight: 900, fontSize: 20, lineHeight: '100%', color: '#484848' }}>Filtrar por:</span>
          <button className="icon-round" onClick={onClose} aria-label="Cerrar filtros"><FIcon name="FuncionesClose" size={20} color="var(--text-strong)" /></button>
        </header>
        <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, padding: '20px 35px 40px', alignItems: 'flex-start' }}>
          <FiltroGroup title="Canal" count={draft.canal.length}><ChipGroup options={D.canales} value={draft.canal} onToggle={v => toggle('canal', v)} /></FiltroGroup>
          <FiltroGroup title="Sucursal" count={draft.sucursal.length}><ChipGroup options={D.sucursales} value={draft.sucursal} onToggle={v => toggle('sucursal', v)} /></FiltroGroup>
          <FiltroGroup title="Vendedor" count={draft.vendedor.length}><ChipGroup options={D.vendedores} value={draft.vendedor} onToggle={v => toggle('vendedor', v)} /></FiltroGroup>
          <FiltroGroup title="Tipo" count={draft.tipo.length}><ChipGroup options={D.tipos} value={draft.tipo} onToggle={v => toggle('tipo', v)} /></FiltroGroup>
          <FiltroGroup title="Tipo de plan" count={draft.plan.length}><ChipGroup options={D.planes} value={draft.plan} onToggle={v => toggle('plan', v)} /></FiltroGroup>
          <FiltroGroup title="Valor"><RangoValor value={draft.valor} min={5.32} max={4800} onChange={v => setDraft(d => ({ ...d, valor: v }))} /></FiltroGroup>
          <FiltroGroup title="Fecha" count={draft.fecha ? 1 : 0} defaultOpen={false}>
            <FCalendar value={draft.fecha || undefined} month={8} year={2022} onChange={f => setDraft(d => ({ ...d, fecha: f }))} />
            {draft.fecha && <button className="link-clear" onClick={() => setDraft(d => ({ ...d, fecha: null }))}>Quitar fecha</button>}
          </FiltroGroup>
        </div>
        <footer style={{ height: 80, flexShrink: 0, display: 'flex', flexDirection: 'row', padding: '20px 20px', justifyContent: 'space-between', alignItems: 'center', background: '#fff', boxShadow: '0px 40px 120px 0px rgba(1,30,65,0.2)' }}>
          <FButton variant="secondary" size="md" onClick={onRestore}>Restaurar</FButton>
          <FButton variant="primary" size="md" disabled={invalid} onClick={() => onApply(total)} iconLeft={<FIcon name="FuncionesCheck" size={18} />}>Aplicar</FButton>
        </footer>
      </aside>
    </React.Fragment>
  );
}

Object.assign(window, { FiltrarDrawer, FiltroGroup, ChipGroup, RangoValor });
