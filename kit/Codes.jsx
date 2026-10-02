import { Code } from './Code.jsx';

// figma node: 640:7947 Codes (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Codes(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 65,
      height: 80,
      position: "relative",
      ...props.style,
    }}>
      <Code
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 65,
          height: 80,
        }}
        cDigo={"1"}
      />
    </div>
  );
  const __impls = {
    // figma: Estado=Fail
    "estado=fail": __body0,
    // figma: Estado=Fill
    "estado=fill": __body0,
    // figma: Estado=Focus
    "estado=focus": __body0,
    // figma: Estado=Default
    "estado=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Codes;
