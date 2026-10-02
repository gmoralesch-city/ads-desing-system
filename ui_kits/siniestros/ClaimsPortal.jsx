// ClaimsPortal — siniestros tracking board with horizontal stepper & detail
function Stepper({ steps, current }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      {steps.map((s, i) => {
        const done = i < current, active = i === current;
        const color = done ? 'var(--color-success)' : active ? 'var(--color-brand)' : 'var(--neutral-300)';
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flex: '0 0 auto', width: 96 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: (done || active) ? color : '#fff', border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: (done || active) ? '#fff' : 'var(--neutral-400)', flex: '0 0 auto' }}>
                {done ? <i data-lucide="check" style={{ width: 18, height: 18 }}></i> : <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14 }}>{i + 1}</span>}
              </div>
              <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: active ? 700 : 500, color: active ? 'var(--text-strong)' : 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3 }}>{s}</span>
            </div>
            {i < steps.length - 1 && <div style={{ height: 2, background: i < current ? 'var(--color-success)' : 'var(--neutral-300)', flex: 1, marginTop: 17 }}></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function ClaimsPortal() {
  const { Card, Badge, Button, Tabs } = window.AseguradoraDelSurDesignSystem_031691;
  const STEPS = ['Reportado', 'En evaluación', 'Aprobado', 'Indemnizado'];
  const claims = [
    { id: 'SIN-2026-0412', type: 'Vehicular', icon: 'car', desc: 'Choque lateral · Av. República', date: '28 may 2026', step: 1, amount: '$2.400', tone: 'warning', status: 'En evaluación', tl: [['Siniestro reportado', '28 may · 09:14'], ['Documentos recibidos', '28 may · 11:02'], ['Asignado a perito', '29 may · 08:30']] },
    { id: 'SIN-2026-0389', type: 'Hogar', icon: 'home', desc: 'Daño por agua · Cocina', date: '14 may 2026', step: 3, amount: '$1.150', tone: 'success', status: 'Indemnizado', tl: [['Siniestro reportado', '14 may'], ['Evaluación completada', '16 may'], ['Aprobado', '18 may'], ['Pago realizado', '20 may']] },
    { id: 'SIN-2026-0361', type: 'Salud', icon: 'stethoscope', desc: 'Reembolso consulta médica', date: '02 may 2026', step: 2, amount: '$320', tone: 'brand', status: 'Aprobado', tl: [['Solicitud recibida', '02 may'], ['En evaluación', '03 may'], ['Aprobado', '05 may']] },
  ];
  const [sel, setSel] = React.useState(0);
  const [tab, setTab] = React.useState(1);
  const c = claims[sel];

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  return (
    <div style={{ maxWidth: 1160, margin: '0 auto', padding: 'var(--space-8) var(--space-6) var(--space-16)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 'var(--space-5)' }}>
        <div>
          <h1 style={{ fontFamily: 'var(--font-brand)', fontWeight: 300, fontSize: 36, color: 'var(--text-strong)', margin: '0 0 4px' }}>Siniestros</h1>
          <p className="t-body" style={{ margin: 0 }}>Realiza el seguimiento de tus siniestros.</p>
        </div>
        <Button variant="primary" iconLeft={<i data-lucide="plus" style={{ width: 18, height: 18 }}></i>}>Reportar siniestro</Button>
      </div>

      <Tabs tabs={['Mis pólizas', 'Siniestros', 'Pagos', 'Documentos']} active={tab} onChange={setTab} style={{ marginBottom: 'var(--space-8)' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {claims.map((cl, i) => (
            <div key={i} onClick={() => setSel(i)} style={{
              background: '#fff', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', cursor: 'pointer',
              border: `1.5px solid ${i === sel ? 'var(--color-brand)' : 'var(--border-subtle)'}`,
              boxShadow: i === sel ? 'var(--shadow-sm)' : 'none', transition: 'var(--transition-action)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-pill)', background: 'var(--cyan-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
                  <i data-lucide={cl.icon} style={{ width: 22, height: 22, color: 'var(--color-brand-dark)' }}></i>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{cl.type}</span>
                    <Badge tone={cl.tone}>{cl.status}</Badge>
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cl.desc}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{cl.id} · {cl.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail */}
        <Card elevation="md" style={{ padding: 'var(--space-8)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-8)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <h2 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 22, color: 'var(--text-strong)', margin: 0 }}>Seguro {c.type}</h2>
                <Badge tone={c.tone}>{c.status}</Badge>
              </div>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>{c.id} · Reportado el {c.date}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>Monto estimado</div>
              <div style={{ fontFamily: 'var(--font-brand)', fontWeight: 800, fontSize: 26, color: 'var(--text-strong)' }}>{c.amount}</div>
            </div>
          </div>

          <div style={{ padding: 'var(--space-6) 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            <Stepper steps={STEPS} current={c.step} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', marginTop: 'var(--space-6)' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 var(--space-4)' }}>Línea de tiempo</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {c.tl.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-brand)', marginTop: 4 }}></span>
                      {i < c.tl.length - 1 && <span style={{ width: 2, flex: 1, background: 'var(--border-default)' }}></span>}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-brand)', fontWeight: 600, fontSize: 14, color: 'var(--text-strong)' }}>{t[0]}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>{t[1]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-brand)', fontWeight: 700, fontSize: 14, letterSpacing: '.03em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 var(--space-4)' }}>Resumen</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {[['Póliza', 'POL-884-2231'], ['Tipo de evento', c.desc], ['Perito asignado', 'C. Mendoza'], ['Deducible', '$250']].map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, paddingBottom: 'var(--space-3)', borderBottom: '1px dashed var(--border-subtle)' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{r[0]}</span>
                    <span style={{ fontFamily: 'var(--font-brand)', fontWeight: 600, fontSize: 13, color: 'var(--text-strong)', textAlign: 'right' }}>{r[1]}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
                <Button variant="secondary" size="sm" iconLeft={<i data-lucide="paperclip" style={{ width: 16, height: 16 }}></i>}>Adjuntar</Button>
                <Button variant="primary" size="sm" iconLeft={<i data-lucide="message-circle" style={{ width: 16, height: 16 }}></i>}>Contactar asesor</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
window.ClaimsPortal = ClaimsPortal;
