import { Access } from '../components/marketing/Access.jsx';
import { FuncionesClose } from './FuncionesClose.jsx';

// figma node: 477:3376 Snack bar
export function SnackBar(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 350,
      overflow: "hidden",
      borderRadius: 4,
      boxShadow: "0px 4px 8px 0px rgba(1,30,65,0.12)",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "0px 24px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
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
        display: "flex",
        flexDirection: "row",
        gap: 20,
        padding: "16px 0px 16px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Avenir, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "100%",
          color: "rgb(79,128,11)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Aquí va el mensaje que se quiere comunicar."}</span>
      </div>
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.icon2 ?? <Access icon1={<FuncionesClose style={{ width: "100%", height: "100%" }} />} estado={"default"} style={{ transform: "scale(0.500, 0.500)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
}
export default SnackBar;
