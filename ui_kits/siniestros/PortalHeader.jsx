// PortalHeader — compact authenticated header for the Sur One web portal
function PortalHeader() {
  const { Avatar } = window.AseguradoraDelSurDesignSystem_031691;
  return (
    <header style={{ background: '#fff', borderBottom: '1px solid var(--border-subtle)', position: 'sticky', top: 0, zIndex: 30 }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', height: 68, display: 'flex', alignItems: 'center', gap: 'var(--space-6)', padding: '0 var(--space-6)' }}>
        <img src="../../assets/logos/ads-horizontal.png" alt="Aseguradora del Sur" style={{ height: 30 }} />
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
          <button className="icon-btn"><i data-lucide="search" style={{ width: 20, height: 20 }}></i></button>
          <button className="icon-btn" style={{ position: 'relative' }}>
            <i data-lucide="bell" style={{ width: 20, height: 20 }}></i>
            <span style={{ position: 'absolute', top: 2, right: 2, width: 8, height: 8, borderRadius: '50%', background: 'var(--color-danger)', border: '2px solid #fff' }}></span>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar name="Anaís Romero" size={36} />
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>Anaís Romero</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>Cliente · Quito</div>
            </div>
            <i data-lucide="chevron-down" style={{ width: 16, height: 16, color: 'var(--text-muted)' }}></i>
          </div>
        </div>
      </div>
    </header>
  );
}
window.PortalHeader = PortalHeader;
