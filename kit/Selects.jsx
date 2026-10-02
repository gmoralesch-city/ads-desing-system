import { FuncionesCheck } from './FuncionesCheck.jsx';

// figma node: 461:2567 Selects (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function Selects(_p = {}) {
  const props = { ..._p, estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 4px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(244,244,244)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <FuncionesCheck />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
          flexShrink: 0,
        }}>{props.text1 ?? "Opción 1"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 79,
            borderRadius: 20,
            backgroundColor: "rgb(232,244,212)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 8px 4px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
                position: "absolute",
                left: 1.333,
                top: 1.333,
                width: 13.333,
                height: 13.333,
                color: "rgb(13,13,13)",
              }}>
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z M 6.862 3.529 C 7.122 3.268 7.544 3.268 7.805 3.529 L 10.471 6.195 C 10.732 6.456 10.732 6.878 10.471 7.138 L 7.805 9.805 C 7.544 10.065 7.122 10.065 6.862 9.805 C 6.602 9.544 6.602 9.122 6.862 8.862 L 8.391 7.333 L 3.333 7.333 C 2.965 7.333 2.667 7.035 2.667 6.667 C 2.667 6.298 2.965 6 3.333 6 L 8.391 6 L 6.862 4.471 C 6.602 4.211 6.602 3.789 6.862 3.529 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 9,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1.7000000476837158,
              letterSpacing: "0.020em",
              color: "rgb(59,157,134)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Cert. #002</span>
          </div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 186 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 0 L 0 -0.5 Z M 186 0.5 L 186.5 0.5 L 186.5 -0.5 L 186 -0.5 L 186 0 L 186 0.5 Z M 0 0 L 0 0.5 L 186 0.5 L 186 0 L 186 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 4px 8px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(244,244,244)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <FuncionesCheck />}</div>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(0,174,239)",
          flexShrink: 0,
        }}>{props.text1 ?? "Opción 1"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 79,
            borderRadius: 20,
            backgroundColor: "rgb(232,244,212)",
            display: "flex",
            flexDirection: "row",
            gap: 4,
            padding: "4px 8px 4px 8px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 16,
              height: 16,
              overflow: "hidden",
              flexShrink: 0,
            }}>
              <svg width={13.333} height={13.333} viewBox="0 0 13.333 13.333" fill="none" style={{
                position: "absolute",
                left: 1.333,
                top: 1.333,
                width: 13.333,
                height: 13.333,
                color: "rgb(13,13,13)",
              }}>
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z M 6.862 3.529 C 7.122 3.268 7.544 3.268 7.805 3.529 L 10.471 6.195 C 10.732 6.456 10.732 6.878 10.471 7.138 L 7.805 9.805 C 7.544 10.065 7.122 10.065 6.862 9.805 C 6.602 9.544 6.602 9.122 6.862 8.862 L 8.391 7.333 L 3.333 7.333 C 2.965 7.333 2.667 7.035 2.667 6.667 C 2.667 6.298 2.965 6 3.333 6 L 8.391 6 L 6.862 4.471 C 6.602 4.211 6.602 3.789 6.862 3.529 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 9,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: 1.7000000476837158,
              letterSpacing: "0.020em",
              color: "rgb(59,157,134)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Cert. #002</span>
          </div>
        </div>
      </div>
      <svg height={1} viewBox="0 -0.500 186 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 0 L 0 -0.5 Z M 186 0.5 L 186.5 0.5 L 186.5 -0.5 L 186 -0.5 L 186 0 L 186 0.5 Z M 0 0 L 0 0.5 L 186 0.5 L 186 0 L 186 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
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
export default Selects;
