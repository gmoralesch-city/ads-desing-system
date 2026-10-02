import { ComunicaciNEmail } from './ComunicaciNEmail.jsx';
import { DispositvosMobile } from './DispositvosMobile.jsx';
import { FlechasCaretDown } from './FlechasCaretDown.jsx';
import { FuncionesEyeOff } from './FuncionesEyeOff.jsx';
import { FuncionesFavorite } from './FuncionesFavorite.jsx';
import { FuncionesLock } from './FuncionesLock.jsx';
import { FuncionesRemove } from './FuncionesRemove.jsx';
import { InformativoCircleHelp } from './InformativoCircleHelp.jsx';
import { InformativoCircleInformation } from './InformativoCircleInformation.jsx';
import { InformativoCircleWarning } from './InformativoCircleWarning.jsx';
import { Inputs } from './Inputs.jsx';
import { Links } from './Links.jsx';
import { ObjetosCalendar } from './ObjetosCalendar.jsx';
import { ObjetosCreditCard } from './ObjetosCreditCard.jsx';
import { ObjetosHome } from './ObjetosHome.jsx';
import { ObjetosTag } from './ObjetosTag.jsx';
import { Tarjetas } from './Tarjetas.jsx';
import { UsuarioCarro } from './UsuarioCarro.jsx';
import { UsuarioCedula } from './UsuarioCedula.jsx';
import { UsuarioUser } from './UsuarioUser.jsx';

// figma node: 652:8642 Forms (9 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo);

export function Forms(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "consulta" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          opacity: 0.4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            width: 255,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <div style={{
              position: "relative",
              height: 48,
              borderRadius: 8,
              backgroundColor: "rgb(248,248,248)",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <span style={{
                position: "absolute",
                left: 12,
                top: 21,
                width: 140,
                height: 19,
                fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(112,112,112)",
              }}>Cifraseg</span>
              <UsuarioUser style={{
                  position: "absolute",
                  left: 219,
                  top: 12,
                  width: 24,
                  height: 24,
                }} />
              <span style={{
                position: "absolute",
                left: 12,
                top: 4,
                width: 32,
                height: 15,
                fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 12,
                whiteSpace: "nowrap",
                lineHeight: "100%",
                color: "rgb(135,135,135)",
              }}>Canal</span>
            </div>
          </div>
        </div>
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Cédula"}
          placeholder={"1723456809"}
          help={"Ingresa una cédula válida"}
          icon1={<UsuarioCedula style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{
            position: "relative",
            width: 255,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"Correo"}
          placeholder={"marialopez@aps.com"}
          help={"Ingresa un correo válido"}
          icon1={<ComunicaciNEmail style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Celular"}
          placeholder={"0987654321"}
          help={"Ingresa un celular válido"}
          icon1={<DispositvosMobile style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{
            position: "relative",
            width: 255,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"Rol"}
          placeholder={"Ejecutivo"}
          help={"Selecciona un rol"}
          icon1={<FlechasCaretDown style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <Inputs
          style={{
            position: "relative",
            width: 255,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"Vendedor"}
          placeholder={"Fuerza directa"}
          help={"Selecciona un rol"}
          icon1={<FlechasCaretDown style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            width: 78,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Inputs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Correo"}
        placeholder={"vicjativa@hotmail.com"}
        help={"Ingresa un correo válido"}
        icon1={<ComunicaciNEmail style={{ width: "100%", height: "100%" }} />}
        icono={"on"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Contraseña"}
          placeholder={"·······"}
          help={"Contraseña incorrecta"}
          icon1={<FuncionesEyeOff style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <Links
          style={{ position: "relative", width: 200, flexShrink: 0 }}
          text1={"¿Olvidaste tu contraseña?"}
          estado={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            width: 79,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Inputs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Correo"}
        placeholder={"vicjativa@hotmail.com"}
        help={"Ingresa un correo válido"}
        icon1={<ComunicaciNEmail style={{ width: "100%", height: "100%" }} />}
        icono={"on"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Contraseña"}
          placeholder={"·······"}
          help={"Contraseña incorrecta"}
          icon1={<FuncionesEyeOff style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
              padding: "0px 4px 0px 0px",
              alignItems: "center",
              flexWrap: "nowrap",
              boxSizing: "border-box",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                }}>{props.icon1 ?? <FuncionesRemove style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(66,75,90)",
                flexShrink: 0,
              }}>{props.text1 ?? "Mínimo 1 número"}</span>
            </div>
            <div style={{
              position: "relative",
              width: 128,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                }}>{props.icon2 ?? <FuncionesRemove style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(66,75,90)",
                flexShrink: 0,
              }}>{props.text2 ?? "Mínimo 1 mayúscula"}</span>
            </div>
          </div>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 116,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                }}>{props.icon3 ?? <FuncionesRemove style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(66,75,90)",
                flexShrink: 0,
              }}>{props.text3 ?? "Mínimo 1 símbolo"}</span>
            </div>
            <div style={{
              position: "relative",
              width: 128,
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                  position: "relative",
                  width: 12,
                  height: 12,
                  flexShrink: 0,
                }}>{props.icon4 ?? <FuncionesRemove style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
              <span style={{
                position: "relative",
                fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                whiteSpace: "nowrap",
                lineHeight: "18px",
                color: "rgb(66,75,90)",
                flexShrink: 0,
              }}>{props.text4 ?? "Mínimo 8 carácteres"}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            width: 79,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
      <Links
        style={{ position: "relative", width: 41, flexShrink: 0 }}
        text1={"Inicio"}
        estado={"default"}
      />
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 65,
            height: 80,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 65,
              height: 80,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 65,
                height: 80,
                borderRadius: 8,
                backgroundColor: "rgb(217,217,217)",
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 65,
            height: 80,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 65,
              height: 80,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 65,
                height: 80,
                borderRadius: 8,
                backgroundColor: "rgb(217,217,217)",
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 65,
            height: 80,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 65,
              height: 80,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 65,
                height: 80,
                borderRadius: 8,
                backgroundColor: "rgb(217,217,217)",
              }} />
            </div>
          </div>
          <div style={{
            position: "relative",
            width: 65,
            height: 80,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 65,
              height: 80,
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 65,
                height: 80,
                borderRadius: 8,
                backgroundColor: "rgb(217,217,217)",
              }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            width: 173,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
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
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "¿No llegó el código?"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <Links
            style={{ position: "relative", width: 123, flexShrink: 0 }}
            text1={"Reenviar código"}
            estado={"default"}
          />
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 300,
            fontSize: 16,
            textAlign: "center",
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
          }}>{props.text2 ?? "(1/3)"}</span>
        </div>
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Tipo de dato"}
          placeholder={"Cédula"}
          help={"Selecciona un tipo"}
          icon1={<FlechasCaretDown style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <Inputs
          style={{
            position: "relative",
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          label={"Número del documento"}
          placeholder={"1723456809"}
          help={"Ingresa un número del documento válido"}
          icon1={<UsuarioCedula style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 20,
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(72,72,72)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "¿Qué vas a reportar?"}</span>
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
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: "4px 4px 0px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  height: 40,
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 20px 8px 20px",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                  }}>Tab 1</span>
                </div>
                <svg height={1} viewBox="0 -0.500 113 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 112.5 0 L 113 0 L 113 -1 L 112.5 -1 L 112.5 0 Z M 0.5 0 L 112.5 0 L 112.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: "4px 4px 0px 0px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "nowrap",
                flexShrink: 0,
                alignSelf: "stretch",
              }}>
                <div style={{
                  position: "relative",
                  height: 40,
                  display: "flex",
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 20px 8px 20px",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                }}>
                  <span style={{
                    position: "relative",
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                  }}>Tab 1</span>
                </div>
                <svg height={1} viewBox="0 -0.500 113 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 112.5 0 L 113 0 L 113 -1 L 112.5 -1 L 112.5 0 Z M 0.5 0 L 112.5 0 L 112.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: "4px 4px 0px 0px",
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
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 20px 8px 20px",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <FuncionesFavorite style={{
                      position: "relative",
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                    }} />
                  <span style={{
                    position: "relative",
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                  }}>Tab 1</span>
                </div>
                <svg height={1} viewBox="0 -0.500 113 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 112.5 0 L 113 0 L 113 -1 L 112.5 -1 L 112.5 0 Z M 0.5 0 L 112.5 0 L 112.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              opacity: 0.4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: "4px 4px 0px 0px",
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
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 20px 8px 20px",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <FuncionesFavorite style={{
                      position: "relative",
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                    }} />
                  <span style={{
                    position: "relative",
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                  }}>Tab 1</span>
                </div>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: "4px 4px 0px 0px",
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
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 20px 8px 20px",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <FuncionesFavorite style={{
                      position: "relative",
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                    }} />
                  <span style={{
                    position: "relative",
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                  }}>Tab 1</span>
                </div>
                <svg height={1} viewBox="0 -0.500 113 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 112.5 0 L 113 0 L 113 -1 L 112.5 -1 L 112.5 0 Z M 0.5 0 L 112.5 0 L 112.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: "4px 4px 0px 0px",
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
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 20px 8px 20px",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <FuncionesFavorite style={{
                      position: "relative",
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                    }} />
                  <span style={{
                    position: "relative",
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                  }}>Tab 1</span>
                </div>
                <svg height={1} viewBox="0 -0.500 113 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 112.5 0 L 113 0 L 113 -1 L 112.5 -1 L 112.5 0 Z M 0.5 0 L 112.5 0 L 112.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              flexWrap: "nowrap",
              flexShrink: 0,
            }}>
              <div style={{
                position: "relative",
                height: 40,
                overflow: "hidden",
                borderRadius: "4px 4px 0px 0px",
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
                  flexDirection: "row",
                  gap: 8,
                  padding: "8px 20px 8px 20px",
                  alignItems: "flex-end",
                  flexWrap: "nowrap",
                  boxSizing: "border-box",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}>
                  <FuncionesFavorite style={{
                      position: "relative",
                      width: 24,
                      height: 24,
                      flexShrink: 0,
                    }} />
                  <span style={{
                    position: "relative",
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: 12,
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    lineHeight: "100%",
                    color: "rgb(0,0,0)",
                    flexShrink: 0,
                  }}>Tab 1</span>
                </div>
                <svg height={1} viewBox="0 -0.500 113 1" fill="none" style={{
                  position: "relative",
                  height: 1,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  color: "rgb(0,0,0)",
                }}>
                  <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 112.5 0 L 113 0 L 113 -1 L 112.5 -1 L 112.5 0 Z M 0.5 0 L 112.5 0 L 112.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 20,
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
            textAlign: "center",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "¿El evento ocurrió este momento?"}</span>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "flex-start",
            flexWrap: "nowrap",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                borderRadius: 8,
                backgroundColor: "rgb(0,174,239)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 20px 8px 20px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  overflow: "hidden",
                  flexShrink: 0,
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
                  width: 22,
                  height: 24,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "2px 0px 2px 0px",
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
            <div style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              flexGrow: 1,
            }}>
              <div style={{
                position: "relative",
                borderRadius: 8,
                backgroundColor: "rgb(0,174,239)",
                display: "flex",
                flexDirection: "row",
                gap: 8,
                padding: "8px 20px 8px 20px",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "nowrap",
                boxSizing: "border-box",
                flexGrow: 1,
              }}>
                <div style={{
                  position: "relative",
                  width: 24,
                  height: 24,
                  overflow: "hidden",
                  flexShrink: 0,
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
                  width: 15,
                  height: 24,
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "2px 0px 2px 0px",
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
          </div>
        </div>
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 255,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <Inputs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Tipo de documento"}
        placeholder={"Cédula"}
        help={"Selecciona un documento"}
        icon1={<FlechasCaretDown style={{ width: "100%", height: "100%" }} />}
        icono={"on"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          height: 48,
          borderRadius: 8,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <UsuarioCedula style={{
              position: "absolute",
              left: 219,
              top: 12,
              width: 24,
              height: 24,
            }} />
          <span style={{
            position: "absolute",
            left: 12,
            top: 13,
            width: 180,
            height: 19,
            fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 16,
            whiteSpace: "nowrap",
            lineHeight: "100%",
            color: "rgb(120,120,120)",
          }}>Número del documento</span>
        </div>
      </div>
      <Inputs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Placa"}
        placeholder={"ABC-1234"}
        help={"Ingresa una placa válida"}
        icon1={<UsuarioCarro style={{ width: "100%", height: "100%" }} />}
        icono={"on"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            width: 81,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Correo"}
          placeholder={"vicjativa@hotmail.com"}
          help={"Ingresa un correo válido"}
          icon1={<ComunicaciNEmail style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"fill"}
        />
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Celular"}
          placeholder={"0987654321"}
          help={"Ingresa un celular válido"}
          icon1={<DispositvosMobile style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"fill"}
        />
      </div>
      <div style={{
        position: "relative",
        width: 540,
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <Inputs
          style={{
            position: "relative",
            width: 255,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          label={"Plan"}
          placeholder={"Oro"}
          help={"Selecciona un rol"}
          icon1={<FlechasCaretDown style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"fill"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <Inputs
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            label={"Valor comercial"}
            placeholder={"$ 12.400"}
            help={"Ingresa un valor válido"}
            icon1={<ObjetosTag style={{ width: "100%", height: "100%" }} />}
            icono={"on"}
            estado={"fill"}
          />
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon1 ?? <InformativoCircleHelp />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 540,
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <Inputs
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            label={"Extras (opcional)"}
            placeholder={"$ 800"}
            help={"Ingresa un valor válido"}
            icon1={<ObjetosTag style={{ width: "100%", height: "100%" }} />}
            icono={"on"}
            estado={"fill"}
          />
          <div style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <InformativoCircleHelp />}</div>
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            borderRadius: 4,
            backgroundColor: "rgb(255,234,238)",
            boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
            display: "flex",
            flexDirection: "row",
            gap: 24,
            padding: "12px 20px 12px 20px",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
              width: 207,
              display: "flex",
              flexDirection: "row",
              gap: 20,
              alignItems: "center",
              flexWrap: "nowrap",
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <InformativoCircleInformation style={{
                  position: "relative",
                  width: 24,
                  flexShrink: 0,
                  alignSelf: "stretch",
                  height: "auto",
                }} />
              <span style={{
                position: "relative",
                fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                whiteSpace: "nowrap",
                lineHeight: 1.5,
                color: "rgb(173,12,42)",
                flexShrink: 0,
              }}>Aquí va el mensaje que se quiere comunicar.</span>
            </div>
            <div style={{
              position: "relative",
              width: 24,
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: 24,
                height: 24,
                borderRadius: "50%",
                backgroundColor: "rgb(217,217,217)",
              }} />
              <div style={{
                position: "absolute",
                left: 4.8,
                top: 4.8,
                width: 14.4,
                height: 14.4,
                overflow: "hidden",
              }}>
                <svg width={8.400} height={8.400} viewBox="0 0 8.400 8.400" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 3,
                  width: 8.4,
                  height: 8.4,
                  color: "rgb(13,13,13)",
                }}>
                  <path d={"M 0.176 0.176 C 0.41 -0.059 0.79 -0.059 1.024 0.176 L 4.2 3.351 L 7.376 0.176 C 7.61 -0.059 7.99 -0.059 8.224 0.176 C 8.459 0.41 8.459 0.79 8.224 1.024 L 5.049 4.2 L 8.224 7.376 C 8.459 7.61 8.459 7.99 8.224 8.224 C 7.99 8.459 7.61 8.459 7.376 8.224 L 4.2 5.049 L 1.024 8.224 C 0.79 8.459 0.41 8.459 0.176 8.224 C -0.059 7.99 -0.059 7.61 0.176 7.376 L 3.351 4.2 L 0.176 1.024 C -0.059 0.79 -0.059 0.41 0.176 0.176 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          width: 548,
          borderRadius: 4,
          backgroundColor: "rgb(255,234,238)",
          boxShadow: "inset 0 0 0 1px rgb(0,0,0)",
          display: "flex",
          flexDirection: "row",
          gap: 24,
          padding: "12px 20px 12px 20px",
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: 508,
            display: "flex",
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            flexWrap: "nowrap",
            flexShrink: 0,
          }}>
            <InformativoCircleWarning style={{
                position: "relative",
                width: 24,
                height: 24,
                flexShrink: 0,
              }} />
            <span style={{
              position: "relative",
              fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
              fontWeight: 500,
              fontSize: 16,
              whiteSpace: "nowrap",
              lineHeight: 1.5,
              color: "rgb(173,12,42)",
              flexShrink: 0,
            }}>Aquí va el mensaje que se quiere comunicar.</span>
          </div>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            flexShrink: 0,
          }}>
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "rgb(217,217,217)",
            }} />
            <div style={{
              position: "absolute",
              left: 4.8,
              top: 4.8,
              width: 14.4,
              height: 14.4,
              overflow: "hidden",
            }}>
              <svg width={8.400} height={8.400} viewBox="0 0 8.400 8.400" fill="none" style={{
                position: "absolute",
                left: 3,
                top: 3,
                width: 8.4,
                height: 8.4,
                color: "rgb(13,13,13)",
              }}>
                <path d={"M 0.176 0.176 C 0.41 -0.059 0.79 -0.059 1.024 0.176 L 4.2 3.351 L 7.376 0.176 C 7.61 -0.059 7.99 -0.059 8.224 0.176 C 8.459 0.41 8.459 0.79 8.224 1.024 L 5.049 4.2 L 8.224 7.376 C 8.459 7.61 8.459 7.99 8.224 8.224 C 7.99 8.459 7.61 8.459 7.376 8.224 L 4.2 5.049 L 1.024 8.224 C 0.79 8.459 0.41 8.459 0.176 8.224 C -0.059 7.99 -0.059 7.61 0.176 7.376 L 3.351 4.2 L 0.176 1.024 C -0.059 0.79 -0.059 0.41 0.176 0.176 Z"} fill="currentColor" fillRule="nonzero" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            width: 78,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
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
      }}>
        <div style={{
          position: "relative",
          width: 30,
          height: 20,
          overflow: "hidden",
          flexShrink: 0,
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
          fontFamily: "Ubuntu, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "18px",
          color: "rgb(66,75,90)",
          flexShrink: 0,
        }}>No, cambiar a otros datos</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Cédula"}
          placeholder={"1723456809"}
          help={"Ingresa una cédula válida"}
          icon1={<UsuarioCedula style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Nombre"}
          placeholder={"Victor Vic"}
          help={"Ingresa el nombre"}
          icono={"on"}
          estado={"default"}
        />
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Celular"}
          placeholder={"0987654321"}
          help={"Ingresa una celular válido"}
          icon1={<DispositvosMobile style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <Inputs
          style={{ position: "relative", width: 255, flexShrink: 0 }}
          label={"Correo"}
          placeholder={"vicjativa@hotmail.com"}
          help={"Ingresa un correo válido"}
          icon1={<ComunicaciNEmail style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
      </div>
      <Inputs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Dirección"}
        placeholder={"6 de Diciembre N27-404 y Portugal"}
        help={"Ingresa la dirección"}
        icon1={<ObjetosHome style={{ width: "100%", height: "100%" }} />}
        icono={"on"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            width: 120,
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 350,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "0px 0px 20px 0px",
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
          lineHeight: "100%",
          color: "rgb(120,120,120)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Aceptamos:"}</span>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              width: 36,
              height: 24,
              flexShrink: 0,
            }}>{props.icon1 ?? <Tarjetas marca={"visa"} />}</div>
          <div style={{
              position: "relative",
              width: 36,
              height: 24,
              flexShrink: 0,
            }}>{props.icon2 ?? <Tarjetas marca={"mastercard"} />}</div>
          <div style={{
              position: "relative",
              width: 36,
              height: 24,
              flexShrink: 0,
            }}>{props.icon3 ?? <Tarjetas marca={"american express"} />}</div>
          <div style={{
              position: "relative",
              width: 36,
              height: 24,
              flexShrink: 0,
            }}>{props.icon4 ?? <Tarjetas marca={"diners club"} />}</div>
          <Tarjetas
            style={{
              position: "relative",
              width: 36,
              height: 24,
              flexShrink: 0,
            }}
            marca={"discover"}
          />
        </div>
      </div>
      <Inputs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Nombre en la tarjeta"}
        placeholder={"Victor Vic"}
        help={"Ingresa el nombre"}
        icono={"on"}
        estado={"default"}
      />
      <Inputs
        style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        label={"Número de la tarjeta"}
        placeholder={"2022 2022 2022 2022"}
        help={"Ingresa una tarjeta válida"}
        icon1={<ObjetosCreditCard style={{ width: "100%", height: "100%" }} />}
        icono={"on"}
        estado={"default"}
      />
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 30,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <Inputs
          style={{ position: "relative", flexGrow: 1, width: "auto" }}
          label={"MM/AA"}
          placeholder={"12/24"}
          help={"Fecha inválida"}
          icon1={<ObjetosCalendar style={{ width: "100%", height: "100%" }} />}
          icono={"on"}
          estado={"default"}
        />
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <Inputs
            style={{ position: "relative", flexGrow: 1, width: "auto" }}
            label={"CVV"}
            placeholder={"123"}
            help={"Código inválido"}
            icon1={<FuncionesLock style={{ width: "100%", height: "100%" }} />}
            icono={"on"}
            estado={"default"}
          />
          <InformativoCircleHelp style={{
              position: "relative",
              width: 24,
              height: 24,
              flexShrink: 0,
            }} />
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          borderRadius: 8,
          backgroundColor: "rgb(0,174,239)",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "12px 28px 12px 28px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <div style={{
            position: "relative",
            width: 24,
            height: 24,
            overflow: "hidden",
            flexShrink: 0,
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
            height: 24,
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "0px 0px 2px 0px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
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
    </div>
  );
  const __impls = {
    // figma: Tipo=Perfil
    "tipo=perfil": __body0,
    // figma: Tipo=Login
    "tipo=login": __body1,
    // figma: Tipo=Contraseña
    "tipo=contraseña": __body2,
    // figma: Tipo=OTP
    "tipo=otp": __body3,
    // figma: Tipo=Siniestro
    "tipo=siniestro": __body4,
    // figma: Tipo=Consulta
    "tipo=consulta": __body5,
    // figma: Tipo=Datos
    "tipo=datos": __body6,
    // figma: Tipo=Factura
    "tipo=factura": __body7,
    // figma: Tipo=Pago
    "tipo=pago": __body8,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default Forms;
