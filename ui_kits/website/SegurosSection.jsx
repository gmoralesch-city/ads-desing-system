// SegurosSection — "Nuestros seguros" product grid
function SegurosSection() {
  const { Card, Badge } = window.AseguradoraDelSurDesignSystem_031691;
  const seguros = [
    { icon: 'car', name: 'Vehicular', desc: 'Protege tu auto ante choques, robo y daños a terceros.', tag: 'Más vendido', tone: 'success' },
    { icon: 'heart-pulse', name: 'Vida', desc: 'Respaldo económico para quienes más amas.', tag: null },
    { icon: 'stethoscope', name: 'Salud', desc: 'Atención médica y hospitalaria con cobertura nacional.', tag: null },
    { icon: 'home', name: 'Hogar', desc: 'Cubre tu vivienda contra incendio, robo y desastres.', tag: null },
    { icon: 'plane', name: 'Asistencia de viaje', desc: 'Viaja tranquilo dentro y fuera del país.', tag: 'Nuevo', tone: 'brand' },
    { icon: 'briefcase', name: 'Empresas', desc: 'Soluciones a la medida para tu negocio.', tag: null },
  ];
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-24) var(--space-8)' }}>
      <span className="t-eyebrow">Nuestros seguros</span>
      <h2 style={{ fontFamily: 'var(--font-brand)', fontWeight: 300, fontSize: 40, color: 'var(--text-strong)', margin: 'var(--space-2) 0 var(--space-2)' }}>Elige el plan que se ajusta a ti</h2>
      <p className="t-body" style={{ maxWidth: 560, marginTop: 0 }}>Coberturas pensadas para cada etapa de tu vida, con la solidez de Aseguradora del Sur.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', marginTop: 'var(--space-10)' }}>
        {seguros.map((s, i) => (
          <Card key={i} elevation="md" className="seguro-card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', transition: 'var(--transition-action)' }}>
            <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-pill)', background: 'var(--cyan-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <i data-lucide={s.icon} style={{ width: 26, height: 26, color: 'var(--color-brand-dark)' }}></i>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <h3 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 20, color: 'var(--text-strong)', margin: 0 }}>{s.name}</h3>
              {s.tag && <Badge tone={s.tone}>{s.tag}</Badge>}
            </div>
            <p className="t-body" style={{ margin: 0, fontSize: 15 }}>{s.desc}</p>
            <a href="#" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-brand)', fontWeight: 600, fontSize: 14, color: 'var(--text-link)', textDecoration: 'none' }}>
              Cotizar <i data-lucide="arrow-right" style={{ width: 15, height: 15 }}></i>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
window.SegurosSection = SegurosSection;
