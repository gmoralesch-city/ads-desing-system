import { Button } from '../components/buttons/Button.jsx';

// figma node: 155:593 Buttons (32 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo) + '|' + "tamaO=" + __venc(p.tamaO) + '|' + "icono=" + __venc(p.icono) + '|' + "estado=" + __venc(p.estado);

export function Buttons(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "principal", tamaO: _p.tamaO ?? "md", icono: _p.icono ?? "off", estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Button style={{
          position: "relative",
          width: 113,
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
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgb(0,139,191)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 28px 12px 28px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 20,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 9 2 C 6.791 2 5 3.791 5 6 C 5 6.032 5 6.066 5.001 6.102 C 5.012 6.567 4.701 6.978 4.25 7.094 C 2.956 7.427 2 8.603 2 10 C 2 11.657 3.343 13 5 13 L 6 13 C 6.552 13 7 13.448 7 14 C 7 14.552 6.552 15 6 15 L 5 15 C 2.239 15 0 12.761 0 10 C 0 7.937 1.248 6.168 3.029 5.404 C 3.329 2.37 5.887 0 9 0 C 11.224 0 13.163 1.209 14.199 3.003 C 17.421 3.108 20 5.753 20 9 C 20 12.314 17.314 15 14 15 C 13.448 15 13 14.552 13 14 C 13 13.448 13.448 13 14 13 C 16.209 13 18 11.209 18 9 C 18 6.791 16.209 5 14 5 C 13.889 5 13.78 5.004 13.672 5.013 C 13.245 5.048 12.843 4.807 12.673 4.414 C 12.058 2.992 10.644 2 9 2 Z M 10 8 C 10.552 8 11 8.448 11 9 L 11 16.586 L 11.293 16.293 C 11.683 15.902 12.317 15.902 12.707 16.293 C 13.098 16.683 13.098 17.317 12.707 17.707 L 10.707 19.707 C 10.52 19.895 10.265 20 10 20 C 9.735 20 9.48 19.895 9.293 19.707 L 7.293 17.707 C 6.902 17.317 6.902 16.683 7.293 16.293 C 7.683 15.902 8.317 15.902 8.707 16.293 L 9 16.586 L 9 9 C 9 8.448 9.448 8 10 8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 0px 2px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Botón</span>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgb(16,190,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "12px 28px 12px 28px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 20,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 9 2 C 6.791 2 5 3.791 5 6 C 5 6.032 5 6.066 5.001 6.102 C 5.012 6.567 4.701 6.978 4.25 7.094 C 2.956 7.427 2 8.603 2 10 C 2 11.657 3.343 13 5 13 L 6 13 C 6.552 13 7 13.448 7 14 C 7 14.552 6.552 15 6 15 L 5 15 C 2.239 15 0 12.761 0 10 C 0 7.937 1.248 6.168 3.029 5.404 C 3.329 2.37 5.887 0 9 0 C 11.224 0 13.163 1.209 14.199 3.003 C 17.421 3.108 20 5.753 20 9 C 20 12.314 17.314 15 14 15 C 13.448 15 13 14.552 13 14 C 13 13.448 13.448 13 14 13 C 16.209 13 18 11.209 18 9 C 18 6.791 16.209 5 14 5 C 13.889 5 13.78 5.004 13.672 5.013 C 13.245 5.048 12.843 4.807 12.673 4.414 C 12.058 2.992 10.644 2 9 2 Z M 10 8 C 10.552 8 11 8.448 11 9 L 11 16.586 L 11.293 16.293 C 11.683 15.902 12.317 15.902 12.707 16.293 C 13.098 16.683 13.098 17.317 12.707 17.707 L 10.707 19.707 C 10.52 19.895 10.265 20 10 20 C 9.735 20 9.48 19.895 9.293 19.707 L 7.293 17.707 C 6.902 17.317 6.902 16.683 7.293 16.293 C 7.683 15.902 8.317 15.902 8.707 16.293 L 9 16.586 L 9 9 C 9 8.448 9.448 8 10 8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "0px 0px 2px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Botón</span>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Button style={{
          position: "relative",
          width: 145,
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
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Button style={{
          position: "relative",
          width: 86,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgb(0,139,191)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 20,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 9 2 C 6.791 2 5 3.791 5 6 C 5 6.032 5 6.066 5.001 6.102 C 5.012 6.567 4.701 6.978 4.25 7.094 C 2.956 7.427 2 8.603 2 10 C 2 11.657 3.343 13 5 13 L 6 13 C 6.552 13 7 13.448 7 14 C 7 14.552 6.552 15 6 15 L 5 15 C 2.239 15 0 12.761 0 10 C 0 7.937 1.248 6.168 3.029 5.404 C 3.329 2.37 5.887 0 9 0 C 11.224 0 13.163 1.209 14.199 3.003 C 17.421 3.108 20 5.753 20 9 C 20 12.314 17.314 15 14 15 C 13.448 15 13 14.552 13 14 C 13 13.448 13.448 13 14 13 C 16.209 13 18 11.209 18 9 C 18 6.791 16.209 5 14 5 C 13.889 5 13.78 5.004 13.672 5.013 C 13.245 5.048 12.843 4.807 12.673 4.414 C 12.058 2.992 10.644 2 9 2 Z M 10 8 C 10.552 8 11 8.448 11 9 L 11 16.586 L 11.293 16.293 C 11.683 15.902 12.317 15.902 12.707 16.293 C 13.098 16.683 13.098 17.317 12.707 17.707 L 10.707 19.707 C 10.52 19.895 10.265 20 10 20 C 9.735 20 9.48 19.895 9.293 19.707 L 7.293 17.707 C 6.902 17.317 6.902 16.683 7.293 16.293 C 7.683 15.902 8.317 15.902 8.707 16.293 L 9 16.586 L 9 9 C 9 8.448 9.448 8 10 8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Botón</span>
        </div>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        borderRadius: 8,
        backgroundColor: "rgb(16,190,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 20px 8px 20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 24,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 20,
            height: 20,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 9 2 C 6.791 2 5 3.791 5 6 C 5 6.032 5 6.066 5.001 6.102 C 5.012 6.567 4.701 6.978 4.25 7.094 C 2.956 7.427 2 8.603 2 10 C 2 11.657 3.343 13 5 13 L 6 13 C 6.552 13 7 13.448 7 14 C 7 14.552 6.552 15 6 15 L 5 15 C 2.239 15 0 12.761 0 10 C 0 7.937 1.248 6.168 3.029 5.404 C 3.329 2.37 5.887 0 9 0 C 11.224 0 13.163 1.209 14.199 3.003 C 17.421 3.108 20 5.753 20 9 C 20 12.314 17.314 15 14 15 C 13.448 15 13 14.552 13 14 C 13 13.448 13.448 13 14 13 C 16.209 13 18 11.209 18 9 C 18 6.791 16.209 5 14 5 C 13.889 5 13.78 5.004 13.672 5.013 C 13.245 5.048 12.843 4.807 12.673 4.414 C 12.058 2.992 10.644 2 9 2 Z M 10 8 C 10.552 8 11 8.448 11 9 L 11 16.586 L 11.293 16.293 C 11.683 15.902 12.317 15.902 12.707 16.293 C 13.098 16.683 13.098 17.317 12.707 17.707 L 10.707 19.707 C 10.52 19.895 10.265 20 10 20 C 9.735 20 9.48 19.895 9.293 19.707 L 7.293 17.707 C 6.902 17.317 6.902 16.683 7.293 16.293 C 7.683 15.902 8.317 15.902 8.707 16.293 L 9 16.586 L 9 9 C 9 8.448 9.448 8 10 8 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 10,
          padding: "2px 0px 2px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Botón</span>
        </div>
      </div>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Button style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }} />
    </div>
  );
  const __impls = {
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=Off, Estado=Disabled
    "tipo=secuendario|tamaO=lg|icono=off|estado=disabled": __body0,
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=Off, Estado=Active
    "tipo=secuendario|tamaO=lg|icono=off|estado=active": __body1,
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=Off, Estado=Hover
    "tipo=secuendario|tamaO=lg|icono=off|estado=hover": __body2,
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=Off, Estado=Default
    "tipo=secuendario|tamaO=lg|icono=off|estado=default": __body0,
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=On, Estado=Disabled
    "tipo=secuendario|tamaO=lg|icono=on|estado=disabled": __body3,
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=On, Estado=Active
    "tipo=secuendario|tamaO=lg|icono=on|estado=active": __body1,
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=On, Estado=Hover
    "tipo=secuendario|tamaO=lg|icono=on|estado=hover": __body2,
    // figma: Tipo=Secuendario, Tamaño=Large, Icono=On, Estado=Default
    "tipo=secuendario|tamaO=lg|icono=on|estado=default": __body3,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=Off, Estado=Disabled
    "tipo=secuendario|tamaO=md|icono=off|estado=disabled": __body4,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=Off, Estado=Active
    "tipo=secuendario|tamaO=md|icono=off|estado=active": __body5,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=Off, Estado=Hover
    "tipo=secuendario|tamaO=md|icono=off|estado=hover": __body6,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=Off, Estado=Default
    "tipo=secuendario|tamaO=md|icono=off|estado=default": __body4,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=On, Estado=Disabled
    "tipo=secuendario|tamaO=md|icono=on|estado=disabled": __body7,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=On, Estado=Active
    "tipo=secuendario|tamaO=md|icono=on|estado=active": __body5,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=On, Estado=Hover
    "tipo=secuendario|tamaO=md|icono=on|estado=hover": __body6,
    // figma: Tipo=Secuendario, Tamaño=Medium, Icono=On, Estado=Default
    "tipo=secuendario|tamaO=md|icono=on|estado=default": __body7,
    // figma: Tipo=Principal, Tamaño=Large, Icono=Off, Estado=Disabled
    "tipo=principal|tamaO=lg|icono=off|estado=disabled": __body0,
    // figma: Tipo=Principal, Tamaño=Large, Icono=Off, Estado=Active
    "tipo=principal|tamaO=lg|icono=off|estado=active": __body1,
    // figma: Tipo=Principal, Tamaño=Large, Icono=Off, Estado=Hover
    "tipo=principal|tamaO=lg|icono=off|estado=hover": __body2,
    // figma: Tipo=Principal, Tamaño=Large, Icono=Off, Estado=Default
    "tipo=principal|tamaO=lg|icono=off|estado=default": __body0,
    // figma: Tipo=Principal, Tamaño=Large, Icono=On, Estado=Disabled
    "tipo=principal|tamaO=lg|icono=on|estado=disabled": __body3,
    // figma: Tipo=Principal, Tamaño=Large, Icono=On, Estado=Active
    "tipo=principal|tamaO=lg|icono=on|estado=active": __body1,
    // figma: Tipo=Principal, Tamaño=Large, Icono=On, Estado=Hover
    "tipo=principal|tamaO=lg|icono=on|estado=hover": __body2,
    // figma: Tipo=Principal, Tamaño=Large, Icono=On, Estado=Default
    "tipo=principal|tamaO=lg|icono=on|estado=default": __body3,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=Off, Estado=Disabled
    "tipo=principal|tamaO=md|icono=off|estado=disabled": __body4,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=Off, Estado=Active
    "tipo=principal|tamaO=md|icono=off|estado=active": __body5,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=Off, Estado=Hover
    "tipo=principal|tamaO=md|icono=off|estado=hover": __body6,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=Off, Estado=Default
    "tipo=principal|tamaO=md|icono=off|estado=default": __body4,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=On, Estado=Disabled
    "tipo=principal|tamaO=md|icono=on|estado=disabled": __body7,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=On, Estado=Active
    "tipo=principal|tamaO=md|icono=on|estado=active": __body5,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=On, Estado=Hover
    "tipo=principal|tamaO=md|icono=on|estado=hover": __body6,
    // figma: Tipo=Principal, Tamaño=Medium, Icono=On, Estado=Default
    "tipo=principal|tamaO=md|icono=on|estado=default": __body7,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default Buttons;
