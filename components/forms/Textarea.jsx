import React from 'react';

/**
 * Textarea — multi-line boxed field matching Figma "Text areas" (node 474:2447).
 * Rounded 8px box, small label inside top-left, value below, native resize
 * handle bottom-right. Border + label recolor per state: cyan on focus/fill,
 * red on fail, faded grey when disabled. Help text below.
 * States: Default, Focus, Fill, Fail, Disabled empty, Disabled fill.
 */
export function Textarea({
  label, value, onChange, placeholder = '', rows = 3,
  helper, error, disabled = false, maxLength, style = {}, ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const filled = value != null && value !== '';
  const active = focused || filled;

  const borderColor = error
    ? 'var(--color-danger)'
    : active && !disabled
      ? 'var(--color-brand)'
      : 'rgb(218,218,218)';
  const labelColor = error
    ? 'var(--color-danger)'
    : disabled
      ? 'rgb(180,180,180)'
      : active
        ? 'var(--color-brand)'
        : 'rgb(135,135,135)';
  const helpColor = error ? 'var(--color-danger)' : 'rgb(1,30,65)';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', opacity: disabled ? 0.4 : 1, ...style }}>
      <div style={{
        position: 'relative', borderRadius: 8,
        background: disabled ? 'rgb(244,244,244)' : active ? '#fff' : 'rgb(248,248,248)',
        border: `1px solid ${borderColor}`,
        boxShadow: focused && !error ? '0 0 0 1px var(--color-brand)' : 'none',
        padding: '4px 12px 12px', boxSizing: 'border-box',
        transition: 'var(--transition-action)',
      }}>
        {label && (
          <span style={{ display: 'block', fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: 500, lineHeight: '100%', color: labelColor, marginBottom: 4 }}>
            {label}
          </span>
        )}
        <textarea rows={rows} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} maxLength={maxLength}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent', resize: 'vertical', display: 'block',
            fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 500, color: 'rgb(112,112,112)', lineHeight: 1.5, padding: 0 }} {...rest} />
      </div>
      {(error || helper || maxLength != null) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, padding: '0 12px' }}>
          <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: 500, lineHeight: '100%', color: helpColor }}>{error || helper}</span>
          {maxLength != null && <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: 500, color: 'rgb(135,135,135)' }}>{(value || '').length}/{maxLength}</span>}
        </div>
      )}
    </label>
  );
}

export default Textarea;
