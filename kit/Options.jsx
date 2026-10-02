// figma node: 130:398 Options (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo) + '|' + "selector=" + __venc(p.selector) + '|' + "estado=" + __venc(p.estado);

export function Options(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "checkbox", selector: _p.selector ?? "off", estado: _p.estado ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 30,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 2,
          width: 28,
          height: 16,
          borderRadius: 13,
          backgroundColor: "rgb(0,174,239)",
        }} />
        <div style={{
          position: "absolute",
          left: 10,
          top: 0,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(180,180,180)",
        }} />
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 30,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 28,
          height: 16,
          borderRadius: 13,
          backgroundColor: "rgb(180,180,180)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(180,180,180)",
        }} />
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 30,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 2,
          width: 28,
          height: 16,
          borderRadius: 13,
          backgroundColor: "rgb(180,180,180)",
        }} />
        <div style={{
          position: "absolute",
          left: 10,
          top: 0,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgb(255,255,255)",
          boxShadow: "inset 0 0 0 1px rgb(180,180,180)",
        }} />
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 30,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 28,
          height: 16,
          borderRadius: 13,
          backgroundColor: "rgb(0,174,239)",
        }} />
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "rgb(255,255,255)",
        }} />
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          color: "rgb(0,174,239)",
        }}>
          <path d={"M 10 0 C 4.5 0 0 4.5 0 10 C 0 15.5 4.5 20 10 20 C 15.5 20 20 15.5 20 10 C 20 4.5 15.5 0 10 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 12,
          height: 12,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 6 12 C 2.7 12 0 9.3 0 6 C 0 2.7 2.7 0 6 0 C 9.3 0 12 2.7 12 6 C 12 9.3 9.3 12 6 12 L 6 12 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 8,
          height: 8,
          color: "rgb(0,174,239)",
        }}>
          <path d={"M 4 0 C 1.76 0 0 1.76 0 4 C 0 6.24 1.76 8 4 8 C 6.24 8 8 6.24 8 4 C 8 1.76 6.24 0 4 0 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          color: "rgb(180,180,180)",
        }}>
          <path d={"M 10 0 C 4.5 0 0 4.5 0 10 C 0 15.5 4.5 20 10 20 C 15.5 20 20 15.5 20 10 C 20 4.5 15.5 0 10 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 16,
          height: 16,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 8 16 C 3.6 16 0 12.4 0 8 C 0 3.6 3.6 0 8 0 C 12.4 0 16 3.6 16 8 C 16 12.4 12.4 16 8 16 L 8 16 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          color: "rgb(0,174,239)",
        }}>
          <path d={"M 10 0 C 4.5 0 0 4.5 0 10 C 0 15.5 4.5 20 10 20 C 15.5 20 20 15.5 20 10 C 20 4.5 15.5 0 10 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" style={{
          position: "absolute",
          left: 4,
          top: 4,
          width: 12,
          height: 12,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 6 12 C 2.7 12 0 9.3 0 6 C 0 2.7 2.7 0 6 0 C 9.3 0 12 2.7 12 6 C 12 9.3 9.3 12 6 12 L 6 12 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={8} height={8} viewBox="0 0 8 8" fill="none" style={{
          position: "absolute",
          left: 6,
          top: 6,
          width: 8,
          height: 8,
          color: "rgb(0,174,239)",
        }}>
          <path d={"M 4 0 C 1.76 0 0 1.76 0 4 C 0 6.24 1.76 8 4 8 C 6.24 8 8 6.24 8 4 C 8 1.76 6.24 0 4 0 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(10,218,124)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 20,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 20,
          height: 20,
        }}>
          <path d={"M 10 0 C 4.5 0 0 4.5 0 10 C 0 15.5 4.5 20 10 20 C 15.5 20 20 15.5 20 10 C 20 4.5 15.5 0 10 0 L 10 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 16,
          height: 16,
        }}>
          <path d={"M 8 16 C 3.6 16 0 12.4 0 8 C 0 3.6 3.6 0 8 0 C 12.4 0 16 3.6 16 8 C 16 12.4 12.4 16 8 16 L 8 16 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          color: "rgb(0,174,239)",
        }}>
          <path d={"M 14.222 0 L 1.778 0 C 0.8 0 0 0.8 0 1.778 L 0 14.222 C 0 15.2 0.8 16 1.778 16 L 14.222 16 C 15.2 16 16 15.2 16 14.222 L 16 1.778 C 16 0.8 15.2 0 14.222 0 L 14.222 0 Z"} fill="currentColor" fillRule="nonzero" />
          <path d={"M 14.222 -2 L 1.778 -2 L 1.778 2 L 14.222 2 L 14.222 -2 Z M 1.778 -2 C -0.305 -2 -2 -0.305 -2 1.778 L 2 1.778 C 2 1.845 1.971 1.902 1.936 1.936 C 1.902 1.971 1.845 2 1.778 2 L 1.778 -2 Z M -2 1.778 L -2 14.222 L 2 14.222 L 2 1.778 L -2 1.778 Z M -2 14.222 C -2 16.305 -0.305 18 1.778 18 L 1.778 14 C 1.845 14 1.902 14.029 1.936 14.064 C 1.971 14.098 2 14.155 2 14.222 L -2 14.222 Z M 1.778 18 L 14.222 18 L 14.222 14 L 1.778 14 L 1.778 18 Z M 14.222 18 C 16.305 18 18 16.305 18 14.222 L 14 14.222 C 14 14.155 14.029 14.098 14.064 14.064 C 14.098 14.029 14.155 14 14.222 14 L 14.222 18 Z M 18 14.222 L 18 1.778 L 14 1.778 L 14 14.222 L 18 14.222 Z M 18 1.778 C 18 -0.305 16.305 -2 14.222 -2 L 14.222 2 C 14.155 2 14.098 1.971 14.064 1.936 C 14.029 1.902 14 1.845 14 1.778 L 18 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={10} height={8} viewBox="0 0 10 8" fill="none" style={{
          position: "absolute",
          left: 3.5,
          top: 4,
          width: 10,
          height: 8,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 9.791 0.234 C 10.07 0.547 10.07 1.053 9.791 1.366 L 4.077 7.766 C 3.939 7.92 3.751 8.005 3.556 8 C 3.361 7.995 3.177 7.901 3.045 7.741 L 0.188 4.25 C -0.079 3.924 -0.059 3.418 0.232 3.119 C 0.522 2.821 0.974 2.843 1.241 3.169 L 3.594 6.043 L 8.781 0.234 C 9.06 -0.078 9.512 -0.078 9.791 0.234 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.4,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(180,180,180)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
        }}>
          <path d={"M 14.222 -2 L 1.778 -2 L 1.778 2 L 14.222 2 L 14.222 -2 Z M 1.778 -2 C -0.305 -2 -2 -0.305 -2 1.778 L 2 1.778 C 2 1.845 1.971 1.902 1.936 1.936 C 1.902 1.971 1.845 2 1.778 2 L 1.778 -2 Z M -2 1.778 L -2 14.222 L 2 14.222 L 2 1.778 L -2 1.778 Z M -2 14.222 C -2 16.305 -0.305 18 1.778 18 L 1.778 14 C 1.845 14 1.902 14.029 1.936 14.064 C 1.971 14.098 2 14.155 2 14.222 L -2 14.222 Z M 1.778 18 L 14.222 18 L 14.222 14 L 1.778 14 L 1.778 18 Z M 14.222 18 C 16.305 18 18 16.305 18 14.222 L 14 14.222 C 14 14.155 14.029 14.098 14.064 14.064 C 14.098 14.029 14.155 14 14.222 14 L 14.222 18 Z M 18 14.222 L 18 1.778 L 14 1.778 L 14 14.222 L 18 14.222 Z M 18 1.778 C 18 -0.305 16.305 -2 14.222 -2 L 14.222 2 C 14.155 2 14.098 1.971 14.064 1.936 C 14.029 1.902 14 1.845 14 1.778 L 18 1.778 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          color: "rgb(87,199,0)",
        }}>
          <path d={"M 14.222 0 L 1.778 0 C 0.8 0 0 0.8 0 1.778 L 0 14.222 C 0 15.2 0.8 16 1.778 16 L 14.222 16 C 15.2 16 16 15.2 16 14.222 L 16 1.778 C 16 0.8 15.2 0 14.222 0 L 14.222 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        <svg width={10} height={8} viewBox="0 0 10 8" fill="none" style={{
          position: "absolute",
          left: 3,
          top: 4,
          width: 10,
          height: 8,
          color: "rgb(255,255,255)",
        }}>
          <path d={"M 9.791 0.234 C 10.07 0.547 10.07 1.053 9.791 1.366 L 4.077 7.766 C 3.939 7.92 3.751 8.005 3.556 8 C 3.361 7.995 3.177 7.901 3.045 7.741 L 0.188 4.25 C -0.079 3.924 -0.059 3.418 0.232 3.119 C 0.522 2.821 0.974 2.843 1.241 3.169 L 3.594 6.043 L 8.781 0.234 C 9.06 -0.078 9.512 -0.078 9.791 0.234 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }} />
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
      }}>{props.text1 ?? "Opción"}</span>
    </div>
  );
  const __impls = {
    // figma: Tipo=Toogle, Selector=On, Estado=Disabled
    "tipo=toogle|selector=on|estado=disabled": __body0,
    // figma: Tipo=Toogle, Selector=Off, Estado=Disabled
    "tipo=toogle|selector=off|estado=disabled": __body1,
    // figma: Tipo=Toogle, Selector=On, Estado=Default
    "tipo=toogle|selector=on|estado=default": __body2,
    // figma: Tipo=Toogle, Selector=Off, Estado=Default
    "tipo=toogle|selector=off|estado=default": __body3,
    // figma: Tipo=Radio, Selector=On,Estado=Disabled
    "tipo=radio|selector=on|estado=disabled": __body4,
    // figma: Tipo=Radio, Selector=Off, Estado=Disabled
    "tipo=radio|selector=off|estado=disabled": __body5,
    // figma: Tipo=Radio, Selector=On, Estado=Default
    "tipo=radio|selector=on|estado=default": __body6,
    // figma: Tipo=Radio, Selector=Off, Estado=Default
    "tipo=radio|selector=off|estado=default": __body7,
    // figma: Tipo=Checkbox, Selector=On, Estado=Disabled
    "tipo=checkbox|selector=on|estado=disabled": __body8,
    // figma: Tipo=Checkbox, Selector=Off, Estado=Disabled
    "tipo=checkbox|selector=off|estado=disabled": __body9,
    // figma: Tipo=Checkbox, Selector=On, Estado=Default
    "tipo=checkbox|selector=on|estado=default": __body10,
    // figma: Tipo=Checkbox, Selector=Off, Estado=Default
    "tipo=checkbox|selector=off|estado=default": __body11,
  };
  return (__impls[__vkey(props)] ?? __body11)();
}
export default Options;
