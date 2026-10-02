import { Access } from '../components/marketing/Access.jsx';
import { FuncionesClose } from './FuncionesClose.jsx';
import { Resumen } from './Resumen.jsx';

// figma node: 652:10710 Modals (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "tipo=" + __venc(p.tipo);

export function Modals(_p = {}) {
  const props = { ..._p, tipo: _p.tipo ?? "lateral" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 730,
      height: 520,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "48px 48px 48px 48px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 678,
          top: 12,
          width: 40,
          height: 40,
        }}>{props.icon1 ?? <Access icon1={<FuncionesClose style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 28,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Términos y Condiciones"}</span>
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
        }}>{props.text2 ?? "Para continuar con la contratación es necesario que aceptes"}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 698,
        top: 136,
        width: 4,
        height: 100,
        backgroundColor: "rgb(180,180,180)",
      }} />
      <div style={{
        position: "relative",
        height: 307,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
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
          textAlign: "justify",
          lineHeight: "100%",
          color: "rgb(120,120,120)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "pre-wrap",
        }}>{props.text3 ?? "Los siguientes términos y condiciones rigen el uso que usted como usuario le dé al contenido de este sitio web. En cualquier momento se producirán cambios en los Términos y Condiciones sin notificación alguna, para dar cumplimiento con lo establecido en la normativa, dichos cambios serán debidamente publicados en este sitio web.\n\nRenuncia de Garantía\n\nUsted comprende y acepta expresamente que asume en su totalidad, el riesgo del uso de los servicios, los cuales se proporcionan en sus condiciones originales y según su disponibilidad. Aseguradora del Sur renuncia expresamente a todas las garantías de cualquier tipo, ya sean expresas o implícitas, incluidas, entre otras, las garantías implícitas de comerciabilidad e idoneidad para un fin en particular. ADS no garantiza que los servicios serán ininterrumpidos, oportunos, seguros ni libres de errores. El uso de cualquier material descargado u obtenido a través del uso de los servicios será bajo su propio riesgo y criterio y será el único responsable por cualquier daño a su sistema informático, teléfono móvil, dispositivo inalámbrico o datos que se produzca a causa del uso de los servicios o la descarga de cualquier material. Ninguna recomendación o información, ya sea escrita u oral, que usted obtenga de sus empleados o representantes creará ninguna garantía no expresamente establecida en los términos.\nAseguradora del Sur no asume ninguna responsabilidad, y no será responsable de cualquier daño a, o de cualquier virus que pudiera infectar su equipo a causa de su acceso.\nLimitación de responsabilidad\nUsted acepta que Aseguradora del Sur, en ningún caso, será responsable por pérdida o daño de todo tipo, ya sea por pérdida de beneficios, negocios, falla de la computadora, pérdida de cualquier tipo de información, inclusive si se advirtió a Aseguradora del Sur de la posibilidad de dicho daño.\n\nContenido de terceros\n\nEste sitio web puede tener vínculos a otros sitios web mantenidos por terceros. No somos responsables por el contenido de dichos sitios web. La inclusión de cualquier enlace a dichos sitios web no implica la aprobación o respaldo de los mismos o de su contenido, ya que no es posible garantizar que los vínculos que figuran en este sitio web sean los correctos al momento de su acceso. Así mismo, los vínculos a sitios web de terceros incorporados en este sitio han sido desarrollados de manera independiente y mantenidos por persona(s) sobre los cuales no disponemos de control alguno. En consecuencia, ADS no asume ninguna responsabilidad por el contenido de cualquier sitio respecto del cual se haya incorporado un hipervínculo o similar. Consideramos que la puesta a disposición de vínculos a otros sitios web de acceso público es legalmente viable y consistente con las expectativas comunes y acostumbradas de los usuarios de Internet.\n\nRestricciones en el uso de materiales\n\nEste sitio web es propiedad y está operado por Aseguradora del Sur. A excepción de lo expresamente autorizado por la misma. Ningún material de este sitio web o cualquier sitio web de propiedad, operado, licenciado o controlado por Aseguradora del Sur podrá ser copiado, reproducido, republicado, cargado, publicado, transmitido o distribuido de ninguna manera; sin embargo, puede descargar material contenido en este sitio web únicamente para su uso, siempre que conserve todos los avisos de derechos de autor o de propiedad contenidos en los materiales. Queda completamente prohibido el distribuir, modificar, transmitir, reutilizar, reenviar o utilizar el contenido de este sitio web para propósitos públicos o comerciales, incluyendo el texto, imágenes, audio y video, sin la autorización previa y por escrito de Aseguradora del Sur. ADS no garantiza que el uso de los materiales que constan en este sitio web no vulnera derechos de terceros.\n\nPropiedad de la Información\n\nCualquier información, con exclusión de los datos personales y la información que usted proporcione a Aseguradora del Sur, a través de este sitio web, por correo electrónico o por cualquier otro medio, incluyendo datos, preguntas, comentarios o sugerencias, serán tratados como no confidenciales y no de su propiedad y pasarán a ser propiedad de Aseguradora del Sur. Aquella información que no corresponda a datos o información personal, puede ser utilizada para cualquier propósito, incluyendo, pero sin limitarse a, la reproducción, solicitud, divulgación, transmisión, publicación, emisión y envío.\n\nADS estará en la posibilidad de utilizar cualquier idea, concepto, know-how o técnicas contenidas en cualquier comunicación que Usted envíe a ADS a través de este sitio web o por cualquier otro medio para cualquier propósito, incluyendo, pero no limitado se ha, desarrollo y comercialización de productos utilizando dicha información.\n\nMarcas y derechos de autor\n\nTodas las marcas en general, marcas de servicio, nombres comerciales, logotipos e iconos son propiedad de Aseguradora del Sur, por tal razón el contenido total o parcial de este sitio web debe ser interpretado como una concesión, por implicación, impedimento o de otro modo, de cualquier licencia o derecho a usar cualquier marca registrada que aparece en este sitio web sin la autorización previa y por escrito de Aseguradora del Sur. Queda estrictamente prohibido el uso de las marcas que aparecen en este sitio web, o cualquier otro contenido en este sitio web, salvo lo dispuesto en el mismo. Las imágenes que aparecen en este sitio web son propiedad de Aseguradora del Sur, y pueden ser utilizados con el permiso expreso de Aseguradora del Sur. Cualquier uso no autorizado de la información e imágenes aquí contenidas puede materializar una violación a las disposiciones legales en materia de derechos de autor, propiedad intelectual, privacidad de datos, publicidad y lineamientos y políticas internas en materia de comunicaciones.\n\nLeyes Aplicables\n\nAseguradora del Sur controla y opera el Sitio Web desde Ecuador. Los usuarios que accedan al sitio Web desde otros lugares lo harán por su propia decisión y son responsables del cumplimiento de las leyes locales aplicables.\nAseguradora del Sur podrá terminar, cambiar, suspender o descontinuar cualquier aspecto del Sitio Web o de los servicios del Sitio Web en cualquier momento mediante una política que estipula la terminación de forma apropiada.\nAseguradora del Sur se reserva el derecho de cambiar, modificar, añadir o quitar cualquier porción de los Términos y Condiciones, toda o en parte, en cualquier momento.\nLos Términos y Condiciones entre usted y Aseguradora del Sur, serán regidos por las leyes del Estado Ecuatoriano."}</span>
      </div>
      <div style={{
        position: "absolute",
        left: 0,
        top: 432,
        width: 730,
        backgroundColor: "rgb(255,255,255)",
        borderTop: "1px solid rgb(0,51,161)",
        borderRight: "1px solid rgb(0,51,161)",
        borderBottom: "1px solid rgb(0,51,161)",
        borderLeft: "1px solid rgb(0,51,161)",
        display: "flex",
        flexDirection: "row",
        padding: "20px 20px 20px 20px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
      }}>
        <div style={{
          position: "relative",
          width: 160,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          flexShrink: 0,
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
            <div style={{
              position: "relative",
              width: 76,
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
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: "8px 20px 20px 20px",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "48px 48px 48px 48px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 394,
          top: 12,
          width: 40,
          height: 40,
        }}>{props.icon1 ?? <Access icon1={<FuncionesClose style={{ width: "100%", height: "100%" }} />} estado={"default"} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 28,
          textAlign: "center",
          lineHeight: "100%",
          color: "rgb(72,72,72)",
          flexShrink: 0,
          alignSelf: "stretch",
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Nuevo siniestro"}</span>
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
        }}>{props.text2 ?? "Ingresa la placa, nombre o identificación del asegurado"}</span>
      </div>
      <Resumen
        style={{
          position: "relative",
          height: 270,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        tipo={"información"}
      />
    </div>
  );
  const __impls = {
    // figma: Tipo=Especial
    "tipo=especial": __body0,
    // figma: Tipo=Lateral
    "tipo=lateral": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default Modals;
