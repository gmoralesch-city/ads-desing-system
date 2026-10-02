import { FlechasArrowRight } from './FlechasArrowRight.jsx';

// figma node: 1247:16947 Controls (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Controls(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 48,
      height: 48,
      opacity: 0.2,
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 48,
        height: 48,
        opacity: 0.4,
        borderRadius: "50%",
        backgroundColor: "rgb(241,245,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 40,
          height: 40,
        }}>{props.icon1 ?? <FlechasArrowRight style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
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
        opacity: 0.4,
        borderRadius: "50%",
        backgroundColor: "rgb(77,22,196)",
      }} />
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 40,
          height: 40,
        }}>{props.icon1 ?? <FlechasArrowRight style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body2 = () => (
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
        opacity: 0.4,
        borderRadius: "50%",
        backgroundColor: "rgb(241,245,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 40,
          height: 40,
        }}>{props.icon1 ?? <FlechasArrowRight style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body3 = () => (
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
        opacity: 0.4,
        borderRadius: "50%",
        backgroundColor: "rgb(255,255,255)",
      }} />
      <div style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 40,
          height: 40,
        }}>{props.icon1 ?? <FlechasArrowRight style={{ transform: "scale(1.667, 1.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Estado=Disabled
    "estado=disabled": __body0,
    // figma: Estado=Active
    "estado=active": __body1,
    // figma: Estado=Hover
    "estado=hover": __body2,
    // figma: Estado=Default
    "estado=default": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Controls;
