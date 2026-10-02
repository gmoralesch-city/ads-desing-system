import { InformativoCircleArrowRight } from './InformativoCircleArrowRight.jsx';
import { InformativoCircleError } from './InformativoCircleError.jsx';
import { InformativoCircleInformation } from './InformativoCircleInformation.jsx';
import { InformativoCircleRemove } from './InformativoCircleRemove.jsx';
import { InformativoCircleWarning } from './InformativoCircleWarning.jsx';
import { Tag } from '../components/display/Tag.jsx';

// figma node: 509:2288 Tags (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Tags(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "inicializada" };
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
      <Tag
        style={{
          position: "relative",
          width: 100,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Inicializada"}
        icon1={<InformativoCircleInformation style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
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
      <Tag
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Pendiente"}
        icon1={<InformativoCircleWarning style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
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
      <Tag
        style={{
          position: "relative",
          width: 82,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Enviada"}
        icon1={<InformativoCircleArrowRight style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
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
      <Tag style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Tag
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Declinada"}
        icon1={<InformativoCircleError style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
      />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Tag
        style={{
          position: "relative",
          width: 81,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Omitida"}
        icon1={<InformativoCircleRemove style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}
      />
    </div>
  );
  const __impls = {
    // figma: Estado= Inicializada
    "estado=inicializada": __body0,
    // figma: Estado= Pendiente
    "estado=pendiente": __body1,
    // figma: Estado= Enviada
    "estado=enviada": __body2,
    // figma: Estado= Aprobada
    "estado=aprobada": __body3,
    // figma: Estado= Declinada
    "estado=declinada": __body4,
    // figma: Estado= Omitida
    "estado=omitida": __body5,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Tags;
