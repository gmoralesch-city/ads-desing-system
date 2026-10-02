// TopBar — module top menu: ADS isotipo, Admin tag, user dropdown
function TopBar() {
  const { Avatar } = window.AseguradoraDelSurDesignSystem_031691;
  return (
    <header style={{
      height: 80, background: '#fff', borderBottom: '2px solid var(--cyan-700)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', boxSizing: 'border-box', flex: '0 0 auto',
    }}>
      <img src="../../assets/logos/ads-isotipo.svg" alt="Aseguradora del Sur" style={{ height: 46 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
        <span style={{
          background: 'var(--admin-green)', color: '#fff', fontFamily: 'var(--font-brand)',
          fontWeight: 700, fontSize: 13, padding: '4px 14px', borderRadius: 'var(--radius-pill)',
        }}>Admin</span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-sm)', padding: '6px 12px 6px 6px', cursor: 'pointer',
        }}>
          <Avatar name="Víctor Salazar" size={36} />
          <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 600, fontSize: 15, color: 'var(--text-strong)' }}>Víctor</span>
          <i data-lucide="chevron-down" style={{ width: 18, height: 18, color: 'var(--text-muted)' }}></i>
        </div>
      </div>
    </header>
  );
}
window.TopBar = TopBar;
