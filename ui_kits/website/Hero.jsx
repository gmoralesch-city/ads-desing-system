// Hero — cyan banner with the app-in-hand photograph
function Hero() {
  return (
    <section style={{ background: 'var(--surface-brand)', overflow: 'hidden' }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--space-8)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', minHeight: 460,
      }}>
        <div style={{ padding: 'var(--space-16) 0' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.22)', color: '#fff', fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 12, letterSpacing: '.04em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-5)' }}>+30 años protegiéndote</span>
          <h1 style={{ fontFamily: 'var(--font-brand)', fontWeight: 300, fontSize: 52, lineHeight: 1.05, color: '#fff', margin: '0 0 var(--space-4)' }}>
            La tranquilidad<br /><b style={{ fontWeight: 800 }}>está en tus manos</b>
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,0.92)', maxWidth: 440, margin: '0 0 var(--space-8)' }}>
            Cotiza, contrata y gestiona tus seguros desde la app Sur One. Asistencia 24/7 cuando más lo necesitas.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <Button variant="primary" size="lg" style={{ background: '#fff', color: 'var(--color-brand-dark)' }}>Cotizar mi seguro</Button>
            <Button variant="ghost" size="lg" style={{ color: '#fff', border: '1.5px solid rgba(255,255,255,0.6)' }}>Necesito ayuda</Button>
          </div>
        </div>
        <div style={{ alignSelf: 'stretch', position: 'relative' }}>
          <img src="../../assets/images/hero-app-hands.png" alt="App Sur One" style={{ position: 'absolute', right: -40, bottom: 0, height: '100%', maxWidth: 'none', objectFit: 'contain', objectPosition: 'bottom right' }} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
