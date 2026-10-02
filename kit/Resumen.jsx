import { ObjetosImage } from './ObjetosImage.jsx';

// figma node: 652:12127 Resumen (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo);

export function Resumen(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "información" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 48,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(1,30,65)",
            flexShrink: 0,
          }}>{props.text1 ?? "Estado"}</span>
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
                <svg width={10.667} height={13.333} viewBox="0 0 10.667 13.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 1.333,
                  width: 10.667,
                  height: 13.333,
                  color: "rgb(13,13,13)",
                }}>
                  <path d={"M 3.333 6.333 C 3.702 6.333 4 6.035 4 5.667 C 4 5.298 3.702 5 3.333 5 C 2.965 5 2.667 5.298 2.667 5.667 C 2.667 6.035 2.965 6.333 3.333 6.333 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 4.667 5.667 C 4.667 5.298 4.965 5 5.333 5 L 7.333 5 C 7.702 5 8 5.298 8 5.667 C 8 6.035 7.702 6.333 7.333 6.333 L 5.333 6.333 C 4.965 6.333 4.667 6.035 4.667 5.667 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 5.333 7 C 4.965 7 4.667 7.298 4.667 7.667 C 4.667 8.035 4.965 8.333 5.333 8.333 L 7.333 8.333 C 7.702 8.333 8 8.035 8 7.667 C 8 7.298 7.702 7 7.333 7 L 5.333 7 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 5.333 9 C 4.965 9 4.667 9.298 4.667 9.667 C 4.667 10.035 4.965 10.333 5.333 10.333 L 7.333 10.333 C 7.702 10.333 8 10.035 8 9.667 C 8 9.298 7.702 9 7.333 9 L 5.333 9 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 4 7.667 C 4 8.035 3.702 8.333 3.333 8.333 C 2.965 8.333 2.667 8.035 2.667 7.667 C 2.667 7.298 2.965 7 3.333 7 C 3.702 7 4 7.298 4 7.667 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 3.333 10.333 C 3.702 10.333 4 10.035 4 9.667 C 4 9.298 3.702 9 3.333 9 C 2.965 9 2.667 9.298 2.667 9.667 C 2.667 10.035 2.965 10.333 3.333 10.333 Z"} fill="currentColor" fillRule="nonzero" />
                  <path d={"M 3.333 0 C 2.965 0 2.667 0.298 2.667 0.667 L 1.333 0.667 C 0.597 0.667 0 1.264 0 2 L 0 12 C 0 12.736 0.597 13.333 1.333 13.333 L 9.333 13.333 C 10.07 13.333 10.667 12.736 10.667 12 L 10.667 2 C 10.667 1.264 10.07 0.667 9.333 0.667 L 8 0.667 C 8 0.298 7.702 0 7.333 0 L 3.333 0 Z M 8 2 L 9.333 2 L 9.333 12 L 1.333 12 L 1.333 2 L 2.667 2 L 2.667 2.667 C 2.667 3.035 2.965 3.333 3.333 3.333 L 7.333 3.333 C 7.702 3.333 8 3.035 8 2.667 L 8 2 Z M 4 2 L 4 1.333 L 6.667 1.333 L 6.667 2 L 4 2 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>Cotización</span>
            </div>
          </div>
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
                <svg width={13.333} height={10.667} viewBox="0 0 13.333 10.667" fill="none" style={{
                  position: "absolute",
                  left: 1.333,
                  top: 2.667,
                  width: 13.333,
                  height: 10.667,
                  color: "rgb(13,13,13)",
                }}>
                  <path d={"M 13.333 1.333 C 13.333 0.597 12.736 0 12 0 L 1.333 0 C 0.597 0 0 0.597 0 1.333 L 0 9.333 C 0 10.07 0.597 10.667 1.333 10.667 L 12 10.667 C 12.736 10.667 13.333 10.07 13.333 9.333 L 13.333 1.333 Z M 12 2.667 L 1.333 2.667 L 1.333 1.333 L 12 1.333 L 12 2.667 Z M 1.333 4.667 L 12 4.667 L 12 9.333 L 1.333 9.333 L 1.333 4.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>Pago</span>
            </div>
          </div>
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
                <svg width={10.667} height={13.333} viewBox="0 0 10.667 13.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 1.333,
                  width: 10.667,
                  height: 13.333,
                  color: "rgb(13,13,13)",
                }}>
                  <path d={"M 2.667 0.667 C 2.667 0.298 2.965 0 3.333 0 L 7.333 0 C 7.702 0 8 0.298 8 0.667 L 9.333 0.667 C 10.07 0.667 10.667 1.264 10.667 2 L 10.667 12 C 10.667 12.736 10.07 13.333 9.333 13.333 L 1.333 13.333 C 0.597 13.333 0 12.736 0 12 L 0 2 C 0 1.264 0.597 0.667 1.333 0.667 L 2.667 0.667 Z M 2.667 2 L 1.333 2 L 1.333 12 L 9.333 12 L 9.333 2 L 8 2 L 8 2.667 C 8 3.035 7.702 3.333 7.333 3.333 L 3.333 3.333 C 2.965 3.333 2.667 3.035 2.667 2.667 L 2.667 2 Z M 6.667 1.333 L 4 1.333 L 4 2 L 6.667 2 L 6.667 1.333 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>Inspección</span>
            </div>
          </div>
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
                <svg width={10.667} height={13.333} viewBox="0 0 10.667 13.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 1.333,
                  width: 10.667,
                  height: 13.333,
                  color: "rgb(13,13,13)",
                }}>
                  <path d={"M 0 1.333 C 0 0.597 0.597 0 1.333 0 L 6.667 0 C 6.843 0 7.013 0.07 7.138 0.195 L 10.471 3.529 C 10.596 3.654 10.667 3.823 10.667 4 L 10.667 12 C 10.667 12.736 10.07 13.333 9.333 13.333 L 1.333 13.333 C 0.597 13.333 0 12.736 0 12 L 0 1.333 Z M 9.057 4 L 6.667 1.609 L 6.667 4 L 9.057 4 Z M 5.333 1.333 L 1.333 1.333 L 1.333 12 L 9.333 12 L 9.333 5.333 L 6 5.333 C 5.632 5.333 5.333 5.035 5.333 4.667 L 5.333 1.333 Z M 2.667 7.333 C 2.667 6.965 2.965 6.667 3.333 6.667 L 7.333 6.667 C 7.702 6.667 8 6.965 8 7.333 C 8 7.702 7.702 8 7.333 8 L 3.333 8 C 2.965 8 2.667 7.702 2.667 7.333 Z M 2.667 10 C 2.667 9.632 2.965 9.333 3.333 9.333 L 7.333 9.333 C 7.702 9.333 8 9.632 8 10 C 8 10.368 7.702 10.667 7.333 10.667 L 3.333 10.667 C 2.965 10.667 2.667 10.368 2.667 10 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>FVC</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            opacity: 0.4,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
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
                <svg width={12.667} height={12.667} viewBox="0 0 12.667 12.667" fill="none" style={{
                  position: "absolute",
                  left: 2,
                  top: 1.333,
                  width: 12.667,
                  height: 12.667,
                  color: "rgb(13,13,13)",
                }}>
                  <path d={"M 9.805 0.195 C 9.544 -0.065 9.122 -0.065 8.862 0.195 L 7.333 1.724 L 6.471 0.862 C 6.211 0.602 5.789 0.602 5.529 0.862 L 1.529 4.862 C 1.268 5.122 1.268 5.544 1.529 5.805 C 1.789 6.065 2.211 6.065 2.471 5.805 L 6 2.276 L 6.391 2.667 L 4.862 4.195 L 0.195 8.862 C 0.07 8.987 0 9.157 0 9.333 L 0 12 C 0 12.368 0.298 12.667 0.667 12.667 L 3.333 12.667 C 3.51 12.667 3.68 12.596 3.805 12.471 L 8.471 7.805 L 12.471 3.805 C 12.732 3.544 12.732 3.122 12.471 2.862 L 9.805 0.195 Z M 7.805 3.138 L 9.333 1.609 L 11.057 3.333 L 8 6.391 L 6.276 4.667 L 7.805 3.138 Z M 1.333 9.609 L 5.333 5.609 L 7.057 7.333 L 3.057 11.333 L 1.333 11.333 L 1.333 9.609 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>Firma</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            opacity: 0.4,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
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
                <svg width={10.667} height={13.333} viewBox="0 0 10.667 13.333" fill="none" style={{
                  position: "absolute",
                  left: 2.667,
                  top: 1.333,
                  width: 10.667,
                  height: 13.333,
                  color: "rgb(13,13,13)",
                }}>
                  <path d={"M 0 1.333 C 0 0.597 0.597 0 1.333 0 L 6.667 0 C 6.843 0 7.013 0.07 7.138 0.195 L 10.471 3.529 C 10.596 3.654 10.667 3.823 10.667 4 L 10.667 12 C 10.667 12.736 10.07 13.333 9.333 13.333 L 1.333 13.333 C 0.597 13.333 0 12.736 0 12 L 0 1.333 Z M 9.057 4 L 6.667 1.609 L 6.667 4 L 9.057 4 Z M 5.333 1.333 L 1.333 1.333 L 1.333 12 L 9.333 12 L 9.333 5.333 L 6 5.333 C 5.632 5.333 5.333 5.035 5.333 4.667 L 5.333 1.333 Z M 7.805 6.862 C 8.065 7.122 8.065 7.544 7.805 7.805 L 5.138 10.471 C 4.878 10.732 4.456 10.732 4.195 10.471 L 2.862 9.138 C 2.602 8.878 2.602 8.456 2.862 8.195 C 3.122 7.935 3.544 7.935 3.805 8.195 L 4.667 9.057 L 6.862 6.862 C 7.122 6.602 7.544 6.602 7.805 6.862 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>Negocio</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            opacity: 0.4,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
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
                  <path d={"M 2.453 3.396 C 1.751 4.299 1.333 5.434 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 7.899 12 9.034 11.582 9.937 10.88 L 2.453 3.396 Z M 3.396 2.453 L 10.88 9.937 C 11.582 9.034 12 7.899 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 C 5.434 1.333 4.299 1.751 3.396 2.453 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z"} fill="currentColor" fillRule="nonzero" />
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
              }}>Cancelación</span>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 2,
              height: 38,
              opacity: 0,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(0,139,191)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(217,217,217)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(0,139,191)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(217,217,217)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(0,139,191)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(0,139,191)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(0,139,191)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(0,139,191)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              opacity: 0,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              width: 2,
              height: 14,
              opacity: 0,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: "rgb(0,139,191)",
              flexShrink: 0,
            }} />
            <div style={{
              position: "relative",
              width: 2,
              height: 8,
              opacity: 0,
              backgroundColor: "rgb(32,190,255)",
              flexShrink: 0,
            }} />
          </div>
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
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(72,72,72)",
            flexShrink: 0,
          }}>{props.text2 ?? "Sub-estado"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(80,93,104)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text3 ?? "Vigente"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text4 ?? "Exitoso"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>En revisión</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Pendiente</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Pendiente</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Pendiente</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>Pendiente</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          whiteSpace: "nowrap",
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>Actualización</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>03/05/22    10:44</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>03/05/22    10:52</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>03/05/22    11:20</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "24px",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>03/05/22    11:20</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(180,180,180)",
            flexShrink: 0,
          }}>03/05/22    11:20</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(180,180,180)",
            flexShrink: 0,
          }}>03/05/22    11:20</span>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(180,180,180)",
            flexShrink: 0,
          }}>03/05/22    11:20</span>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 270,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(244,244,244)",
      display: "flex",
      flexDirection: "row",
      padding: "20px 8px 20px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 200,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-end",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>{props.text1 ?? "Fecha del reporte:"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>{props.text2 ?? "Asegurado: "}</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>{props.text3 ?? "Póliza:"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>{props.text4 ?? "Vehículo:"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>Placa:</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>Correo electrónico: </span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>Número de contacto </span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>Servicio solicitado:</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>Ubicación:</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "pre-wrap",
          }}>{"Cédula de identificación \ndel asegurado:"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 900,
            fontSize: 16,
            textAlign: "right",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
            whiteSpace: "pre-wrap",
          }}>{"Matrícula del vehículo \nasegurado:"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 300,
            fontSize: 16,
            textAlign: "right",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>Correo electrónico: </span>
        </div>
        <div style={{
          position: "relative",
          width: 120,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(80,93,104)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 44,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon1 ?? <ObjetosImage />}</div>
            <div style={{
                position: "relative",
                width: 44,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon2 ?? <ObjetosImage />}</div>
          </div>
          <div style={{
            position: "relative",
            height: 44,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
                position: "relative",
                width: 44,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon3 ?? <ObjetosImage />}</div>
            <div style={{
                position: "relative",
                width: 44,
                flexShrink: 0,
                alignSelf: "stretch",
                height: "auto",
              }}>{props.icon4 ?? <ObjetosImage />}</div>
          </div>
          <span style={{
            position: "relative",
            fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 300,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(255,255,255)",
            flexShrink: 0,
          }}>“Texto lleno”</span>
        </div>
      </div>
      <div style={{
        position: "absolute",
        left: 342,
        top: 4,
        width: 4,
        height: 100,
        backgroundColor: "rgb(180,180,180)",
      }} />
    </div>
  );
  const __impls = {
    // figma: Tipo=Proceso
    "tipo=proceso": __body0,
    // figma: Tipo=Información
    "tipo=información": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Resumen;
