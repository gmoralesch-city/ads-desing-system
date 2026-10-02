import { FlechasCaretLeft } from './FlechasCaretLeft.jsx';
import { FlechasCaretRight } from './FlechasCaretRight.jsx';

// figma node: 566:8720 Flechas (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Flechas(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <FlechasCaretLeft />}</div>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon2 ?? <FlechasCaretRight />}</div>
    </div>
  );
  const __impls = {
    // figma: Estado=Default
    "estado=default": __body0,
    // figma: Estado=Derecha
    "estado=derecha": __body0,
    // figma: Estado=Izquierda
    "estado=izquierda": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Flechas;
