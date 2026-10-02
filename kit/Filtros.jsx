import { Filtro } from './Filtro.jsx';
import { FlechasCaretDown } from './FlechasCaretDown.jsx';

// figma node: 558:6747 Filtros (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "abierto=" + __venc(p.abierto);

export function Filtros(_p = {}) {
  const props = { ..._p, abierto: _p.abierto ?? "on" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Filtro
        style={{
          position: "relative",
          height: 60,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        icon1={<FlechasCaretDown style={{ width: "100%", height: "100%" }} />}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Filtro style={{
          position: "relative",
          height: 484,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
    </div>
  );
  const __impls = {
    // figma: Abierto=Off
    "abierto=off": __body0,
    // figma: Abierto=On
    "abierto=on": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Filtros;
