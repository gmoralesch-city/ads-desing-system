// figma node: 221:2599 funciones/options-vertical
export function FuncionesOptionsVertical(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "rgb(180,180,180)",
      ...props.style,
    }}>
      <svg width={16} height={4} viewBox="0 0 16 4" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: "matrix(0,1,-1,0,14,4)",
        transformOrigin: "0 0",
        width: 16,
        height: 4,
      }}>
        <path d={"M 8 4 C 9.105 4 10 3.105 10 2 C 10 0.895 9.105 0 8 0 C 6.895 0 6 0.895 6 2 C 6 3.105 6.895 4 8 4 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 2 4 C 3.105 4 4 3.105 4 2 C 4 0.895 3.105 0 2 0 C 0.895 0 0 0.895 0 2 C 0 3.105 0.895 4 2 4 Z"} fill="currentColor" fillRule="nonzero" />
        <path d={"M 14 4 C 15.105 4 16 3.105 16 2 C 16 0.895 15.105 0 14 0 C 12.895 0 12 0.895 12 2 C 12 3.105 12.895 4 14 4 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default FuncionesOptionsVertical;
