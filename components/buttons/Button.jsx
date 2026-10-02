import React from 'react';

/**
 * Button — primary call-to-action for Aseguradora del Sur.
 * Cyan brand fill by default; rounded 8px; Mulish medium 16px.
 */
export function Button({
  children,
  variant = 'primary',   // 'primary' | 'secondary' | 'ghost' | 'link'
  size = 'md',           // 'sm' | 'md' | 'lg'
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { height: 36, padding: '0 16px', font: 14 },
    md: { height: 40, padding: '0 20px', font: 16 },
    lg: { height: 48, padding: '0 28px', font: 16 },
  };
  const s = sizes[size] || sizes.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-brand)',
    fontWeight: 'var(--fw-medium)',
    fontSize: s.font,
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'var(--transition-action)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    boxSizing: 'border-box',
  };

  const variants = {
    primary: {
      background: 'var(--color-brand)',
      color: 'var(--text-on-brand)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--color-brand-dark)',
      borderColor: 'var(--color-brand)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
    },
    link: {
      background: 'transparent',
      color: 'var(--text-link)',
      height: 'auto',
      padding: '0',
      borderRadius: 0,
      textDecoration: 'underline',
      textUnderlineOffset: 3,
    },
  };

  const disabledStyle = disabled
    ? (variant === 'primary'
        ? { background: 'var(--neutral-300)', color: 'var(--neutral-500)', boxShadow: 'none' }
        : { color: 'var(--neutral-400)', borderColor: 'var(--neutral-300)', textDecoration: 'none' })
    : {};

  const merged = { ...base, ...variants[variant], ...disabledStyle, ...style };

  function onEnter(e) {
    if (disabled) return;
    if (variant === 'primary') {
      e.currentTarget.style.background = 'var(--color-brand-dark)';
      e.currentTarget.style.boxShadow = 'var(--shadow-button)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.background = 'var(--color-brand-wash)';
    } else if (variant === 'ghost') {
      e.currentTarget.style.background = 'var(--neutral-100)';
    } else if (variant === 'link') {
      e.currentTarget.style.opacity = '0.7';
    }
  }
  function onLeave(e) {
    if (disabled) return;
    e.currentTarget.style.background = merged.background;
    e.currentTarget.style.boxShadow = 'none';
    e.currentTarget.style.opacity = '1';
  }

  return (
    <button type="button" disabled={disabled} style={merged} onMouseEnter={onEnter} onMouseLeave={onLeave} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export default Button;
