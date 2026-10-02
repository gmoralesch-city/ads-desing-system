import React from 'react';

/**
 * Select — underline dropdown matching the ADS form style (Figma "Selects").
 * Native select under the hood; caret icon; cyan underline on focus.
 */
export function Select({
  label, value, onChange, options = [], placeholder = 'Selecciona…',
  helper, error, disabled = false, style = {}, ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const underline = error ? 'var(--color-danger)' : focused ? 'var(--color-brand)' : 'var(--border-strong)';
  const opts = options.map(o => typeof o === 'string' ? { value: o, label: o } : o);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', width: '100%', opacity: disabled ? 0.5 : 1, ...style }}>
      {label && <span style={{ fontFamily: 'var(--font-brand)', fontSize: 14, fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{label}</span>}
      <div style={{ position: 'relative', borderBottom: `2px solid ${underline}`, padding: '6px 2px', transition: 'var(--transition-action)', display: 'flex', alignItems: 'center' }}>
        <select value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ flex: 1, appearance: 'none', WebkitAppearance: 'none', border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 'var(--fs-body)', color: value ? 'var(--text-strong)' : 'var(--text-muted)', cursor: disabled ? 'not-allowed' : 'pointer' }} {...rest}>
          <option value="" disabled hidden>{placeholder}</option>
          {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" style={{ pointerEvents: 'none' }}><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      {(helper || error) && <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-caption)', color: error ? 'var(--color-danger)' : 'var(--text-muted)' }}>{error || helper}</span>}
    </label>
  );
}

export default Select;
