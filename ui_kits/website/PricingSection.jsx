// PricingSection — Bronce / Plata / Oro auto-insurance tiers
function PricingSection() {
  const { Button, Badge } = window.AseguradoraDelSurDesignSystem_031691;
  const tiers = [
    { name: 'Bronce', color: 'var(--tier-bronce)', price: 47, feats: ['Responsabilidad civil $20.000', 'Muerte $5.000', 'Gastos médicos $3.000', 'Asistencia vial 24/7'], featured: false },
    { name: 'Plata', color: 'var(--tier-plata)', price: 71, feats: ['Responsabilidad civil $35.000', 'Muerte $8.000', 'Gastos médicos $5.000', 'Asistencia vial 24/7', 'Auto de reemplazo'], featured: false },
    { name: 'Oro', color: 'var(--tier-oro)', price: 98, feats: ['Responsabilidad civil $50.000', 'Muerte $12.000', 'Gastos médicos $8.000', 'Asistencia vial 24/7', 'Auto de reemplazo', 'Daños propios sin deducible'], featured: true },
  ];
  return (
    <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: 'var(--space-24) var(--space-8)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
        <span className="t-eyebrow">Seguro vehicular</span>
        <h2 style={{ fontFamily: 'var(--font-brand)', fontWeight: 300, fontSize: 40, color: 'var(--text-strong)', margin: 'var(--space-2) 0 0' }}>Siente tranquilidad en cada viaje</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)', alignItems: 'start' }}>
        {tiers.map((t, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 'var(--radius-lg)', padding: 'var(--space-8)',
            border: t.featured ? '2px solid var(--color-brand)' : '1px solid var(--border-subtle)',
            boxShadow: t.featured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
            transform: t.featured ? 'translateY(-12px)' : 'none', position: 'relative',
          }}>
            {t.featured && <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)' }}><Badge tone="brand" variant="solid">Recomendado</Badge></div>}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-4)' }}>
              <span style={{ width: 14, height: 14, borderRadius: 4, background: t.color }}></span>
              <h3 style={{ fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 24, color: 'var(--text-strong)', margin: 0 }}>{t.name}</h3>
            </div>
            <div style={{ marginBottom: 'var(--space-6)' }}>
              <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 44, color: 'var(--text-strong)' }}>${t.price}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)' }}>/mes*</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {t.feats.map((f, j) => (
                <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)' }}>
                  <i data-lucide="check" style={{ width: 18, height: 18, color: 'var(--color-success)', flex: '0 0 auto', marginTop: 1 }}></i>{f}
                </li>
              ))}
            </ul>
            <Button variant={t.featured ? 'primary' : 'secondary'} fullWidth>Contratar {t.name}</Button>
          </div>
        ))}
      </div>
      <p className="t-caption" style={{ textAlign: 'center', marginTop: 'var(--space-8)' }}>*Valor mensual referencial. Sujeto a evaluación y condiciones de la póliza.</p>
    </section>
  );
}
window.PricingSection = PricingSection;
