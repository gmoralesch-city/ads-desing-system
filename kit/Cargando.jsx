import { Cargar } from './Cargar.jsx';

// figma node: 235:841 Cargando (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "movimiento=" + __venc(p.movimiento);

export function Cargando(_p = {}) {
  const props = { ..._p, movimiento: _p.movimiento ?? "1" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <Cargar style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 80,
          height: 80,
          transform: "matrix(0,-1,1,0,0,80)",
          transformOrigin: "0 0",
        }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <Cargar style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 80,
          height: 80,
          transform: "matrix(-1,0,0,-1,80,80)",
          transformOrigin: "0 0",
        }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <Cargar style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 80,
          height: 80,
          transform: "matrix(0,1,-1,0,80,0)",
          transformOrigin: "0 0",
        }} />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 80,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <Cargar style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 80,
          height: 80,
        }} />
    </div>
  );
  const __impls = {
    // figma: Movimiento=4
    "movimiento=4": __body0,
    // figma: Movimiento=3
    "movimiento=3": __body1,
    // figma: Movimiento=2
    "movimiento=2": __body2,
    // figma: Movimiento=1
    "movimiento=1": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Cargando;
