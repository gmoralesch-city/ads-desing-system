import React from 'react';
import { Button } from '../buttons/Button.jsx';

/**
 * Access — login / access entry card (Figma "Access"). Compact white card with
 * a heading, form slot and primary CTA; the ADS "Ingresar" pattern.
 */
export function Access({ title = 'Ingresa a tu cuenta', subtitle, children, cta = 'Ingresar', onSubmit, footer, style = {} }) {
  return (
    <div style={{
      width: 360, maxWidth: '100%', background: '#fff', borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)', padding: 32, fontFamily: 'var(--font-brand)',
      display: 'flex', flexDirection: 'column', gap: 20, ...style,
    }}>
      <div>
        <h3 style={{ margin: 0, fontWeight: 'var(--fw-bold)', fontSize: 24, color: 'var(--text-strong)' }}>{title}</h3>
        {subtitle && <p style={{ margin: '6px 0 0', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>{children}</div>
      <Button variant="primary" fullWidth onClick={onSubmit}>{cta}</Button>
      {footer && <div style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>{footer}</div>}
    </div>
  );
}

export default Access;
