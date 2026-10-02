import { FuncionesFavorite } from './FuncionesFavorite.jsx';
import { StepperH } from './StepperH.jsx';

// figma node: 2612:12734 Steppers (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "paso=" + __venc(p.paso);

export function Steppers(_p = {}) {
  const props = { ..._p, paso: _p.paso ?? "primero" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <StepperH style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }} />
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        isolation: "isolate",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(0,174,239)",
          zIndex: 5,
          flexShrink: 0,
        }}>
          <FuncionesFavorite style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
            }} />
          <div style={{
            position: "absolute",
            left: 49,
            top: 10,
            width: 38,
            height: 19,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 38,
              height: 19,
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,174,239)",
              textDecoration: "underline",
            }}>Paso</span>
          </div>
        </div>
        <svg width={162.500} viewBox="0 -0.500 162.500 1" fill="none" style={{
          position: "relative",
          width: 162.5,
          zIndex: 4,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(0,0,0)",
        }}>
          <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          zIndex: 3,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 10,
            top: 8,
            width: 20,
            height: 24,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
          }}>2</span>
          <span style={{
            position: "absolute",
            left: 52,
            top: 10,
            width: 38,
            height: 19,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,51,161)",
          }}>Paso</span>
        </div>
        <svg width={162.500} viewBox="0 -0.500 162.500 1" fill="none" style={{
          position: "relative",
          width: 162.5,
          zIndex: 2,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(120,120,120)",
        }}>
          <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          zIndex: 1,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 8,
            top: 8,
            width: 24,
            height: 24,
            overflow: "hidden",
          }}>
            <svg width={18} height={14} viewBox="0 0 18 14" fill="none" style={{
              position: "absolute",
              left: 3,
              top: 5,
              width: 18,
              height: 14,
              color: "rgb(13,13,13)",
            }}>
              <path d={"M 17.664 0.253 C 18.077 0.62 18.114 1.252 17.747 1.664 L 7.081 13.664 C 6.891 13.878 6.619 14 6.333 14 C 6.048 14 5.776 13.878 5.586 13.664 L 0.253 7.664 C -0.114 7.252 -0.077 6.62 0.336 6.253 C 0.748 5.886 1.381 5.923 1.747 6.336 L 6.333 11.495 L 16.253 0.336 C 16.62 -0.077 17.252 -0.114 17.664 0.253 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
          <span style={{
            position: "absolute",
            left: 10,
            top: 8,
            width: 20,
            height: 24,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(0,174,239)",
          }}>3</span>
          <span style={{
            position: "absolute",
            left: 1,
            top: 44,
            width: 38,
            height: 19,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,0,0)",
            textDecoration: "underline",
          }}>Paso</span>
        </div>
      </div>
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        isolation: "isolate",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(0,174,239)",
          zIndex: 5,
          flexShrink: 0,
        }}>
          <FuncionesFavorite style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
            }} />
          <div style={{
            position: "absolute",
            left: 49,
            top: 10,
            width: 38,
            height: 19,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 38,
              height: 19,
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,174,239)",
              textDecoration: "underline",
            }}>Paso</span>
          </div>
        </div>
        <svg viewBox="0 -0.500 162.500 1" fill="none" style={{
          position: "relative",
          zIndex: 4,
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgb(0,0,0)",
        }}>
          <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(0,174,239)",
          zIndex: 3,
          flexShrink: 0,
        }}>
          <FuncionesFavorite style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
            }} />
          <div style={{
            position: "absolute",
            left: 49,
            top: 10,
            width: 38,
            height: 19,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 38,
              height: 19,
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,174,239)",
              textDecoration: "underline",
            }}>Paso</span>
          </div>
        </div>
        <svg viewBox="0 -0.500 162.500 1" fill="none" style={{
          position: "relative",
          zIndex: 2,
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgb(120,120,120)",
        }}>
          <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          zIndex: 1,
          flexShrink: 0,
        }}>
          <span style={{
            position: "absolute",
            left: 10,
            top: 8,
            width: 20,
            height: 24,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
          }}>3</span>
          <span style={{
            position: "absolute",
            left: 52,
            top: 10,
            width: 38,
            height: 19,
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(0,51,161)",
          }}>Paso</span>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        isolation: "isolate",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(0,174,239)",
          zIndex: 5,
          flexShrink: 0,
        }}>
          <FuncionesFavorite style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
            }} />
          <div style={{
            position: "absolute",
            left: 49,
            top: 10,
            width: 38,
            height: 19,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 38,
              height: 19,
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,174,239)",
              textDecoration: "underline",
            }}>Paso</span>
          </div>
        </div>
        <svg viewBox="0 -0.500 162.500 1" fill="none" style={{
          position: "relative",
          zIndex: 4,
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgb(0,0,0)",
        }}>
          <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(0,174,239)",
          zIndex: 3,
          flexShrink: 0,
        }}>
          <FuncionesFavorite style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
            }} />
          <div style={{
            position: "absolute",
            left: 49,
            top: 10,
            width: 38,
            height: 19,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 38,
              height: 19,
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,174,239)",
              textDecoration: "underline",
            }}>Paso</span>
          </div>
        </div>
        <svg viewBox="0 -0.500 162.500 1" fill="none" style={{
          position: "relative",
          zIndex: 2,
          flexGrow: 1,
          alignSelf: "stretch",
          color: "rgb(120,120,120)",
        }}>
          <path d={"M 0 -0.5 L -0.5 -0.5 L -0.5 0.5 L 0 0.5 L 0 -0.5 Z M 162.5 0.5 L 163 0.5 L 163 -0.5 L 162.5 -0.5 L 162.5 0.5 Z M 0 0.5 L 162.5 0.5 L 162.5 -0.5 L 0 -0.5 L 0 0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 40,
          height: 40,
          borderRadius: 8,
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(0,174,239)",
          zIndex: 1,
          flexShrink: 0,
        }}>
          <FuncionesFavorite style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 24,
              height: 24,
            }} />
          <div style={{
            position: "absolute",
            left: 49,
            top: 10,
            width: 38,
            height: 19,
            overflow: "hidden",
          }}>
            <span style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 38,
              height: 19,
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(0,174,239)",
              textDecoration: "underline",
            }}>Paso</span>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Paso=Primero
    "paso=primero": __body0,
    // figma: Paso=Segundo
    "paso=segundo": __body1,
    // figma: Paso=Tercero
    "paso=tercero": __body2,
    // figma: Paso=Fin
    "paso=fin": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Steppers;
