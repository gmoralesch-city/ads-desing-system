import React from 'react';

/** Switch — pill toggle; cyan track + sliding white knob when on. */
export function Switch({ checked = false, onChange, label, disabled = false, style = {} }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 44, height: 24, flex: '0 0 auto', borderRadius: 'var(--radius-pill)',
          background: checked ? 'var(--color-brand)' : 'var(--neutral-300)',
          position: 'relative', transition: 'var(--transition-action)',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: checked ? 22 : 2,
          width: 20, height: 20, borderRadius: '50%', background: '#fff',
          boxShadow: '0 1px 3px rgba(1,30,65,0.3)', transition: 'var(--transition-action)',
        }} />
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}

export default Switch;
