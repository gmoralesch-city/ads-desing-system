import { Tooltip } from '../components/feedback/Tooltip.jsx';

// figma node: 187:451 Tooltips (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "titulo=" + __venc(p.titulo) + '|' + "flecha=" + __venc(p.flecha);

export function Tooltips(_p = {}) {
  const props = { ..._p, titulo: _p.titulo ?? "off", flecha: _p.flecha ?? "arriba" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Tooltip
        style={{
          position: "relative",
          width: 116,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        tTulo={"Title"}
        descripciN={"Description"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Tooltip
        style={{
          position: "relative",
          width: 112,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        tTulo={"Title"}
        descripciN={"Description"}
      />
    </div>
  );
  const __impls = {
    // figma: Titulo=On, Flecha=Derecha
    "titulo=on|flecha=derecha": __body0,
    // figma: Titulo=On, Flecha=Izquierda
    "titulo=on|flecha=izquierda": __body0,
    // figma: Titulo=On, Flecha=Abajo
    "titulo=on|flecha=abajo": __body1,
    // figma: Titulo=On, Flecha=Arriba
    "titulo=on|flecha=arriba": __body1,
    // figma: Titulo=Off, Flecha=Derecha
    "titulo=off|flecha=derecha": __body0,
    // figma: Titulo=Off, Flecha=Izquierda
    "titulo=off|flecha=izquierda": __body0,
    // figma: Titulo=Off, Flecha=Abajo
    "titulo=off|flecha=abajo": __body1,
    // figma: Titulo=Off, Flecha=Arriba
    "titulo=off|flecha=arriba": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Tooltips;
