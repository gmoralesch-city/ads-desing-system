import React from 'react';

/**
 * Card — white surface container with the ADS "Caja" elevation.
 * elevation: 'sm' (cajita) | 'md' (caja) | 'flat' (border only).
 */
export function Card({ children, elevation = 'md', padding = 'var(--space-6)', radius = 'var(--radius-md)', style = {}, ...rest }) {
  const shadows = {
    flat: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
  };
  return (
    <div
      style={{
        background: 'var(--surface-page)',
        borderRadius: radius,
        boxShadow: shadows[elevation] || shadows.md,
        border: elevation === 'flat' ? '1px solid var(--border-subtle)' : 'none',
        padding,
        boxSizing: 'border-box',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
