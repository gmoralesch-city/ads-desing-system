import React from 'react';
import icons from './icon-data.js';

/**
 * Icon — the ADS line-icon set, extracted verbatim from the Figma "Protones"
 * icon families (Funciones, Objetos, Usuario, Informativo, Flechas,
 * Comunicación, Dispositvos, Vistas, Media). 93 icons.
 *
 * Two modes:
 *   <Icon name="ObjetosCreditCard" size={24} />   ← real Figma geometry
 *   <Icon><path d="…"/></Icon>                    ← raw children (24×24, 2px stroke)
 *
 * Single-colour icons paint with currentColor, so recolour via `color`.
 */
export function Icon({ name, children, size = 24, stroke = 2, color = 'currentColor', label, style = {}, viewBox = '0 0 24 24', ...rest }) {
  const common = {
    width: size, height: size,
    role: label ? 'img' : 'presentation',
    'aria-label': label, 'aria-hidden': label ? undefined : true,
    style: { display: 'inline-block', flexShrink: 0, color, ...style },
  };
  const d = name ? icons[name] : null;
  if (d) {
    return <svg {...common} viewBox={d.viewBox} fill="none" dangerouslySetInnerHTML={{ __html: d.body }} {...rest} />;
  }
  if (name) { console.warn('Icon: unknown name \'' + name + '\''); return null; }
  return (
    <svg {...common} viewBox={viewBox} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {children}
    </svg>
  );
}

export default Icon;
