import { Input } from '../components/forms/Input.jsx';
import { UsuarioUser } from './UsuarioUser.jsx';

// figma node: 155:529 Inputs (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "icono=" + __venc(p.icono) + '|' + "estado=" + __venc(p.estado);

export function Inputs(_p = {}) {
  const props = { ..._p, icono: _p.icono ?? "on", estado: _p.estado ?? "default", label: _p.label ?? "Label", placeholder: _p.placeholder ?? "Campo lleno", help: _p.help ?? "Texto de ayuda" };
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
      <Input
        style={{
          position: "relative",
          height: 48,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Label"}
        placeholder={"Campo bloqueado"}
        help={"Texto de ayuda"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 255,
      opacity: 0.4,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 13,
          width: 42,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 21,
          width: 96,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.placeholder}</span>
        <span style={{
          position: "absolute",
          left: 12,
          top: 4,
          width: 32,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(228,75,64)",
        }}>{props.label}</span>
      </div>
      <div style={{
        position: "relative",
        width: 100,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(228,75,64)",
          flexShrink: 0,
        }}>{props.help}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 21,
          width: 96,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.placeholder}</span>
        <span style={{
          position: "absolute",
          left: 12,
          top: 4,
          width: 32,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(164,164,164)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 21,
          width: 4,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.text1 ?? "l"}</span>
        <span style={{
          position: "absolute",
          left: 12,
          top: 4,
          width: 32,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(164,164,164)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 13,
          width: 42,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 255,
      opacity: 0.4,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 219,
            top: 12,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <UsuarioUser />}</div>
        <span style={{
          position: "absolute",
          left: 12,
          top: 13,
          width: 42,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(112,112,112)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 21,
          width: 96,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.placeholder}</span>
        <div style={{
            position: "absolute",
            left: 219,
            top: 12,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <UsuarioUser />}</div>
        <span style={{
          position: "absolute",
          left: 12,
          top: 4,
          width: 32,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(135,135,135)",
        }}>{props.label}</span>
      </div>
      <div style={{
        position: "relative",
        width: 100,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "0px 12px 0px 12px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(255,80,0)",
          flexShrink: 0,
        }}>{props.help}</span>
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 21,
          width: 96,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
        }}>{props.placeholder}</span>
        <div style={{
            position: "absolute",
            left: 219,
            top: 12,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <UsuarioUser />}</div>
        <span style={{
          position: "absolute",
          left: 12,
          top: 4,
          width: 32,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(164,164,164)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "absolute",
          left: 12,
          top: 21,
          width: 4,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(112,112,112)",
        }}>{props.text1 ?? "l"}</span>
        <div style={{
            position: "absolute",
            left: 219,
            top: 12,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <UsuarioUser />}</div>
        <span style={{
          position: "absolute",
          left: 12,
          top: 4,
          width: 32,
          height: 15,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(135,135,135)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 48,
        borderRadius: 8,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "absolute",
            left: 219,
            top: 12,
            width: 24,
            height: 24,
          }}>{props.icon1 ?? <UsuarioUser />}</div>
        <span style={{
          position: "absolute",
          left: 12,
          top: 13,
          width: 42,
          height: 19,
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(112,112,112)",
        }}>{props.label}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Icono=Off, Estado=Disabled fill
    "icono=off|estado=disabled fill": __body0,
    // figma: Icono=Off, Estado=Disabled empty
    "icono=off|estado=disabled empty": __body1,
    // figma: Icono=Off, Estado=Fail
    "icono=off|estado=fail": __body2,
    // figma: Icono=Off, Estado=Fill
    "icono=off|estado=fill": __body3,
    // figma: Icono=Off, Estado=Focus
    "icono=off|estado=focus": __body4,
    // figma: Icono=Off, Estado=Default
    "icono=off|estado=default": __body5,
    // figma: Icono=On, Estado=Disabled fill
    "icono=on|estado=disabled fill": __body0,
    // figma: Icono=On, Estado=Disabled empty
    "icono=on|estado=disabled empty": __body6,
    // figma: Icono=On, Estado=Fail
    "icono=on|estado=fail": __body7,
    // figma: Icono=On, Estado=Fill
    "icono=on|estado=fill": __body8,
    // figma: Icono=On, Estado=Focus
    "icono=on|estado=focus": __body9,
    // figma: Icono=On, Estado=Default
    "icono=on|estado=default": __body10,
  };
  return (__impls[__vkey(props)] ?? __body10)();
}
export default Inputs;
