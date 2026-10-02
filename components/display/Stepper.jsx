import React from 'react';

/**
 * Stepper — horizontal progress steps (Figma "Steppers"). Cyan for done/current,
 * neutral for upcoming. Numbered circles joined by a connector line.
 */
export function Stepper({ steps = [], current = 0, style = {} }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%', ...style }}>
      {steps.map((label, i) => {
        const done = i < current, active = i === current;
        const on = done || active;
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, flexShrink: 0, width: 96 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-bold)', fontSize: 14,
                background: done ? 'var(--color-brand)' : active ? '#fff' : 'var(--neutral-100)',
                color: done ? '#fff' : active ? 'var(--color-brand)' : 'var(--text-muted)',
                border: `2px solid ${on ? 'var(--color-brand)' : 'var(--border-default)'}`,
                transition: 'var(--transition-action)',
              }}>
                {done
                  ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  : i + 1}
              </div>
              <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
                color: on ? 'var(--text-strong)' : 'var(--text-muted)', textAlign: 'center', lineHeight: 1.3 }}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 2, background: i < current ? 'var(--color-brand)' : 'var(--border-default)', marginTop: 15 }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Stepper;
