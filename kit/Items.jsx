import { Acciones } from './Acciones.jsx';
import { FuncionesClose } from './FuncionesClose.jsx';
import { FuncionesDelete } from './FuncionesDelete.jsx';
import { FuncionesEdit } from './FuncionesEdit.jsx';
import { FuncionesEye } from './FuncionesEye.jsx';

// figma node: 585:5464 Items (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo);

export function Items(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "siniestros" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1110,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(244,244,244)",
      borderRight: "1px solid rgb(244,244,244)",
      borderBottom: "1px solid rgb(244,244,244)",
      borderLeft: "1px solid rgb(244,244,244)",
      display: "flex",
      flexDirection: "row",
      gap: 28,
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "marialopez@aps.com"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        color: "rgb(80,93,104)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "1723456809"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        color: "rgb(80,93,104)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "Maria Sol Lopez Ruiz"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "Administrador"}</span>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "0px 10px 0px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
            width: 53,
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
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z M 9.776 4.502 C 10.051 4.746 10.076 5.168 9.832 5.443 L 6.276 9.443 C 6.15 9.585 5.968 9.667 5.778 9.667 C 5.587 9.667 5.406 9.585 5.28 9.443 L 3.502 7.443 C 3.257 7.168 3.282 6.746 3.557 6.502 C 3.832 6.257 4.254 6.282 4.498 6.557 L 5.778 7.997 L 8.835 4.557 C 9.08 4.282 9.501 4.257 9.776 4.502 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(80,93,104)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Activo</span>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon2 ?? <Acciones icon1={<FuncionesEdit style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon3 ?? <Acciones icon1={<FuncionesDelete style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1110,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(244,244,244)",
      borderRight: "1px solid rgb(244,244,244)",
      borderBottom: "1px solid rgb(244,244,244)",
      borderLeft: "1px solid rgb(244,244,244)",
      display: "flex",
      flexDirection: "row",
      gap: 28,
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "1728453707"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "Maria Sol Lopez Ruiz"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "24px",
        color: "rgb(80,93,104)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text3 ?? "292839201"}</span>
      <div style={{
        position: "relative",
        width: 188,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
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
          color: "rgb(120,120,120)",
          flexShrink: 0,
        }}>{props.text4 ?? "ECVHOR22000001 "}</span>
        <div style={{
            position: "relative",
            width: 24,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Acciones icon1={<FuncionesEye style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 200,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
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
            width: 195,
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
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 6.667 5.333 C 7.035 5.333 7.333 5.632 7.333 6 L 7.333 10 C 7.333 10.368 7.035 10.667 6.667 10.667 C 6.298 10.667 6 10.368 6 10 L 6 6 C 6 5.632 6.298 5.333 6.667 5.333 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 7.667 3.667 C 7.667 4.219 7.219 4.667 6.667 4.667 C 6.114 4.667 5.667 4.219 5.667 3.667 C 5.667 3.114 6.114 2.667 6.667 2.667 C 7.219 2.667 7.667 3.114 7.667 3.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(80,93,104)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Fecha de entrega de repuestos</span>
          </div>
        </div>
      </div>
      <span style={{
        position: "relative",
        width: 112,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>Maria Lopez</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1110,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(241,245,255)",
      borderRight: "1px solid rgb(241,245,255)",
      borderBottom: "1px solid rgb(241,245,255)",
      borderLeft: "1px solid rgb(241,245,255)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 78,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            width: 83,
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
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 6.667 8 C 6.298 8 6 7.702 6 7.333 L 6 3.333 C 6 2.965 6.298 2.667 6.667 2.667 C 7.035 2.667 7.333 2.965 7.333 3.333 L 7.333 7.333 C 7.333 7.702 7.035 8 6.667 8 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 5.667 9.667 C 5.667 9.114 6.114 8.667 6.667 8.667 C 7.219 8.667 7.667 9.114 7.667 9.667 C 7.667 10.219 7.219 10.667 6.667 10.667 C 6.114 10.667 5.667 10.219 5.667 9.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(80,93,104)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Renovación</span>
          </div>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "1728453707"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "Maria Sol Lopez Ruiz"}</span>
      <div style={{
        position: "relative",
        width: 140,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
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
          color: "rgb(120,120,120)",
          flexShrink: 0,
        }}>{props.text3 ?? "ECVHOR22001  "}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Acciones icon1={<FuncionesEye style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 112,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 111,
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
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 6.667 5.333 C 7.035 5.333 7.333 5.632 7.333 6 L 7.333 10 C 7.333 10.368 7.035 10.667 6.667 10.667 C 6.298 10.667 6 10.368 6 10 L 6 6 C 6 5.632 6.298 5.333 6.667 5.333 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 7.667 3.667 C 7.667 4.219 7.219 4.667 6.667 4.667 C 6.114 4.667 5.667 4.219 5.667 3.667 C 5.667 3.114 6.114 2.667 6.667 2.667 C 7.219 2.667 7.667 3.114 7.667 3.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(79,132,136)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Negocio perdido</span>
          </div>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "$ 2.400,80"}</span>
      <span style={{
        position: "relative",
        width: 80,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>Cifraseg</span>
      <span style={{
        position: "relative",
        width: 100,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>Maria Lopez</span>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon2 ?? <Acciones icon1={<FuncionesClose style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1110,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(241,245,255)",
      borderRight: "1px solid rgb(241,245,255)",
      borderBottom: "1px solid rgb(241,245,255)",
      borderLeft: "1px solid rgb(241,245,255)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "20px 20px 20px 20px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 78,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
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
            width: 83,
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
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 6.667 8 C 6.298 8 6 7.702 6 7.333 L 6 3.333 C 6 2.965 6.298 2.667 6.667 2.667 C 7.035 2.667 7.333 2.965 7.333 3.333 L 7.333 7.333 C 7.333 7.702 7.035 8 6.667 8 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 5.667 9.667 C 5.667 9.114 6.114 8.667 6.667 8.667 C 7.219 8.667 7.667 9.114 7.667 9.667 C 7.667 10.219 7.219 10.667 6.667 10.667 C 6.114 10.667 5.667 10.219 5.667 9.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              color: "rgb(176,132,0)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Renovación</span>
          </div>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text1 ?? "1728453707"}</span>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        alignSelf: "stretch",
        whiteSpace: "nowrap",
      }}>{props.text2 ?? "Maria Sol Lopez Ruiz"}</span>
      <div style={{
        position: "relative",
        width: 172,
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center",
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
          color: "rgb(120,120,120)",
          flexShrink: 0,
        }}>{props.text3 ?? "ECVHOR22000001 "}</span>
        <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>{props.icon1 ?? <Acciones icon1={<FuncionesEye style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 80,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 78,
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
                <path d={"M 6.667 1.333 C 3.721 1.333 1.333 3.721 1.333 6.667 C 1.333 9.612 3.721 12 6.667 12 C 9.612 12 12 9.612 12 6.667 C 12 3.721 9.612 1.333 6.667 1.333 Z M 0 6.667 C 0 2.985 2.985 0 6.667 0 C 10.349 0 13.333 2.985 13.333 6.667 C 13.333 10.349 10.349 13.333 6.667 13.333 C 2.985 13.333 0 10.349 0 6.667 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 6.667 5.333 C 7.035 5.333 7.333 5.632 7.333 6 L 7.333 10 C 7.333 10.368 7.035 10.667 6.667 10.667 C 6.298 10.667 6 10.368 6 10 L 6 6 C 6 5.632 6.298 5.333 6.667 5.333 Z"} fill="currentColor" fillRule="nonzero" />
                <path d={"M 7.667 3.667 C 7.667 4.219 7.219 4.667 6.667 4.667 C 6.114 4.667 5.667 4.219 5.667 3.667 C 5.667 3.114 6.114 2.667 6.667 2.667 C 7.219 2.667 7.667 3.114 7.667 3.667 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
            <span style={{
              position: "relative",
              fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              textAlign: "center",
              whiteSpace: "nowrap",
              lineHeight: "24px",
              color: "rgb(80,93,104)",
              textTransform: "uppercase",
              flexShrink: 0,
            }}>Cotización</span>
          </div>
        </div>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}>{props.text4 ?? "$ 2.400,80"}</span>
      <span style={{
        position: "relative",
        width: 80,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>Cifraseg</span>
      <span style={{
        position: "relative",
        width: 100,
        fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: "100%",
        color: "rgb(120,120,120)",
        flexShrink: 0,
      }}>Maria Lopez</span>
      <div style={{
          position: "relative",
          width: 24,
          height: 24,
          flexShrink: 0,
        }}>{props.icon2 ?? <Acciones estado={"default"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Tipo=Usuarios
    "tipo=usuarios": __body0,
    // figma: Tipo=Siniestros
    "tipo=siniestros": __body1,
    // figma: Tipo=Ventas
    "tipo=ventas": __body2,
    // figma: Tipo=Negocios
    "tipo=negocios": __body3,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Items;
