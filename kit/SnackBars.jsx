import { SnackBar } from './SnackBar.jsx';

// figma node: 477:3418 Snack bars (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "mensaje=" + __venc(p.mensaje);

export function SnackBars(_p = {}) {
  const props = { ..._p, mensaje: _p.mensaje ?? "informativo" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 398,
      display: "flex",
      flexDirection: "row",
      padding: "48px 0px 48px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 350,
        overflow: "hidden",
        borderRadius: 4,
        boxShadow: "0px 12px 20px 0px rgba(1,30,65,0.08)",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        padding: "0px 24px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={4} viewBox="0 0 4 70" fill="none" style={{
          position: "relative",
          width: 4,
          display: "flex",
          flexDirection: "row",
          padding: "24px 24px 24px 24px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(132,187,13)",
        }}>
          <path d={"M 0 0 L 4 0 L 4 70 L 0 70 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
            position: "absolute",
            left: 5,
            top: 5,
            width: 14,
            height: 14,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 7 5.586 L 12.293 0.293 C 12.683 -0.098 13.317 -0.098 13.707 0.293 C 14.098 0.683 14.098 1.317 13.707 1.707 L 8.414 7 L 13.707 12.293 C 14.098 12.683 14.098 13.317 13.707 13.707 C 13.317 14.098 12.683 14.098 12.293 13.707 L 7 8.414 L 1.707 13.707 C 1.317 14.098 0.683 14.098 0.293 13.707 C -0.098 13.317 -0.098 12.683 0.293 12.293 L 5.586 7 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 20,
          padding: "16px 0px 16px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(79,128,11)",
            flexGrow: 1,
          }}>Aquí va el mensaje que se quiere comunicar.</span>
        </div>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "rgb(217,217,217)",
          }} />
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 12,
            height: 12,
            overflow: "hidden",
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "absolute",
              left: 2.5,
              top: 2.5,
              width: 7,
              height: 7,
              color: "rgb(13,13,13)",
            }}>
              <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 3.5 2.793 L 6.146 0.146 C 6.342 -0.049 6.658 -0.049 6.854 0.146 C 7.049 0.342 7.049 0.658 6.854 0.854 L 4.207 3.5 L 6.854 6.146 C 7.049 6.342 7.049 6.658 6.854 6.854 C 6.658 7.049 6.342 7.049 6.146 6.854 L 3.5 4.207 L 0.854 6.854 C 0.658 7.049 0.342 7.049 0.146 6.854 C -0.049 6.658 -0.049 6.342 0.146 6.146 L 2.793 3.5 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 398,
      display: "flex",
      flexDirection: "row",
      padding: "48px 0px 48px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <SnackBar style={{ position: "relative", width: 350, flexShrink: 0 }} />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 398,
      display: "flex",
      flexDirection: "row",
      padding: "48px 0px 48px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        boxShadow: "0px 12px 20px 0px rgba(1,30,65,0.08)",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        padding: "0px 24px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={4} viewBox="0 0 4 70" fill="none" style={{
          position: "relative",
          width: 4,
          display: "flex",
          flexDirection: "row",
          padding: "24px 24px 24px 24px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(132,187,13)",
        }}>
          <path d={"M 0 0 L 4 0 L 4 70 L 0 70 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={20.693} height={19.853} viewBox="0 0 20.693 19.853" fill="none" style={{
            position: "absolute",
            left: 1.654,
            top: 2.147,
            width: 20.693,
            height: 19.853,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10.346 11.853 C 9.794 11.853 9.346 11.405 9.346 10.853 L 9.346 7.853 C 9.346 7.301 9.794 6.853 10.346 6.853 C 10.899 6.853 11.346 7.301 11.346 7.853 L 11.346 10.853 C 11.346 11.405 10.899 11.853 10.346 11.853 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.846 14.353 C 8.846 13.524 9.518 12.853 10.346 12.853 C 11.175 12.853 11.846 13.524 11.846 14.353 C 11.846 15.181 11.175 15.853 10.346 15.853 C 9.518 15.853 8.846 15.181 8.846 14.353 Z"} fill="currentColor" fillRule="nonzero" />
            <path d={"M 8.577 1.069 C 9.326 -0.356 11.366 -0.356 12.116 1.069 L 20.46 16.921 C 21.161 18.253 20.195 19.853 18.69 19.853 L 2.003 19.853 C 0.498 19.853 -0.468 18.253 0.233 16.921 L 8.577 1.069 Z M 18.69 17.853 L 10.346 2 L 2.003 17.853 L 18.69 17.853 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 206,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          padding: "16px 0px 16px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(79,128,11)",
            flexGrow: 1,
          }}>Aquí va el mensaje que se quiere comunicar.</span>
        </div>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "rgb(217,217,217)",
          }} />
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 12,
            height: 12,
            overflow: "hidden",
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "absolute",
              left: 2.5,
              top: 2.5,
              width: 7,
              height: 7,
              color: "rgb(13,13,13)",
            }}>
              <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 3.5 2.793 L 6.146 0.146 C 6.342 -0.049 6.658 -0.049 6.854 0.146 C 7.049 0.342 7.049 0.658 6.854 0.854 L 4.207 3.5 L 6.854 6.146 C 7.049 6.342 7.049 6.658 6.854 6.854 C 6.658 7.049 6.342 7.049 6.146 6.854 L 3.5 4.207 L 0.854 6.854 C 0.658 7.049 0.342 7.049 0.146 6.854 C -0.049 6.658 -0.049 6.342 0.146 6.146 L 2.793 3.5 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 398,
      display: "flex",
      flexDirection: "row",
      padding: "48px 0px 48px 0px",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        boxShadow: "0px 12px 20px 0px rgba(1,30,65,0.08)",
        display: "flex",
        flexDirection: "row",
        gap: 24,
        padding: "0px 24px 0px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <svg width={4} viewBox="0 0 4 70" fill="none" style={{
          position: "relative",
          width: 4,
          display: "flex",
          flexDirection: "row",
          padding: "24px 24px 24px 24px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
          color: "rgb(132,187,13)",
        }}>
          <path d={"M 0 0 L 4 0 L 4 70 L 0 70 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={20} height={18} viewBox="0 0 20 18" fill="none" style={{
            position: "absolute",
            left: 2,
            top: 4,
            width: 20,
            height: 18,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 13 C 20 14.105 19.105 15 18 15 L 13.414 15 L 10.707 17.707 C 10.317 18.098 9.683 18.098 9.293 17.707 L 6.586 15 L 2 15 C 0.895 15 0 14.105 0 13 L 0 2 Z M 18 2 L 2 2 L 2 13 L 7 13 C 7.265 13 7.52 13.105 7.707 13.293 L 10 15.586 L 12.293 13.293 C 12.48 13.105 12.735 13 13 13 L 18 13 L 18 2 Z M 4 5.5 C 4 4.948 4.448 4.5 5 4.5 L 15 4.5 C 15.552 4.5 16 4.948 16 5.5 C 16 6.052 15.552 6.5 15 6.5 L 5 6.5 C 4.448 6.5 4 6.052 4 5.5 Z M 4 9.5 C 4 8.948 4.448 8.5 5 8.5 L 11 8.5 C 11.552 8.5 12 8.948 12 9.5 C 12 10.052 11.552 10.5 11 10.5 L 5 10.5 C 4.448 10.5 4 10.052 4 9.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
        <div style={{
          position: "relative",
          width: 206,
          display: "flex",
          flexDirection: "row",
          gap: 20,
          padding: "16px 0px 16px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(79,128,11)",
            flexGrow: 1,
          }}>Aquí va el mensaje que se quiere comunicar.</span>
        </div>
        <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "rgb(217,217,217)",
          }} />
          <div style={{
            position: "absolute",
            left: 4,
            top: 4,
            width: 12,
            height: 12,
            overflow: "hidden",
          }}>
            <svg width={7} height={7} viewBox="0 0 7 7" fill="none" style={{
              position: "absolute",
              left: 2.5,
              top: 2.5,
              width: 7,
              height: 7,
              color: "rgb(13,13,13)",
            }}>
              <path d={"M 0.146 0.146 C 0.342 -0.049 0.658 -0.049 0.854 0.146 L 3.5 2.793 L 6.146 0.146 C 6.342 -0.049 6.658 -0.049 6.854 0.146 C 7.049 0.342 7.049 0.658 6.854 0.854 L 4.207 3.5 L 6.854 6.146 C 7.049 6.342 7.049 6.658 6.854 6.854 C 6.658 7.049 6.342 7.049 6.146 6.854 L 3.5 4.207 L 0.854 6.854 C 0.658 7.049 0.342 7.049 0.146 6.854 C -0.049 6.658 -0.049 6.342 0.146 6.146 L 2.793 3.5 L 0.146 0.854 C -0.049 0.658 -0.049 0.342 0.146 0.146 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Mensaje=Fallido
    "mensaje=fallido": __body0,
    // figma: Mensaje=Exitoso
    "mensaje=exitoso": __body1,
    // figma: Mensaje=Advertencia
    "mensaje=advertencia": __body2,
    // figma: Mensaje=Informativo
    "mensaje=informativo": __body3,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default SnackBars;
