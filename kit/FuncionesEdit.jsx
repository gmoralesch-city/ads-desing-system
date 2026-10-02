// figma node: 221:2571 funciones/edit
export function FuncionesEdit(_p = {}) {
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
      <svg width={19} height={19} viewBox="0 0 19 19" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 2,
        width: 19,
        height: 19,
      }}>
        <path d={"M 13.293 0.293 C 13.683 -0.098 14.317 -0.098 14.707 0.293 L 18.707 4.293 C 19.098 4.683 19.098 5.317 18.707 5.707 L 5.707 18.707 C 5.52 18.895 5.265 19 5 19 L 1 19 C 0.448 19 0 18.552 0 18 L 0 14 C 0 13.735 0.105 13.48 0.293 13.293 L 10.293 3.293 L 13.293 0.293 Z M 11 5.414 L 2 14.414 L 2 17 L 4.586 17 L 13.586 8 L 11 5.414 Z M 15 6.586 L 16.586 5 L 14 2.414 L 12.414 4 L 15 6.586 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesEdit;
