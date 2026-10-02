import React from 'react';

/** Checkbox — square selector with cyan fill + white check when on. */
export function Checkbox({ checked = false, onChange, label, disabled = false, style = {} }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 20, height: 20, flex: '0 0 auto',
          borderRadius: 'var(--radius-xs)',
          border: `2px solid ${checked ? 'var(--color-brand)' : 'var(--border-strong)'}`,
          background: checked ? 'var(--color-brand)' : 'transparent',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'var(--transition-action)',
        }}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        )}
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: 'var(--text-body)' }}>{label}</span>}
    </label>
  );
}

export default Checkbox;
