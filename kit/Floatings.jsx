import { Floating } from './Floating.jsx';

// figma node: 457:2054 Floatings (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo) + '|' + "tamaO=" + __venc(p.tamaO) + '|' + "estado=" + __venc(p.estado);

export function Floatings(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "principal", tamaO: _p.tamaO ?? "lg", estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 72,
      height: 72,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 72,
          height: 72,
        }}>{props.icon1 ?? <Floating />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 48,
          height: 48,
        }}>{props.icon1 ?? <Floating style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Tipo=Secuendario, Tamaño=Large, Estado=Disabled
    "tipo=secuendario|tamaO=lg|estado=disabled": __body0,
    // figma: Tipo=Secuendario, Tamaño=Large, Estado=Active
    "tipo=secuendario|tamaO=lg|estado=active": __body0,
    // figma: Tipo=Secuendario, Tamaño=Large, Estado=Hover
    "tipo=secuendario|tamaO=lg|estado=hover": __body0,
    // figma: Tipo=Secuendario, Tamaño=Large, Estado=Default
    "tipo=secuendario|tamaO=lg|estado=default": __body0,
    // figma: Tipo=Secuendario, Tamaño=Medium, Estado=Disabled
    "tipo=secuendario|tamaO=md|estado=disabled": __body1,
    // figma: Tipo=Secuendario, Tamaño=Medium, Estado=Active
    "tipo=secuendario|tamaO=md|estado=active": __body1,
    // figma: Tipo=Secuendario, Tamaño=Medium, Estado=Hover
    "tipo=secuendario|tamaO=md|estado=hover": __body1,
    // figma: Tipo=Secuendario, Tamaño=Medium, Estado=Default
    "tipo=secuendario|tamaO=md|estado=default": __body1,
    // figma: Tipo=Principal, Tamaño=Large, Estado=Disabled
    "tipo=principal|tamaO=lg|estado=disabled": __body0,
    // figma: Tipo=Principal, Tamaño=Large, Estado=Active
    "tipo=principal|tamaO=lg|estado=active": __body0,
    // figma: Tipo=Principal, Tamaño=Large, Estado=Hover
    "tipo=principal|tamaO=lg|estado=hover": __body0,
    // figma: Tipo=Principal, Tamaño=Large, Estado=Default
    "tipo=principal|tamaO=lg|estado=default": __body0,
    // figma: Tipo=Principal, Tamaño=Medium, Estado=Disabled
    "tipo=principal|tamaO=md|estado=disabled": __body1,
    // figma: Tipo=Principal, Tamaño=Medium, Estado=Active
    "tipo=principal|tamaO=md|estado=active": __body1,
    // figma: Tipo=Principal, Tamaño=Medium, Estado=Hover
    "tipo=principal|tamaO=md|estado=hover": __body1,
    // figma: Tipo=Principal, Tamaño=Medium, Estado=Default
    "tipo=principal|tamaO=md|estado=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Floatings;
