import React from 'react';

/**
 * Slider — range control (Figma "Slider"). Cyan filled track + round thumb.
 * Uses a native range input styled with the brand palette.
 */
export function Slider({
  value = 0, min = 0, max = 100, step = 1, onChange,
  label, formatValue, disabled = false, style = {},
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const id = React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%', opacity: disabled ? 0.5 : 1, ...style }}>
      <style>{`
        input[type=range].ads-slider-${id}{-webkit-appearance:none;appearance:none;height:6px;border-radius:999px;outline:none;
          background:linear-gradient(to right,var(--color-brand) 0%,var(--color-brand) ${pct}%,var(--neutral-200) ${pct}%,var(--neutral-200) 100%)}
        input[type=range].ads-slider-${id}::-webkit-slider-thumb{-webkit-appearance:none;width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid var(--color-brand);cursor:pointer;box-shadow:var(--shadow-button)}
        input[type=range].ads-slider-${id}::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:#fff;border:3px solid var(--color-brand);cursor:pointer}
      `}</style>
      {(label || formatValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-brand)', fontSize: 14 }}>
          {label && <span style={{ fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)' }}>{label}</span>}
          <span style={{ fontWeight: 'var(--fw-bold)', color: 'var(--color-brand-dark)' }}>{formatValue ? formatValue(value) : value}</span>
        </div>
      )}
      <input type="range" className={`ads-slider-${id}`} value={value} min={min} max={max} step={step} disabled={disabled}
        onChange={e => onChange && onChange(Number(e.target.value))} />
    </div>
  );
}

export default Slider;
