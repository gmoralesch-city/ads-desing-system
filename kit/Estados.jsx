import { Estado } from './Estado.jsx';

// figma node: 853:14398 Estados (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Estados(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "proceso" };
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
      <Estado
        style={{
          position: "relative",
          width: 650,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Bloqueado"}
      />
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
      <Estado
        style={{
          position: "relative",
          width: 664,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"En revisión"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Estado
        style={{
          position: "relative",
          width: 672,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"En proceso"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Estado
        style={{
          position: "relative",
          width: 611,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Aprobado"}
      />
    </div>
  );
  const __impls = {
    // figma: Estado=Bloqueado
    "estado=bloqueado": __body0,
    // figma: Estado=Revisión
    "estado=revisión": __body1,
    // figma: Estado=Proceso
    "estado=proceso": __body2,
    // figma: Estado=Aprobado
    "estado=aprobado": __body3,
  };
  return (__impls[__vkey(props)] ?? __body2)();
}
export default Estados;
