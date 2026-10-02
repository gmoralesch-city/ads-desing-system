// figma node: 221:2567 funciones/delete
export function FuncionesDelete(_p = {}) {
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
      <svg width={20} height={20} viewBox="0 0 20 20" fill="none" style={{
        position: "absolute",
        left: 2,
        top: 2,
        width: 20,
        height: 20,
      }}>
        <path d={"M 5 2 C 5 0.895 5.895 0 7 0 L 13 0 C 14.105 0 15 0.895 15 2 L 15 4 L 16.99 4 C 16.996 4 17.002 4 17.008 4 L 19 4 C 19.552 4 20 4.448 20 5 C 20 5.552 19.552 6 19 6 L 17.931 6 L 17.064 18.142 C 16.989 19.189 16.118 20 15.069 20 L 4.931 20 C 3.882 20 3.011 19.189 2.936 18.142 L 2.069 6 L 1 6 C 0.448 6 0 5.552 0 5 C 0 4.448 0.448 4 1 4 L 2.992 4 C 2.998 4 3.004 4 3.01 4 L 5 4 L 5 2 Z M 7 4 L 13 4 L 13 2 L 7 2 L 7 4 Z M 4.074 6 L 4.931 18 L 15.069 18 L 15.926 6 L 4.074 6 Z M 8 8 C 8.552 8 9 8.448 9 9 L 9 15 C 9 15.552 8.552 16 8 16 C 7.448 16 7 15.552 7 15 L 7 9 C 7 8.448 7.448 8 8 8 Z M 12 8 C 12.552 8 13 8.448 13 9 L 13 15 C 13 15.552 12.552 16 12 16 C 11.448 16 11 15.552 11 15 L 11 9 C 11 8.448 11.448 8 12 8 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesDelete;
