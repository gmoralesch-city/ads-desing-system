import React from 'react';

/** Radio — circular selector with cyan ring + dot when on. */
export function Radio({ checked = false, onChange, label, name, disabled = false, style = {} }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(true)}
        style={{
          width: 20, height: 20, flex: '0 0 auto', borderRadius: '50%',
          border: `2px solid ${checked ? 'var(--color-brand)' : 'var(--border-strong)'}`,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'var(--transition-action)',
        }}
      >
        {checked && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-brand)' }} />}
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}

export default Radio;
