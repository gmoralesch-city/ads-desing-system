// AppPromo + Footer — Sur One promo strip (purple) over the navy footer
function Footer() {
  const { Button, Input } = window.AseguradoraDelSurDesignSystem_031691;
  const cols = [
    { h: 'Soluciones', items: ['Vehicular', 'Vida', 'Salud', 'Hogar', 'Empresas'] },
    { h: 'Nosotros', items: ['Quiénes somos', 'Trabaja con nosotros', 'Sostenibilidad', 'Noticias'] },
    { h: 'Soporte', items: ['Centro de ayuda', 'Siniestros', 'Oficinas', 'Contáctanos'] },
  ];
  return (
    <footer>
      {/* Sur One app promo */}
      <div style={{ background: 'var(--surone-purple)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-10) var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          <img src="../../assets/logos/sur-one-icon.png" alt="Sur One" style={{ width: 64, height: 64, borderRadius: 16 }} />
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: 'var(--font-surone)', fontWeight: 800, fontSize: 24, color: '#fff', margin: '0 0 4px' }}>Descarga Sur One</h3>
            <p style={{ fontFamily: 'var(--font-surone)', fontSize: 15, color: 'rgba(255,255,255,0.85)', margin: 0 }}>Tus seguros, siniestros y pagos en un solo lugar.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
            <button className="store-btn"><i data-lucide="smartphone" style={{ width: 18, height: 18 }}></i> App Store</button>
            <button className="store-btn"><i data-lucide="download" style={{ width: 18, height: 18 }}></i> Google Play</button>
          </div>
        </div>
      </div>
      {/* Newsletter + links */}
      <div style={{ background: 'var(--surface-navy)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-16) var(--space-8) var(--space-8)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 'var(--space-10)', paddingBottom: 'var(--space-12)', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
            <div>
              <img src="../../assets/logos/ads-isotipo.svg" alt="" style={{ height: 44, marginBottom: 'var(--space-4)' }} />
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', maxWidth: 280, lineHeight: 1.5, margin: '0 0 var(--space-5)' }}>Suscríbete y recibe noticias y novedades de Aseguradora del Sur.</p>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-end', maxWidth: 320 }}>
                <Input placeholder="Correo electrónico" style={{ flex: 1 }} />
                <Button variant="primary" size="md">Recibir</Button>
              </div>
            </div>
            {cols.map((c, i) => (
              <div key={i}>
                <h4 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14, letterSpacing: '.04em', textTransform: 'uppercase', color: '#fff', margin: '0 0 var(--space-4)' }}>{c.h}</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {c.items.map((it, j) => (<li key={j}><a href="#" style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{it}</a></li>))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-6)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>© 2026 Aseguradora del Sur C.A. Todos los derechos reservados.</span>
            <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
              {[
                ['Facebook', 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z'],
                ['Instagram', 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 6.85a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3zm0 8.49a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68zm6.54-8.69a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z'],
                ['LinkedIn', 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.4H5.67v7.94h2.67zM7 9.24a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.1v-4.36c0-2.33-1.24-3.41-2.9-3.41-1.34 0-1.94.74-2.28 1.26v-1.08h-2.66c.04.75 0 7.94 0 7.94h2.66v-4.43c0-.24.02-.48.09-.65.19-.48.63-.97 1.36-.97.96 0 1.35.73 1.35 1.8v4.25h2.68z'],
                ['YouTube', 'M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.1 26.1 0 0 0 2 12a26.1 26.1 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.1 26.1 0 0 0 22 12a26.1 26.1 0 0 0-.42-4.81zM10 15V9l5.2 3-5.2 3z'],
              ].map(([label, d], i) => (
                <a key={i} href="#" aria-label={label} style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
