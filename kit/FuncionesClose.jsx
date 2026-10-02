// figma node: 221:2583 funciones/close
export function FuncionesClose(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(13,13,13)",
      ...props.style,
    }}>
      <svg width={14} height={14} viewBox="0 0 14 14" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 5,
        width: 14,
        height: 14,
      }}>
        <path d={"M 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 7 5.586 L 12.293 0.293 C 12.683 -0.098 13.317 -0.098 13.707 0.293 C 14.098 0.683 14.098 1.317 13.707 1.707 L 8.414 7 L 13.707 12.293 C 14.098 12.683 14.098 13.317 13.707 13.707 C 13.317 14.098 12.683 14.098 12.293 13.707 L 7 8.414 L 1.707 13.707 C 1.317 14.098 0.683 14.098 0.293 13.707 C -0.098 13.317 -0.098 12.683 0.293 12.293 L 5.586 7 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesClose;
