import React from 'react';

/**
 * Accordion — collapsible disclosure (Figma "Collapseds" / "Detalles").
 * White card row; caret rotates; content reveals below.
 */
export function Accordion({ items = [], allowMultiple = false, style = {} }) {
  const [open, setOpen] = React.useState(() => new Set());
  function toggle(i) {
    setOpen(prev => {
      const n = new Set(allowMultiple ? prev : []);
      prev.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
            <button onClick={() => toggle(i)} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
              padding: '16px 20px', border: 'none', background: 'transparent', cursor: 'pointer', textAlign: 'left',
              fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-medium)', fontSize: 16, color: 'var(--text-strong)',
            }}>
              {it.title}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand)" strokeWidth="2"
                style={{ flexShrink: 0, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-action) var(--ease-standard)' }}>
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            {isOpen && (
              <div style={{ padding: '0 20px 18px', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', lineHeight: 1.6 }}>
                {it.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
