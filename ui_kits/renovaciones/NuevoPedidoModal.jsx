// NuevoPedidoModal — multi-field "new order" form in a centered modal
function Field({ label, value, placeholder, type = 'select', error, blocked, full }) {
  const active = !!value && !blocked;
  const border = error ? 'var(--color-danger)' : active ? 'var(--color-brand)' : 'var(--border-default)';
  const labelColor = error ? 'var(--color-danger)' : active ? 'var(--color-brand-dark)' : 'var(--text-muted)';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 4, gridColumn: full ? '1 / -1' : 'auto' }}>
      <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: 600, color: labelColor, paddingLeft: 2 }}>{label}</span>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: 52, padding: '0 14px',
        border: `1.5px solid ${border}`, borderRadius: 'var(--radius-sm)', background: blocked ? 'var(--neutral-050)' : '#fff',
      }}>
        <span style={{ flex: 1, fontFamily: 'var(--font-brand)', fontSize: 16, color: value ? 'var(--text-strong)' : 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {value || placeholder}
        </span>
        <i data-lucide={type === 'date' ? 'calendar' : type === 'select' ? 'chevron-down' : 'user'} style={{ width: 18, height: 18, color: 'var(--text-muted)', flex: '0 0 auto' }}></i>
      </div>
      {error && <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, color: 'var(--color-danger)', paddingLeft: 2 }}>{error}</span>}
    </label>
  );
}

function NuevoPedidoModal({ onClose, onSaved }) {
  const { Button } = window.AseguradoraDelSurDesignSystem_031691;
  const tabs = ['Individual', 'Por planilla', 'Masivo', 'Especial'];
  const [tab, setTab] = React.useState(0);
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal-card" style={{ width: 860 }} onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose}><i data-lucide="x" style={{ width: 24, height: 24 }}></i></button>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 30, color: 'var(--text-strong)', margin: '0 0 4px' }}>Nuevo pedido</h2>
          <p style={{ fontFamily: 'var(--font-brand)', fontSize: 16, color: 'var(--text-muted)', margin: 0 }}>Selecciona el tipo de pedido que deseas ingresar</p>
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '2px solid var(--border-subtle)', marginBottom: 'var(--space-2)' }}>
          {tabs.map((t, i) => (
            <button key={i} onClick={() => setTab(i)} style={{
              flex: 1, appearance: 'none', background: 'transparent', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '0 0 12px', marginBottom: -2,
              fontFamily: 'var(--font-brand)', fontSize: 16, fontWeight: i === tab ? 700 : 500,
              color: i === tab ? 'var(--text-strong)' : 'var(--neutral-400)',
              borderBottom: `2px solid ${i === tab ? 'var(--color-secondary)' : 'transparent'}`,
            }}>
              <i data-lucide="star" style={{ width: 18, height: 18 }}></i>{t}
            </button>
          ))}
        </div>
        {/* dashed divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: 'var(--space-5) 0 var(--space-6)' }}>
          <span style={{ flex: 1, borderTop: '2px dashed var(--color-secondary)' }}></span>
          <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 600, fontSize: 14, color: 'var(--color-secondary)' }}>Pedido individual</span>
          <span style={{ flex: 1, borderTop: '2px dashed var(--color-secondary)' }}></span>
        </div>
        {/* form */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
          <Field label="N° de póliza" value="1156790" />
          <Field label="Nombre del contratista" value="Consorcio Tena" />
          <Field label="Nombre del asegurado" value="Empudepro" />
          <Field label="Ramo" value="Cumplimiento de contrato" />
          <Field label="Inicio de vigencia" value="01/01/2024" type="date" />
          <Field label="Fin de vigencia" value="03/01/2024" type="date" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-5)', marginTop: 'var(--space-5)' }}>
          <Field label="Suma asegurada" value="$76.542,67" type="text" />
          <Field label="Objeto de contrato" placeholder="Objeto de contrato" type="text" />
          <Field label="Plazo" value="12 meses" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', marginTop: 'var(--space-5)', alignItems: 'end' }}>
          <Field label="Tipo de pedido" value="Renovación - Planilla" />
          <button className="dropzone"><i data-lucide="image" style={{ width: 22, height: 22 }}></i><span>Cargar pedido</span></button>
        </div>
        <label style={{ display: 'block', marginTop: 'var(--space-5)' }}>
          <textarea placeholder="Observaciones" defaultValue="Campo completo" style={{
            width: '100%', minHeight: 96, resize: 'vertical', boxSizing: 'border-box', padding: 14,
            border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-brand)', fontSize: 16, color: 'var(--text-strong)', outline: 'none',
          }} />
        </label>
        <Button variant="primary" size="lg" fullWidth style={{ marginTop: 'var(--space-6)' }} onClick={onSaved || onClose}
          iconLeft={<i data-lucide="cloud-upload" style={{ width: 20, height: 20 }}></i>}>Ingresar pedido</Button>
      </div>
    </div>
  );
}
window.NuevoPedidoModal = NuevoPedidoModal;
