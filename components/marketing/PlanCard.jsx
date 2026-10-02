import React from 'react';
import { Button } from '../buttons/Button.jsx';
import { Badge } from '../display/Badge.jsx';

/**
 * PlanCard — insurance plan / tier card (Figma "Tarjetas"). White surface with
 * soft shadow and hover lift; tier accent, price, feature list and CTA.
 */
export function PlanCard({
  name, price, period = '/mes', tier = 'brand', features = [],
  featured = false, cta = 'Contratar', onCta, note, style = {},
}) {
  const accents = {
    bronce: 'var(--tier-bronce)', plata: 'var(--tier-plata)', oro: 'var(--tier-oro)', brand: 'var(--color-brand)',
  };
  const accent = accents[tier] || accents.brand;
  return (
    <div
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = featured ? 'var(--shadow-md)' : 'var(--shadow-sm)'; }}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16, width: 260,
        background: '#fff', borderRadius: 'var(--radius-lg)', padding: 28,
        boxShadow: featured ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        borderTop: `4px solid ${accent}`,
        transition: 'var(--transition-action)', fontFamily: 'var(--font-brand)', ...style,
      }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 'var(--fw-bold)', fontSize: 18, color: 'var(--text-strong)' }}>{name}</span>
        {featured && <Badge tone="brand" variant="solid">Recomendado</Badge>}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 2 }}>
        <span style={{ fontWeight: 'var(--fw-light)', fontSize: 44, lineHeight: 1, color: 'var(--text-strong)' }}>${price}</span>
        <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>{period}</span>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', lineHeight: 1.4 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}><polyline points="20 6 9 17 4 12"/></svg>
            {f}
          </li>
        ))}
      </ul>
      <Button variant={featured ? 'primary' : 'secondary'} fullWidth onClick={onCta}>{cta}</Button>
      {note && <span style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'center' }}>{note}</span>}
    </div>
  );
}

export default PlanCard;
