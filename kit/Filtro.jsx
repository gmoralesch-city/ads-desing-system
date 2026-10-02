import { Chips } from './Chips.jsx';
import { FlechasCaretUp } from './FlechasCaretUp.jsx';

// figma node: 509:2512 Filtro
export function Filtro(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 350,
      height: 484,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "12px 0px 12px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style,
    }}>
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
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "100%",
          color: "rgb(0,0,0)",
          flexGrow: 1,
          whiteSpace: "nowrap",
        }}>{props.text1 ?? "Tipo de filtro"}</span>
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
        gap: 8,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon2 ?? <Chips estado={"default"} />}</div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon3 ?? <Chips estado={"default"} />}</div>
          <div style={{ position: "relative", flexShrink: 0 }}>{props.icon4 ?? <Chips estado={"default"} />}</div>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
          <Chips
            style={{ position: "relative", flexShrink: 0 }}
            estado={"default"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 12,
        display: "flex",
        flexDirection: "column",
        padding: "12px 0px 12px 0px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg height={1} viewBox="0 -0.500 350 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0.5 -1 L 0 -1 L 0 0 L 0.5 0 L 0.5 -1 Z M 349.5 0 L 350 0 L 350 -1 L 349.5 -1 L 349.5 0 Z M 0.5 0 L 349.5 0 L 349.5 -1 L 0.5 -1 L 0.5 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Filtro;
