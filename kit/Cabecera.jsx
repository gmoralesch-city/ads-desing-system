import { Columna } from './Columna.jsx';

// figma node: 585:5397 Cabecera (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo);

export function Cabecera(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "siniestros" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1110,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "rgb(244,244,244)",
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
      <div style={{
        position: "relative",
        width: 220,
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
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>Usuario</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 140,
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
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"N° de \nIdentificación"}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{
          position: "relative",
          width: 220,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Nombres Completos"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        width: 180,
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
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>Rol</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{ position: "relative", height: 19, flexShrink: 0 }}
        text1={"Estado"}
        estado={"default"}
      />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1110,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "rgb(244,244,244)",
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
      <div style={{
        position: "relative",
        width: 120,
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
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"N° de \nIdentificación"}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{
          position: "relative",
          width: 188,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Nombre del cliente"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        width: 120,
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
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"N° de \nContrato"}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 188,
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
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>N° de Caso</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{
          position: "relative",
          width: 200,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Estado"}
        estado={"default"}
      />
      <Columna
        style={{ position: "relative", height: 19, flexShrink: 0 }}
        text1={"Ejecutivo"}
        estado={"default"}
      />
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 1110,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "rgb(232,252,255)",
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
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>Tipo</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 92,
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
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"N° de \nIdentificación"}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{
          position: "relative",
          width: 152,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Nombre del Cliente"}
        estado={"default"}
      />
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
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>N° de Póliza</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{ position: "relative", height: 19, flexShrink: 0 }}
        text1={"Estado"}
        estado={"default"}
      />
      <Columna
        style={{
          position: "relative",
          width: 100,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Valor de \nPóliza"}
        estado={"default"}
      />
      <Columna
        style={{
          position: "relative",
          width: 80,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Canal"}
        estado={"default"}
      />
      <Columna
        style={{
          position: "relative",
          width: 100,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Ejecutivo"}
        estado={"default"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 1110,
      borderRadius: "4px 4px 0px 0px",
      backgroundColor: "rgb(232,252,255)",
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
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>Tipo</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 92,
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
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{"N° de \nIdentificación"}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{
          position: "relative",
          width: 152,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Nombre del Cliente"}
        estado={"default"}
      />
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
          color: "rgb(72,72,72)",
          flexShrink: 0,
        }}>N° de Cotización</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <svg width={10} height={6} viewBox="0 0 10 6" fill="none" style={{
            position: "absolute",
            left: 7,
            top: 10,
            width: 10,
            height: 6,
            color: "rgb(13,13,13)",
          }}>
            <path d={"M 10 0 L 5 6 L 0 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <Columna
        style={{
          position: "relative",
          width: 80,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Estado"}
        estado={"default"}
      />
      <Columna
        style={{
          position: "relative",
          width: 100,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}
        text1={"Valor de \nCotización"}
        estado={"default"}
      />
      <Columna
        style={{
          position: "relative",
          width: 80,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Canal"}
        estado={"default"}
      />
      <Columna
        style={{
          position: "relative",
          width: 100,
          height: 19,
          flexShrink: 0,
        }}
        text1={"Ejecutivo"}
        estado={"default"}
      />
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
export default Cabecera;
