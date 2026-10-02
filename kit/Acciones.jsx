import { FuncionesOptionsVertical } from './FuncionesOptionsVertical.jsx';

// figma node: 576:6281 Acciones (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Acciones(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      borderRadius: 4,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
        }}>{props.icon1 ?? <FuncionesOptionsVertical />}</div>
    </div>
  );
  const __impls = {
    // figma: Estado=Active
    "estado=active": __body0,
    // figma: Estado=Hover
    "estado=hover": __body0,
    // figma: Estado=Default
    "estado=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Acciones;
