import { FlechasCaretUp } from './FlechasCaretUp.jsx';
import { Submenu } from './Submenu.jsx';

// figma node: 1296:17101 Submenus (5 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Submenus(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Submenu
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        icono={false}
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
      <Submenu
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        icono={false}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Submenu
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        imagen={<FlechasCaretUp />}
        icono={false}
      />
    </div>
  );
  const __impls = {
    // figma: Estado=Disabled
    "estado=disabled": __body0,
    // figma: Estado=Focus
    "estado=focus": __body1,
    // figma: Estado=Active
    "estado=active": __body2,
    // figma: Estado=Hover
    "estado=hover": __body1,
    // figma: Estado=Default
    "estado=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Submenus;
