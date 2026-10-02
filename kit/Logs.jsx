import { FlechasCaretUp } from './FlechasCaretUp.jsx';
import { Log } from './Log.jsx';

// figma node: 527:5455 Logs (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Logs(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Log style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Log
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        icon1={<FlechasCaretUp style={{ transform: "scale(0.833, 0.833)", transformOrigin: "0 0" }} />}
      />
    </div>
  );
  const __impls = {
    // figma: Estado=Default
    "estado=default": __body0,
    // figma: Estado=Hover
    "estado=hover": __body0,
    // figma: Estado=Active
    "estado=active": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Logs;
