// figma node: 474:2449 Text-areas (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "estado=" + __venc(p.estado);

export function TextAreas(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Label", estado: _p.estado ?? "default", placeholder: _p.placeholder ?? "Campo completo", help: _p.help ?? "Texto de ayuda" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 120,
      opacity: 0.4,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 120,
          borderRadius: 8,
          backgroundColor: "rgb(244,244,244)",
        }}>
          <span style={{
            position: "absolute",
            left: 12,
            top: 20,
            width: 326,
            height: 98,
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
            width: 326,
            height: 15,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "100%",
            color: "rgb(180,180,180)",
          }}>{props.label}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 334,
          top: 101.455,
          width: 13,
          height: 15.273,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 13.071,
            height: 13.071,
            overflow: "hidden",
          }}>
            <svg width={8} height={2} viewBox="0 0 8 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,6,11.657)",
              transformOrigin: "0 0",
              width: 8,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 0 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,0,11.314)",
              transformOrigin: "0 0",
              width: 16,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 L 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 120,
      opacity: 0.4,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 120,
          borderRadius: 8,
          backgroundColor: "rgb(244,244,244)",
        }}>
          <span style={{
            position: "absolute",
            left: 12,
            top: 13,
            width: 326,
            height: 19,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
          }}>{props.label}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 334,
          top: 101.455,
          width: 13,
          height: 15.273,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 13.071,
            height: 13.071,
            overflow: "hidden",
          }}>
            <svg width={8} height={2} viewBox="0 0 8 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,6,11.657)",
              transformOrigin: "0 0",
              width: 8,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 0 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,0,11.314)",
              transformOrigin: "0 0",
              width: 16,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 L 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 138,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 121,
          borderRadius: 8,
          backgroundColor: "rgb(244,244,244)",
        }}>
          <span style={{
            position: "absolute",
            left: 12,
            top: 20,
            width: 326,
            height: 99,
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
            width: 326,
            height: 15,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "100%",
            color: "rgb(180,180,180)",
          }}>{props.label}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 334,
          top: 102.3,
          width: 13,
          height: 15.4,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 13.071,
            height: 13.071,
            overflow: "hidden",
          }}>
            <svg width={8} height={2} viewBox="0 0 8 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,6,11.657)",
              transformOrigin: "0 0",
              width: 8,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 0 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,0,11.314)",
              transformOrigin: "0 0",
              width: 16,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 L 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          color: "rgb(1,30,65)",
          flexShrink: 0,
        }}>{props.help}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 120,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 120,
          borderRadius: 8,
          backgroundColor: "rgb(244,244,244)",
        }}>
          <span style={{
            position: "absolute",
            left: 12,
            top: 20,
            width: 326,
            height: 98,
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
            width: 326,
            height: 15,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "100%",
            color: "rgb(180,180,180)",
          }}>{props.label}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 334,
          top: 101.455,
          width: 13,
          height: 15.273,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 13.071,
            height: 13.071,
            overflow: "hidden",
          }}>
            <svg width={8} height={2} viewBox="0 0 8 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,6,11.657)",
              transformOrigin: "0 0",
              width: 8,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 0 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,0,11.314)",
              transformOrigin: "0 0",
              width: 16,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 L 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 120,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 120,
          borderRadius: 8,
          backgroundColor: "rgb(244,244,244)",
        }}>
          <span style={{
            position: "absolute",
            left: 12,
            top: 20,
            width: 326,
            height: 98,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(1,30,65)",
          }}>{props.text1 ?? "l"}</span>
          <span style={{
            position: "absolute",
            left: 12,
            top: 4,
            width: 326,
            height: 15,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
          }}>{props.label}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 334,
          top: 101.455,
          width: 13,
          height: 15.273,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 13.071,
            height: 13.071,
            overflow: "hidden",
          }}>
            <svg width={8} height={2} viewBox="0 0 8 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,6,11.657)",
              transformOrigin: "0 0",
              width: 8,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(0,174,239)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 0 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,0,11.314)",
              transformOrigin: "0 0",
              width: 16,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(0,174,239)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 L 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 350,
      height: 120,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        overflow: "hidden",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 350,
          height: 120,
          borderRadius: 8,
          backgroundColor: "rgb(244,244,244)",
        }}>
          <span style={{
            position: "absolute",
            left: 12,
            top: 13,
            width: 326,
            height: 19,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            color: "rgb(120,120,120)",
          }}>{props.label}</span>
        </div>
        <div style={{
          position: "absolute",
          left: 334,
          top: 101.455,
          width: 13,
          height: 15.273,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 2,
            width: 13.071,
            height: 13.071,
            overflow: "hidden",
          }}>
            <svg width={8} height={2} viewBox="0 0 8 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,6,11.657)",
              transformOrigin: "0 0",
              width: 8,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 1 C 8 1.552 7.552 2 7 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={16} height={2} viewBox="0 0 16 2" fill="none" style={{
              position: "absolute",
              left: 0,
              top: 0,
              transform: "matrix(0.707,-0.707,0.707,0.707,0,11.314)",
              transformOrigin: "0 0",
              width: 16,
              height: 2,
              borderRadius: 4,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              color: "rgb(180,180,180)",
            }}>
              <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 15 0 C 15.552 0 16 0.448 16 1 L 16 1 C 16 1.552 15.552 2 15 2 L 1 2 C 0.448 2 0 1.552 0 1 L 0 1 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Estado=Disabled fill
    "estado=disabled fill": __body0,
    // figma: Estado=Disabled empty
    "estado=disabled empty": __body1,
    // figma: Estado=Fail
    "estado=fail": __body2,
    // figma: Estado=Fill
    "estado=fill": __body3,
    // figma: Estado=Focus
    "estado=focus": __body4,
    // figma: Estado=Default
    "estado=default": __body5,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default TextAreas;
