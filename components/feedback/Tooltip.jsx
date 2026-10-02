import React from 'react';

const ARROW = {
  // Arrow edge -> 8×4 triangle + the panel side it pins to.
  arriba:    { panel: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 4 },     tip: { bottom: '100%', left: '50%', marginLeft: -4, borderWidth: '0 4px 4px 4px', borderColor: 'transparent transparent var(--tooltip-bg) transparent' } },
  abajo:     { panel: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 4 }, tip: { top: '100%', left: '50%', marginLeft: -4, borderWidth: '4px 4px 0 4px', borderColor: 'var(--tooltip-bg) transparent transparent transparent' } },
  izquierda: { panel: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 4 },    tip: { right: '100%', top: '50%', marginTop: -4, borderWidth: '4px 4px 4px 0', borderColor: 'transparent var(--tooltip-bg) transparent transparent' } },
  derecha:   { panel: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 4 },  tip: { left: '100%', top: '50%', marginTop: -4, borderWidth: '4px 0 4px 4px', borderColor: 'transparent transparent transparent var(--tooltip-bg)' } },
};

/**
 * Tooltip — Figma "Feedback › Tooltips".
 * Navy (#002C8D) 112px panel, 4px radius, 8px 12px padding, 4px gap, optional
 * bold title over Body copy, and an 8×4 arrow on one of four edges. The two
 * Figma axes are `title` (Titulo On/Off) and `arrow` (Flecha).
 */
export function Tooltip({
  title,
  label,
  arrow = 'arriba',
  open,
  children,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const shown = open === undefined ? hover : open;
  const a = ARROW[arrow] || ARROW.arriba;
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
      {children}
      <span role="tooltip" style={{
        position: 'absolute', ...a.panel, zIndex: 50,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4,
        boxSizing: 'border-box', width: 'var(--tooltip-w)', padding: '8px 12px',
        background: 'var(--tooltip-bg)', borderRadius: 'var(--tooltip-radius)',
        fontFamily: 'var(--font-brand)', color: 'var(--white)',
        opacity: shown ? 1 : 0, pointerEvents: 'none',
        transition: 'opacity var(--dur-action) var(--ease-standard)',
      }}>
        {title && <span style={{ fontSize: 16, lineHeight: '19px', fontWeight: 900 }}>{title}</span>}
        <span style={{ fontSize: 16, lineHeight: '19px', fontWeight: 'var(--fw-medium)' }}>{label}</span>
        <span style={{ position: 'absolute', ...a.tip, width: 0, height: 0, borderStyle: 'solid' }} />
      </span>
    </span>
  );
}

export default Tooltip;
