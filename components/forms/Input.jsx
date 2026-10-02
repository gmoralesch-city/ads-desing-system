import React from 'react';

/**
 * Input — boxed text field, exact ADS Figma "Inputs" atom (254×47 box, rx 7.5 →
 * 8px radius, white fill, 1px stroke). Eight documented states:
 *
 *   default        empty, idle        border #B4B4B4, label centred at 16px
 *   focus          empty, focused     border #00AEEF, label floats to 12px cyan
 *   active         being typed in     border #00AEEF, floated cyan label
 *   fill           has value, idle    border #00AEEF, floated cyan label
 *   fail           invalid            border + label + help text #E44B40
 *   inactive       read-only, empty   border #B4B4B4 at 0.4 opacity
 *   disabled       empty, disabled    border #B4B4B4 at 0.4 opacity
 *   disabled-fill  has value, blocked border #00AEEF at 0.4 opacity
 *
 * The state is derived from focus / value / error / disabled, or forced with the
 * `state` prop (specimen cards, docs). Optional 24px trailing icon inset 12px.
 */
const FIELD_STATES = ['default', 'focus', 'active', 'fill', 'fail', 'inactive', 'disabled', 'disabled-fill'];

export function Input({
  label,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  iconRight,
  iconLeft,
  helper,
  error,
  disabled = false,
  readOnly = false,
  required = false,
  state,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const hasValue = value != null && value !== '';

  const resolved =
    state && FIELD_STATES.includes(state)
      ? state
      : error
        ? 'fail'
        : disabled
          ? hasValue ? 'disabled-fill' : 'disabled'
          : readOnly
            ? 'inactive'
            : focused
              ? hasValue ? 'active' : 'focus'
              : hasValue ? 'fill' : 'default';

  const isFail = resolved === 'fail';
  const isDim = resolved === 'disabled' || resolved === 'disabled-fill' || resolved === 'inactive';
  const isBlocked = disabled || readOnly || isDim;
  // Label floats up in every state except an empty idle field.
  const floated = resolved !== 'default' && !(resolved === 'disabled' || resolved === 'inactive') ? true : hasValue;
  const cyanEdge = resolved === 'focus' || resolved === 'active' || resolved === 'fill' || resolved === 'disabled-fill';

  const borderColor = isFail
    ? 'var(--field-border-error)'
    : cyanEdge
      ? 'var(--field-border-active)'
      : 'var(--field-border)';
  const labelColor = isFail
    ? 'var(--field-error)'
    : cyanEdge
      ? 'var(--field-border-active)'
      : 'var(--field-text)';
  const helpColor = isFail ? 'var(--field-error)' : 'var(--field-text)';

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%', opacity: isDim ? 'var(--field-disabled-op)' : 1, cursor: isBlocked ? 'not-allowed' : 'text', ...style }}>
      <div style={{
        position: 'relative',
        height: 47,
        borderRadius: 8,
        background: '#fff',
        border: `1px solid ${borderColor}`,
        padding: '0 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        boxSizing: 'border-box',
        transition: 'var(--transition-action)',
      }}>
        {iconLeft && <span style={{ color: labelColor, display: 'inline-flex', flexShrink: 0, width: 24, height: 24 }}>{iconLeft}</span>}
        <div style={{ position: 'relative', flex: 1, minWidth: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {label && (
            <span style={{
              position: 'absolute', left: 0, pointerEvents: 'none',
              fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', lineHeight: '100%',
              fontSize: floated ? 12 : 16,
              top: floated ? 4 : '50%',
              transform: floated ? 'none' : 'translateY(-50%)',
              color: labelColor,
              transition: 'var(--transition-action)',
            }}>
              {label}{required && <span style={{ color: 'var(--field-error)' }}> *</span>}
            </span>
          )}
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={floated ? placeholder : ''}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-invalid={isFail || undefined}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              border: 'none', outline: 'none', background: 'transparent',
              fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 'var(--fw-medium)',
              lineHeight: '100%', color: 'var(--field-text)', minWidth: 0, width: '100%',
              padding: 0, marginTop: label && floated ? 13 : 0,
              cursor: isBlocked ? 'not-allowed' : 'text',
            }}
            {...rest}
          />
        </div>
        {iconRight && <span style={{ color: labelColor, display: 'inline-flex', flexShrink: 0, width: 24, height: 24 }}>{iconRight}</span>}
      </div>
      {(helper || error) && (
        <span style={{ fontFamily: 'var(--font-brand)', fontSize: 12, fontWeight: 'var(--fw-medium)', lineHeight: '120%', color: helpColor, padding: '0 12px' }}>
          {error || helper}
        </span>
      )}
    </label>
  );
}

export default Input;
