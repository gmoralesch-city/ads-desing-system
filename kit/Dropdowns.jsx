import { Dropdown } from '../components/navigation/Dropdown.jsx';
import { FlechasCaretUp } from './FlechasCaretUp.jsx';

// figma node: 533:6100 Dropdowns (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Dropdowns(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 540,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Dropdown
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."}
        pregunta={"Pregunta 1"}
        icon1={<FlechasCaretUp style={{ width: "100%", height: "100%" }} />}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 540,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Dropdown
        style={{
          position: "relative",
          height: 48,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        respuesta={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo."}
        pregunta={"Pregunta 1"}
      />
    </div>
  );
  const __impls = {
    // figma: Estado=Active
    "estado=active": __body0,
    // figma: Estado=Hover
    "estado=hover": __body1,
    // figma: Estado=Default
    "estado=default": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Dropdowns;
