// FeaturesSection — "Contrata con nosotros" value props on teal band
function FeaturesSection() {
  const feats = [
    { icon: 'headset', title: 'Soporte 24/7', desc: 'Asistencia inmediata todos los días del año.' },
    { icon: 'sparkles', title: 'Servicio personalizado', desc: 'Un asesor que entiende lo que necesitas.' },
    { icon: 'flag', title: 'Empresa 100% ecuatoriana', desc: 'Comprometidos con el país y su gente.' },
    { icon: 'users', title: 'El mejor talento humano', desc: 'Profesionales que cuidan de ti.' },
    { icon: 'heart-handshake', title: 'El cliente va primero', desc: 'Cada decisión piensa en ti.' },
    { icon: 'rocket', title: 'Innovamos permanentemente', desc: 'Tecnología al servicio de tu tranquilidad.' },
  ];
  return (
    <section style={{ background: 'var(--surface-teal)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-24) var(--space-8)' }}>
        <span className="t-eyebrow">Contrata con nosotros</span>
        <h2 style={{ fontFamily: 'var(--font-brand)', fontWeight: 300, fontSize: 40, color: 'var(--text-strong)', margin: 'var(--space-2) 0 var(--space-10)' }}>La mejor opción para ti</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-10) var(--space-12)' }}>
          {feats.map((f, i) => (
            <div key={i} style={{ display: 'flex', gap: 'var(--space-4)' }}>
              <div style={{ flex: '0 0 auto', width: 52, height: 52, borderRadius: 'var(--radius-pill)', background: 'var(--color-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-button)' }}>
                <i data-lucide={f.icon} style={{ width: 24, height: 24, color: '#fff' }}></i>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 18, color: 'var(--text-strong)', margin: '4px 0 6px' }}>{f.title}</h3>
                <p className="t-body" style={{ margin: 0, fontSize: 15 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.FeaturesSection = FeaturesSection;
