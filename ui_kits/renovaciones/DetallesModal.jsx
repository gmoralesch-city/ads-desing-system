// DetallesModal — read-only account detail sheet
function DetallesModal({ onClose }) {
  const rows = [
    ['Nombre contratista', 'Consorcio Tena'],
    ['Identificación del contratista (CI/RUC)', '159178344001'],
    ['Teléfono celular', '0979001473'],
    ['Correo (mail)', 'ejemplo@gmail.com'],
    ['Nombre asegurado', 'Empudepro'],
    ['Identificación asegurado', '0910283798'],
    ['Número de póliza', '1159908'],
    ['Número de renovación', '5'],
    ['APS', 'Maldonado Guerra Marina'],
    ['Tasa', '5%'],
    ['Forma de pago', 'Contado'],
    ['Suma asegurada', '$76.542,67'],
    ['Prima total', '$250.152,14'],
    ['Endoso', 'Renovación'],
    ['Sucursal', 'Quito'],
  ];
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <div className="modal-scrim" onClick={onClose}>
      <div className="modal-card" style={{ width: 640 }} onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose}><i data-lucide="x" style={{ width: 24, height: 24 }}></i></button>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h2 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 30, color: 'var(--text-strong)', margin: '0 0 4px' }}>Detalles</h2>
          <p style={{ fontFamily: 'var(--font-brand)', fontSize: 16, color: 'var(--text-muted)', margin: 0 }}>Aquí puedes ver los detalles de la cuenta que seleccionaste</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {rows.map(([k, v], i) => (
            <div key={i} style={{ fontFamily: 'var(--font-brand)', fontSize: 16, lineHeight: 1.4 }}>
              <span style={{ fontWeight: 700, color: 'var(--text-strong)' }}>{k}: </span>
              <span style={{ color: 'var(--text-body)' }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'var(--space-6)' }}>
          <span style={{ flex: 1, borderTop: '2px dashed var(--color-secondary)' }}></span>
          <button style={{ appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-brand)', fontWeight: 600, fontSize: 15, color: 'var(--color-secondary)' }}>Más</button>
          <span style={{ flex: 1, borderTop: '2px dashed var(--color-secondary)' }}></span>
        </div>
      </div>
    </div>
  );
}
window.DetallesModal = DetallesModal;
