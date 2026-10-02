import React from 'react';

/**
 * Modal — centered dialog (Figma "Modals"). White rounded card on a dark scrim;
 * title row with close, body, optional footer actions. 320ms fade-in.
 */
export function Modal({
  open, onClose, title, children, footer, width = 480, style = {},
}) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'var(--scrim-modal)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      animation: 'ads-modal-fade var(--dur-action) var(--ease-standard)',
    }}>
      <style>{`@keyframes ads-modal-fade{from{opacity:0}to{opacity:1}}@keyframes ads-modal-rise{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
      <div role="dialog" aria-modal="true" onClick={e => e.stopPropagation()} style={{
        width, maxWidth: '100%', maxHeight: '90vh', overflow: 'auto',
        background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-modal)',
        animation: 'ads-modal-rise var(--dur-action) var(--ease-standard)', ...style,
      }}>
        {(title || onClose) && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '24px 24px 0' }}>
            {title && <h3 style={{ margin: 0, fontFamily: 'var(--font-brand)', fontWeight: 'var(--fw-bold)', fontSize: 22, color: 'var(--text-strong)' }}>{title}</h3>}
            {onClose && <button onClick={onClose} aria-label="Cerrar" style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 26, lineHeight: 1, padding: 0 }}>×</button>}
          </div>
        )}
        <div style={{ padding: '16px 24px 24px', fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-body)', lineHeight: 1.6 }}>
          {children}
        </div>
        {footer && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, padding: '0 24px 24px' }}>{footer}</div>
        )}
      </div>
    </div>
  );
}

export default Modal;
