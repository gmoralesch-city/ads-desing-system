import React from 'react';

/**
 * Dropdown — click menu (Figma "Dropdowns" / "Submenus"). White surface,
 * soft navy shadow, cyan-wash hover on items. Renders a trigger + menu.
 */
export function Dropdown({ trigger, items = [], align = 'left', style = {} }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    function onDoc(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block', ...style }}>
      <span onClick={() => setOpen(o => !o)} style={{ cursor: 'pointer', display: 'inline-flex' }}>{trigger}</span>
      {open && (
        <div role="menu" style={{
          position: 'absolute', top: 'calc(100% + 6px)', [align]: 0, zIndex: 40,
          minWidth: 180, background: '#fff', borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-md)', padding: 6, overflow: 'hidden',
        }}>
          {items.map((it, i) => it.divider
            ? <div key={i} style={{ height: 1, background: 'var(--border-subtle)', margin: '6px 4px' }} />
            : (
              <button key={i} role="menuitem" onClick={() => { setOpen(false); it.onClick && it.onClick(); }}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: 10, textAlign: 'left',
                  padding: '9px 12px', border: 'none', borderRadius: 'var(--radius-sm)', background: 'transparent',
                  cursor: 'pointer', fontFamily: 'var(--font-brand)', fontSize: 14, fontWeight: 'var(--fw-medium)',
                  color: it.danger ? 'var(--color-danger)' : 'var(--text-strong)',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--color-brand-wash)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                {it.icon}{it.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
