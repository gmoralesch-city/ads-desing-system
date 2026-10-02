// Header — top navigation bar for the ADS marketing site
function Header() {
  const links = ['Cultura de seg.', 'Soluciones', 'Empresas', 'Sé un agente', 'Nosotros'];
  const [open, setOpen] = React.useState(0);
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 40, background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      boxShadow: '0 1px 0 rgba(1,30,65,0.04)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', height: 76,
        display: 'flex', alignItems: 'center', gap: 'var(--space-8)', padding: '0 var(--space-8)',
      }}>
        <img src="../../assets/logos/ads-horizontal.png" alt="Aseguradora del Sur" style={{ height: 34 }} />
        <nav style={{ display: 'flex', gap: 'var(--space-6)', marginLeft: 'var(--space-4)' }}>
          {links.map((l, i) => (
            <a key={i} href="#" onMouseEnter={() => setOpen(i)}
              style={{
                fontFamily: 'var(--font-brand)', fontSize: 15, fontWeight: 500,
                color: open === i ? 'var(--text-strong)' : 'var(--text-body)',
                textDecoration: 'none', position: 'relative', paddingBottom: 4,
                borderBottom: `2px solid ${open === i ? 'var(--color-brand)' : 'transparent'}`,
                transition: 'var(--transition-action)',
              }}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-brand)', fontWeight: 600, fontSize: 14, color: 'var(--color-brand-dark)', textDecoration: 'none' }}>
            <i data-lucide="smartphone" style={{ width: 16, height: 16 }}></i> App Sur One
          </a>
          <Button variant="secondary" size="sm" iconLeft={<i data-lucide="user" style={{ width: 16, height: 16 }}></i>}>Ingresar</Button>
        </div>
      </div>
    </header>
  );
}
window.Header = Header;
