import { FlechasCaretDown } from './FlechasCaretDown.jsx';
import { FlechasCaretUp } from './FlechasCaretUp.jsx';
import { FuncionesRemove } from './FuncionesRemove.jsx';

// figma node: 626:7376 Detalles (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "abierto=" + __venc(p.abierto);

export function Detalles(_p = {}) {
  const props = { ..._p, abierto: _p.abierto ?? "on" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 270,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(244,244,244)",
      ...props.style,
    }}>
      <svg height={1} viewBox="0 -0.500 270 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 270 0.5 L 270.5 0.5 L 270.5 -0.5 L 270 -0.5 L 270 0.5 Z M 0 0.5 L 270 0.5 L 270 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 20,
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Coberturas adicionales"}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <FlechasCaretDown />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 270,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(244,244,244)",
      ...props.style,
    }}>
      <svg height={1} viewBox="0 -0.500 270 1" fill="none" style={{
        position: "relative",
        height: 1,
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 270 0.5 L 270.5 0.5 L 270.5 -0.5 L 270 -0.5 L 270 0.5 Z M 0 0.5 L 270 0.5 L 270 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "21px",
          color: "rgb(66,75,90)",
          flexShrink: 0,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Coberturas adicionales"}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <FlechasCaretUp />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
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
            }}>{props.icon2 ?? <FuncionesRemove />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            lineHeight: "21px",
            color: "rgb(119,133,142)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text2 ?? "Responsabilidad Civil: $25.000"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
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
            }}>{props.icon3 ?? <FuncionesRemove />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text3 ?? "Responsabilidad Civil: $25.000"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
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
            }}>{props.icon4 ?? <FuncionesRemove />}</div>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
            whiteSpace: "nowrap",
          }}>{props.text4 ?? "Responsabilidad Civil: $25.000"}</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <FuncionesRemove style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexGrow: 1,
          }}>Responsabilidad Civil: $25.000</span>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Abierto=Off
    "abierto=off": __body0,
    // figma: Abierto=On
    "abierto=on": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Detalles;
